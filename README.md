# LeverageAds — Website

Phase 1 rebuild of [leverageads.com](https://leverageads.com): Next.js (App Router, TypeScript,
Tailwind CSS v4) replacing the previous WordPress site. Brand colors and content are sourced
from `docs/LeverageAds_Website_Implementation_Document_POLISHED.docx`, the client's approved
content/IA plan.

See `docs/CONTENT-GUIDE.md` for where content lives and how to edit it, and `docs/ROADMAP.md`
for what's built vs. what's planned for Phase 2/3.

## Stack

- **Next.js 16** (App Router, Turbopack, TypeScript)
- **Tailwind CSS v4** — theme tokens defined in `src/app/globals.css` (`@theme inline` block)
- **lucide-react** for icons, **clsx** for conditional classNames
- No CMS / database — content lives in typed data files under `src/data/`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project Structure

```
src/
  app/
    layout.tsx          root layout: fonts, global <head>, Header/Footer/WhatsApp bar, Organization schema
    page.tsx             homepage
    about/page.tsx
    contact/page.tsx
    services/page.tsx    services index
    services/[slug]/     dynamic route — one template, generates all 6 service pages
    api/contact/route.ts enquiry form handler (see "Contact form" below)
    sitemap.ts robots.ts metadata routes
    icon.png apple-icon.png  favicon, cropped from the logo's triangle mark
  components/
    layout/               Header (mega menu), Footer, WhatsAppBar
    ui/                   Button, Container, SectionHeading — shared primitives
    sections/              page sections (Hero, ServiceSelectorGrid, CTABand, FAQAccordion, ...)
  data/
    site.ts               phone/email/address/WhatsApp number — single source of truth
    nav.ts                 primary nav + services mega-menu structure
    services.ts             the 6 core service pages' full content (copy, FAQs, included lists)
    faqs.ts                 homepage general FAQs
  lib/
    schema.ts               JSON-LD builders (Service, FAQ, Breadcrumb)
public/
  brand/logo.png            source logo (also used in header/footer)
```

## Editing content

Almost all copy lives in `src/data/services.ts`, `src/data/site.ts`, `src/data/nav.ts` and
`src/data/faqs.ts` — not scattered across JSX. To change a phone number, service description or
FAQ, edit the data file; the pages and JSON-LD schema pick it up automatically. Details in
`docs/CONTENT-GUIDE.md`.

## Contact form

`src/components/sections/ContactForm.tsx` posts to `src/app/api/contact/route.ts`, which
currently **validates and logs the enquiry server-side only** — it is not yet wired to email, a
CRM or a spreadsheet. Before launch, connect it to a real destination (e.g. Resend/SMTP email, a
CRM webhook, or a Google Sheet via a service like Zapier). See the `TODO` in that file.

## Brand

- Primary red `#ED3237`, grey `#96989A` — taken from the client-supplied `logo.png`.
- Full token set (tints, ink, charcoal, off-white, hairline) in `src/app/globals.css`.
- Typography: Inter (body) + Plus Jakarta Sans (display/headings) via `next/font/google`.

## Deployment

See `docs/DEPLOYMENT.md`.
