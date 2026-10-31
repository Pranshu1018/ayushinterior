# Ayush Interior website

Single-page site modelled on the Housemood Framer template (layout, type, palette and preloader), rebuilt in Astro 6 + Tailwind v4 with a Preact quote form.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static files in dist/
```

Requires Node 22.12+. Vite is pinned to v7 (`overrides` in package.json) because Astro 6 and Tailwind's Vite plugin must share one Vite version.

## Edit content
- Business details, phone, address, localities: `src/data/site.ts`
- Projects, services + prices, before/after pairs, process, offers, testimonials, FAQ: `src/data/content.ts`
- Colours / fonts: `src/styles/global.css`
- Preloader timing: `src/components/Preloader.astro`

Search for `TODO-REAL`: every number, testimonial, price and photo is a placeholder until replaced with your own.

## Sections
Preloader → Hero → Numbers → Our Projects (drag carousel) → Our Services (hover image preview) → The Transformation (before/after with tabs) → The Process → Offers ticker → Big CTA → Client Stories → Advantages → FAQ → Get a Quote → Footer.

## Leads
The quote form posts to `PUBLIC_LEAD_WEBHOOK`; set it up with `docs/lead-webhook.gs` (Google Sheet + email, free). UTM tags, gclid and fbclid are saved with each lead. `/thank-you` is the conversion page for Google Ads / Meta.

## SEO
- 9 service pages (`/services/<slug>`) and 8 Navi Mumbai area pages (`/interior-designers/<slug>`), content in `src/data/pages.ts`
- Structured data: LocalBusiness (with geo, hours, area served), WebSite, Service, BreadcrumbList, FAQPage
- `/sitemap.xml`, `/robots.txt` (AI crawlers allowed), `/llms.txt` (facts for AI assistants), geo meta tags, icons + manifest
- Search Console / Bing verification via `PUBLIC_GSC_VERIFICATION` / `PUBLIC_BING_VERIFICATION`
- Launch steps (Search Console, Google Business Profile, reviews, citations): `docs/SEO-LAUNCH-CHECKLIST.md`
