from pathlib import Path
import json
import re

import fitz
from PIL import Image
from pypdf import PdfWriter


ROOT = Path(__file__).resolve().parents[1]

PDF_DIR = ROOT / "source" / "pdf"
PUBLIC_IMAGES_DIR = ROOT / "public" / "images" / "landing"
PUBLIC_PRESENTATIONS_DIR = ROOT / "public" / "presentations"
EXTRACTED_DIR = ROOT / "source" / "extracted"
PAGE_RENDERS_DIR = EXTRACTED_DIR / "page-renders"
RAW_IMAGES_DIR = EXTRACTED_DIR / "raw-images"

PUBLIC_IMAGES_DIR.mkdir(parents=True, exist_ok=True)
PUBLIC_PRESENTATIONS_DIR.mkdir(parents=True, exist_ok=True)
PAGE_RENDERS_DIR.mkdir(parents=True, exist_ok=True)
RAW_IMAGES_DIR.mkdir(parents=True, exist_ok=True)


def slugify(value: str) -> str:
    value = value.lower().replace("ё", "e")
    translit = {
        "а": "a", "б": "b", "в": "v", "г": "g", "д": "d",
        "е": "e", "ж": "zh", "з": "z", "и": "i", "й": "y",
        "к": "k", "л": "l", "м": "m", "н": "n", "о": "o",
        "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
        "ф": "f", "х": "h", "ц": "c", "ч": "ch", "ш": "sh",
        "щ": "sch", "ъ": "", "ы": "y", "ь": "", "э": "e",
        "ю": "yu", "я": "ya",
    }
    value = "".join(translit.get(ch, ch) for ch in value)
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value or "presentation"


def save_webp_from_image(input_path: Path, output_path: Path, quality: int = 84, max_side: int = 1800) -> None:
    with Image.open(input_path) as img:
        img = img.convert("RGB")
        w, h = img.size
        scale = min(max_side / max(w, h), 1)

        if scale < 1:
            img = img.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

        img.save(output_path, "WEBP", quality=quality, method=6)


def save_webp_from_pixmap(pix, output_path: Path, quality: int = 84) -> None:
    temp_png = output_path.with_suffix(".tmp.png")
    temp_png.write_bytes(pix.tobytes("png"))

    try:
        save_webp_from_image(temp_png, output_path, quality=quality)
    finally:
        temp_png.unlink(missing_ok=True)


def merge_pdfs(pdf_files: list[Path]) -> None:
    writer = PdfWriter()

    for pdf in pdf_files:
        writer.append(str(pdf))

    output = PUBLIC_PRESENTATIONS_DIR / "full.pdf"

    with output.open("wb") as f:
        writer.write(f)

    print(f"Created {output.relative_to(ROOT)}")


def render_pages_and_covers(pdf_path: Path, manifest: list[dict]) -> None:
    slug = slugify(pdf_path.stem)
    doc = fitz.open(pdf_path)

    for page_number, page in enumerate(doc, start=1):
        pix = page.get_pixmap(dpi=170, alpha=False)

        page_path = PAGE_RENDERS_DIR / f"{slug}-page-{page_number:02d}.webp"
        save_webp_from_pixmap(pix, page_path, quality=82)

        manifest.append({
            "kind": "page-render",
            "sourcePdf": str(pdf_path.relative_to(ROOT)),
            "page": page_number,
            "path": str(page_path.relative_to(ROOT)),
            "public": False
        })

        if page_number == 1:
            cover_path = PUBLIC_IMAGES_DIR / f"{slug}-cover.webp"
            save_webp_from_pixmap(pix, cover_path, quality=84)

            manifest.append({
                "kind": "cover",
                "sourcePdf": str(pdf_path.relative_to(ROOT)),
                "page": 1,
                "path": str(cover_path.relative_to(ROOT)),
                "public": True
            })

    print(f"Rendered pages from {pdf_path.name}")


def extract_large_images(pdf_path: Path, manifest: list[dict]) -> None:
    slug = slugify(pdf_path.stem)
    doc = fitz.open(pdf_path)
    seen = set()

    for page_index, page in enumerate(doc, start=1):
        for image_index, info in enumerate(page.get_images(full=True), start=1):
            xref = info[0]

            if xref in seen:
                continue

            seen.add(xref)

            try:
                extracted = doc.extract_image(xref)
            except Exception as exc:
                print(f"Skip image xref={xref}: {exc}")
                continue

            if not extracted:
                continue

            ext = extracted.get("ext", "bin")
            width = extracted.get("width", 0)
            height = extracted.get("height", 0)
            raw_path = RAW_IMAGES_DIR / f"{slug}-p{page_index:02d}-img{image_index:02d}-{width}x{height}.{ext}"
            raw_path.write_bytes(extracted["image"])

            if width < 700 or height < 400:
                manifest.append({
                    "kind": "embedded-image-small",
                    "sourcePdf": str(pdf_path.relative_to(ROOT)),
                    "page": page_index,
                    "path": str(raw_path.relative_to(ROOT)),
                    "width": width,
                    "height": height,
                    "public": False
                })
                continue

            public_path = PUBLIC_IMAGES_DIR / f"{slug}-p{page_index:02d}-img{image_index:02d}.webp"

            try:
                save_webp_from_image(raw_path, public_path, quality=84)
                public = True
                final_path = public_path
            except Exception as exc:
                print(f"Could not convert {raw_path.name}: {exc}")
                public = False
                final_path = raw_path

            manifest.append({
                "kind": "embedded-image-public" if public else "embedded-image-raw",
                "sourcePdf": str(pdf_path.relative_to(ROOT)),
                "page": page_index,
                "path": str(final_path.relative_to(ROOT)),
                "rawPath": str(raw_path.relative_to(ROOT)),
                "width": width,
                "height": height,
                "public": public
            })

    print(f"Extracted images from {pdf_path.name}")


def create_review_html(manifest: list[dict]) -> None:
    items = [item for item in manifest if item.get("path", "").endswith(".webp")]

    cards = []

    for item in items:
        path = item["path"]
        cards.append(f"""
<article>
  <img src="../../{path}" loading="lazy">
  <p><b>{item.get("kind")}</b></p>
  <p>{path}</p>
  <small>{item.get("sourcePdf")} · page {item.get("page")}</small>
</article>
""")

    html = f"""<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title>Asset Review</title>
  <style>
    body {{
      margin: 0;
      padding: 32px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #f5f2ed;
      color: #181410;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
    }}
    article {{
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 14px 36px rgba(0,0,0,.08);
    }}
    img {{
      width: 100%;
      height: 220px;
      object-fit: cover;
      display: block;
      background: #ddd;
    }}
    p, small {{
      display: block;
      padding: 0 14px;
      word-break: break-word;
    }}
    small {{
      padding-bottom: 14px;
      color: #777;
    }}
  </style>
</head>
<body>
  <h1>Asset Review</h1>
  <p>Total WebP previews: {len(items)}</p>
  <div class="grid">
    {''.join(cards)}
  </div>
</body>
</html>
"""

    output = EXTRACTED_DIR / "asset-review.html"
    output.write_text(html, encoding="utf-8")
    print(f"Created {output.relative_to(ROOT)}")


def main() -> None:
    pdf_files = sorted(PDF_DIR.glob("*.pdf"))

    if not pdf_files:
        raise SystemExit("No PDF files found in source/pdf/")

    print("Found PDFs:")

    for pdf in pdf_files:
        print(f"- {pdf.relative_to(ROOT)}")

    manifest = []

    merge_pdfs(pdf_files)

    for pdf in pdf_files:
        render_pages_and_covers(pdf, manifest)
        extract_large_images(pdf, manifest)

    manifest_path = PUBLIC_IMAGES_DIR / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

    create_review_html(manifest)

    print(f"Created {manifest_path.relative_to(ROOT)}")
    print("Done.")


if __name__ == "__main__":
    main()
