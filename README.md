# mysiteA

`mysiteA` is an Astro static landing-page project for a premium commercial real estate offer based on five existing PDF presentations.

Target pipeline:

```text
PDF presentations
→ content and image extraction
→ Astro static landing
→ PHP lead handler in a later PR
→ Yandex SMTP in a later PR
→ Beget shared hosting deployment in a later PR
```

## PR 1 scope

This branch implements **PR 1 — Project scaffold + content extraction**.

Included in PR 1:

- Astro project scaffold for a static landing page.
- Structured landing content in TypeScript.
- Content audit based on the five existing source PDFs and existing extracted image assets.
- Minimal scaffold page that proves the content can be rendered.
- Basic global CSS tokens and simple scaffold layout.
- Reference to the existing merged presentation PDF.

Non-goals for PR 1:

- No final landing UI.
- No lead form logic.
- No PHP backend.
- No SMTP or Yandex Mail integration.
- No SEO/performance/legal implementation beyond default buildable markup.
- No deploy package or Beget instructions.
- No CMS, database, Docker, analytics or server runtime.
- No changes to binary assets.

## Project structure

```text
/
├── docs/
│   └── content-audit.md
├── public/
│   ├── images/landing/
│   └── presentations/
├── source/
│   └── pdf/
├── src/
│   ├── content/landing.ts
│   ├── pages/index.astro
│   └── styles/global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Source PDFs

The five source presentations are stored in:

```text
source/pdf/
```

Current source PDF set:

- `source/pdf/Комендантский 55к1.pdf`
- `source/pdf/Комендантский 59к1.pdf`
- `source/pdf/Парфёновская 9к1.pdf`
- `source/pdf/26-я линия ВО 7.pdf`
- `source/pdf/Кирочная 6.pdf`

Do not edit, rename, delete or recommit these PDF files from Codex tasks.

## Extracted landing images

Existing extracted images are stored in:

```text
public/images/landing/
```

The text manifest for generated assets is stored at:

```text
public/images/landing/manifest.json
```

PR 1 references existing images only. It does not generate new image assets.

## Merged presentation PDF

The canonical merged downloadable presentation is stored at:

```text
public/presentations/full.pdf
```

If present, this repository also preserves:

```text
public/presentations/full-presentation.pdf
```

The landing content references `/presentations/full.pdf`.

## Landing content source

Structured landing content lives in:

```text
src/content/landing.ts
```

The required exported shape is:

```ts
export const landingContent = {
  hero: {},
  benefits: [],
  sections: [],
  gallery: [],
  cta: {},
};
```

The content source preserves source PDF attribution and avoids unconfirmed facts such as prices, deadlines, promotions, exact areas or legal claims.

## Content audit

The PDF/content audit lives in:

```text
docs/content-audit.md
```

It includes:

- a section for each PDF;
- main meanings;
- images/assets used or recommended;
- landing blocks suggested from each PDF;
- duplicate findings;
- missing or unclear information;
- recommended landing structure;
- future UI direction.

## Install

Use Node.js `>=22.12.0` as declared in `package.json`.

```sh
npm install
```

## Run locally

```sh
npm run dev
```

Astro starts the local development server, usually at:

```text
http://localhost:4321/
```

## Build

```sh
npm run build
```

The production static build is emitted to:

```text
dist/
```

## Preview build

```sh
npm run preview
```

## Roadmap boundaries

- PR 1: Project scaffold + content extraction.
- PR 2: UI-first landing MVP.
- PR 3: Lead form + Yandex Mail.
- PR 4: SEO + performance + legal minimum.
- PR 5: Deploy package + Beget instructions.
