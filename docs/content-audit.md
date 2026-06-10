# Content audit · PR 1

PR 1 prepares the text/content scaffold for a future Astro landing page. Binary assets were already generated and committed manually, so this audit only references existing PDFs and images.

## Source set

| PDF | Confirmed object | District from cover | Metro from cover | Primary cover asset |
| --- | --- | --- | --- | --- |
| `source/pdf/Кирочная 6.pdf` | Кирочная 6 | Центральный | Чернышевская | `public/images/landing/kirochnaya-6-cover.webp` |
| `source/pdf/26-я линия ВО 7.pdf` | 26-я линия ВО 7 | Василеостровский | Горный институт | `public/images/landing/26-ya-liniya-vo-7-cover.webp` |
| `source/pdf/Комендантский 55к1.pdf` | Комендантский пр. 55к1 | Приморский | Комендантский проспект | `public/images/landing/komendantskii-55k1-cover.webp` |
| `source/pdf/Комендантский 59к1.pdf` | Комендантский пр. 59к1 | Приморский | Комендантский проспект | `public/images/landing/komendantskii-59k1-cover.webp` |
| `source/pdf/Парфёновская 9к1.pdf` | Парфёновская улица 9 к.1 | Адмиралтейский | Фрунзенская, Балтийская, Московские ворота | `public/images/landing/parfe-novskaya-9k1-cover.webp` |

Confirmed shared context:

- The presentations are branded `FIRST LINE`.
- The visible company positioning on covers is управление, аренда и продажа коммерческой недвижимости.
- Each presentation is for аренда помещения.
- The cover year shown in the presentation design is 2026.
- The combined presentation for download is available at `public/presentations/full.pdf`.
- `public/presentations/full-presentation.pdf` is present as an additional existing merged/exported PDF asset and is preserved, but PR 1 references `full.pdf` as the canonical configured path.

## PDF-by-PDF audit

### `Кирочная 6.pdf`

**Main meanings**

- Premium/historical central-city context.
- Address: Кирочная 6.
- District: Центральный.
- Metro: Чернышевская.
- Visual emphasis: textured stone facade, street entrance, interior/exterior supporting views.

**Images/assets used or recommended**

- Used in scaffold: `public/images/landing/kirochnaya-6-cover.webp`.
- Recommended for future UI gallery: `public/images/landing/kirochnaya-6-p02-img01.webp`, `public/images/landing/kirochnaya-6-p02-img06.webp`, selected interior/detail images from pages 3–4.

**Landing blocks suggested**

- Hero/featured object candidate because the facade has a premium, central-location feel.
- Object card with address, district, metro.
- Gallery block showing facade, details and possible interior/planning materials.

**Missing/unclear information**

- Area, rental rate, utility terms, legal conditions and availability are not confirmed in the current text scaffold.
- Any traffic, footfall, tenant mix or investment claims must be verified before use.

### `26-я линия ВО 7.pdf`

**Main meanings**

- Commercial premises on Васильевский остров.
- Address: 26-я линия ВО 7.
- District: Василеостровский.
- Metro: Горный институт.
- Visual emphasis: modern street-level facade and visible entrance group.

**Images/assets used or recommended**

- Used in scaffold: `public/images/landing/26-ya-liniya-vo-7-cover.webp`.
- Recommended for future UI gallery: `public/images/landing/26-ya-liniya-vo-7-p02-img01.webp`, `public/images/landing/26-ya-liniya-vo-7-p02-img06.webp`, selected page 3–4 detail images.

**Landing blocks suggested**

- District/location section for Василеостровский район.
- Object card with cover photo and confirmed metro.
- Gallery materials for facade, context and room/detail views.

**Missing/unclear information**

- No confirmed pricing, exact area, ceiling heights, power capacity or technical limits are included in PR 1 content.
- Any mention of nearby demand drivers should be treated as an assumption until verified from source materials.

### `Комендантский 55к1.pdf`

**Main meanings**

- Commercial premises in a large residential/commercial first-floor environment.
- Address: Комендантский пр. 55к1.
- District: Приморский.
- Metro: Комендантский проспект.
- Visual emphasis: large modern residential building with ground-floor commercial frontage.

**Images/assets used or recommended**

- Used in scaffold: `public/images/landing/komendantskii-55k1-cover.webp`.
- Recommended for future UI gallery: `public/images/landing/komendantskii-55k1-p02-img01.webp`, `public/images/landing/komendantskii-55k1-p03-img05.webp`, `public/images/landing/komendantskii-55k1-p04-img03.webp`.

**Landing blocks suggested**

- Object card for Приморский район offer.
- Comparative block with the second Kомендантский object to show nearby alternatives.
- Visual proof block with facade and first-floor commercial line.

**Missing/unclear information**

- Availability of a separate entrance, signage conditions, area and engineering data need source confirmation.
- Do not state traffic or profitability metrics without verified source data.

### `Комендантский 59к1.pdf`

**Main meanings**

- Commercial premises near the other Kомендантский option.
- Address: Комендантский пр. 59к1.
- District: Приморский.
- Metro: Комендантский проспект.
- Visual emphasis: bright modern facade, street-level entrance, surrounding first-floor commerce.

**Images/assets used or recommended**

- Used in scaffold: `public/images/landing/komendantskii-59k1-cover.webp`.
- Recommended for future UI gallery: `public/images/landing/komendantskii-59k1-p02-img01.webp`, `public/images/landing/komendantskii-59k1-p03-img04.webp`, `public/images/landing/komendantskii-59k1-p05-img04.webp`.

**Landing blocks suggested**

- Object card for a second Приморский district option.
- Cluster section: two Kомендантский objects with shared metro and district context.
- Gallery with facade, entrance and additional interior/context images.

**Missing/unclear information**

- Exact commercial terms and technical specifications are not confirmed in PR 1.
- Nearby tenants visible in imagery should not be converted into marketing claims without permission/verification.

### `Парфёновская 9к1.pdf`

**Main meanings**

- Commercial premises in a modern building in Адмиралтейский район.
- Address: Парфёновская улица 9 к.1.
- District: Адмиралтейский.
- Metro: Фрунзенская, Балтийская, Московские ворота.
- Visual emphasis: glazed corner entrance group and contemporary facade.

**Images/assets used or recommended**

- Used in scaffold: `public/images/landing/parfe-novskaya-9k1-cover.webp`.
- Recommended for future UI gallery: `public/images/landing/parfe-novskaya-9k1-p01-img01.webp`, `public/images/landing/parfe-novskaya-9k1-p02-img04.webp`, `public/images/landing/parfe-novskaya-9k1-p04-img03.webp`.

**Landing blocks suggested**

- Object card with multiple metro options.
- Gallery block focused on corner glazing and modern facade.
- CTA-adjacent object highlight because the entrance image is visually strong.

**Missing/unclear information**

- Walking times to metro stations are not confirmed and should not be invented.
- Area, price, contract terms and permitted use remain follow-up content questions.

## Duplicate findings

- All five PDFs repeat the same offer type: `аренда помещения`.
- All five presentations use the same FIRST LINE branding and similar cover composition.
- The two Kомендантский presentations duplicate district and metro context; the future UI should group or compare them instead of repeating identical copy.
- Repeated generic claims such as premium quality, strong location or audience demand should be avoided unless tied to a specific visible/confirmed fact.
- Similar image categories repeat across PDFs: cover, facade, context/panorama, interiors/details and planning/supporting visuals.

## Missing or unclear information across the set

- Exact rentable areas.
- Rental rates, deposits, operating expenses and tax/VAT terms.
- Availability dates and lease duration.
- Technical specifications: power capacity, ceiling heights, wet points, ventilation, loading/unloading, signage rights.
- Legal restrictions, permitted uses, ownership/agency details and required disclaimers.
- Contact phone/email and final lead routing details.
- Accessibility details and exact entrance conditions.

These items must be treated as follow-up questions. They are intentionally not invented in `src/content/landing.ts`.

## Recommended landing structure

1. Hero: FIRST LINE positioning, concise offer, one strong cover image, link to the merged PDF.
2. Benefits: source-backed benefits only — prepared presentations, district spread, visual readiness.
3. Object cards: five premises with address, district, metro and source PDF attribution.
4. Gallery: curated existing images grouped by facade/context/interior/plans.
5. Download CTA: merged presentation PDF at `/presentations/full.pdf`.
6. Future PR 3 lead CTA: phone-first form with PHP handler, honeypot and SMTP outside frontend code.

## Future UI direction

- Premium real estate landing.
- Minimalistic and spacious composition.
- Large editorial typography.
- Soft shadows and warm neutral palette.
- Mobile-first layout with strong image hierarchy.
- Focus on lead generation, but no lead form/backend until PR 3.
- High-quality visuals from existing `public/images/landing/` assets.
- Avoid a generic corporate template look; use object-specific photography and restrained copy.

## PR 1 implementation notes

- `src/content/landing.ts` stores the structured landing content and source attribution.
- `src/pages/index.astro` renders a minimal scaffold/preview only; it is not the final landing UI.
- `src/styles/global.css` contains basic layout tokens and scaffold styling for buildability.
- No PDFs or images were created, modified, renamed or deleted as part of PR 1.
