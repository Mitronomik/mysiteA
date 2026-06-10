# AGENTS.md

## Project

This repository is `mysiteA`: a premium modern static landing page based on 5 PDF presentations.

Target architecture:

PDF presentations
→ content and image extraction
→ Astro static landing
→ PHP lead handler
→ Yandex SMTP
→ Beget shared hosting

## Hard constraints

Use:
- Astro
- TypeScript where useful
- plain CSS unless Tailwind is explicitly requested
- PHP for lead form backend
- PHPMailer for SMTP
- Yandex SMTP
- static hosting compatible output

Do NOT add:
- Next.js
- Vercel-specific features
- Docker
- database
- CMS
- server runtime
- external analytics by default
- complex state management
- unnecessary JS frameworks

The final site must be deployable to Beget shared hosting by uploading built static files and PHP files.

## Product goal

Build a beautiful, modern, premium real estate landing page.

Design direction:
- premium real estate landing
- spacious layout
- large typography
- soft shadows
- high-quality visuals
- mobile-first
- no generic corporate template feel
- primary conversion goal: phone lead form submission

## PR discipline

Work in small PR-sized changes.

One PR must cover one roadmap step only:
1. Project scaffold + content extraction
2. UI-first landing MVP
3. Lead form + Yandex Mail
4. SEO + performance + legal minimum
5. Deploy package + Beget instructions

Do not mix UI, backend form, SEO, and deployment in one PR.

If a requested change belongs to a later PR, mention it but do not implement it yet.

## Security rules

Never commit real secrets.

Do not put SMTP passwords in:
- JavaScript
- Astro components
- public frontend code
- Git-tracked config files

Use example config files only.

For Yandex SMTP:
- use app password, not main account password
- keep real credentials outside Git
- validate form input server-side
- use honeypot field
- return safe generic error messages

## PDF/content rules

PDF files live in:

source/pdf/

Extracted public images live in:

public/images/landing/

Combined downloadable PDF lives in:

public/presentations/full.pdf

Content audit lives in:

docs/content-audit.md

Landing content source lives in:

src/content/landing.ts

When extracting content from PDFs:
- preserve source attribution by PDF name
- do not invent facts
- separate confirmed content from assumptions
- note weak/unclear content in docs/content-audit.md
- avoid adding prices, deadlines, promotions, or legal claims unless they are explicitly present in source PDFs

## Code style

Prefer:
- simple Astro components
- semantic HTML
- accessible labels
- mobile-first CSS
- CSS variables
- responsive images
- lazy loading for non-critical images
- clear file names

Avoid:
- overengineering
- excessive dependencies
- giant components
- inline styles everywhere
- magic numbers without reason
- fake placeholder business claims

## Required checks before finishing a task

Run when relevant:

npm run build

If package scripts exist, also run:

npm run check

If checks fail, fix them before final response.

## Expected final response from Codex

At the end of every task, summarize:
- what changed
- which files changed
- how to test locally
- any limitations or follow-up items
