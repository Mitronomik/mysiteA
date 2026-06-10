# PR 1 - Project scaffold + content extraction

## Goal

Create the initial Astro project structure and prepare source materials from 5 PDF presentations.

This PR must not implement the final landing UI, lead form, SEO, privacy page, or deployment instructions.

## Scope

Implement only:

- Astro project scaffold cleanup
- folder structure
- source/pdf/ for 5 PDF presentations
- public/presentations/full.pdf placeholder or generated combined PDF if PDFs are available
- public/images/landing/ for extracted images
- src/content/landing.ts
- docs/content-audit.md
- basic index page only if required by Astro build
- scripts placeholders for future PDF/image extraction if useful

## Required files

Create or update:

- src/content/landing.ts
- public/presentations/full.pdf
- public/images/landing/
- source/pdf/
- docs/content-audit.md
- scripts/extract-pdf-assets.mjs if useful
- scripts/optimize-images.mjs if useful

## Content audit requirements

In docs/content-audit.md include:

- list of all source PDFs
- what content was extracted from each PDF
- candidate sections for the landing page
- candidate images/visuals
- unclear or missing content
- risks: outdated prices, promotions, legal claims, weak image quality
- recommendations for PR 2 UI structure

## landing.ts requirements

Create a typed content object for future UI work.

Suggested structure:

- hero
- benefits
- objects
- gallery
- consultationCta
- footer
- sourceNotes

Use placeholder content only when real PDF content is unavailable.

Mark placeholders clearly.

## Constraints

Follow AGENTS.md.

Do not add:
- Next.js
- Docker
- CMS
- database
- backend form
- Tailwind unless explicitly justified
- real SMTP credentials

## Checks

Run:

npm run build

If available, also run:

npm run check

## Final response

Summarize:
- what changed
- what still needs real PDF input
- how to test
- what PR 2 should do next
