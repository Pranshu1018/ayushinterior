# Ayush Interior: SEO & local ranking checklist (ayushinteriors.in)

The website side is built: 24 pages, structured data on each, sitemap, robots.txt, llms.txt, geo tags.
What decides whether you show up for **"interior designer in Navi Mumbai"** or **"interior designer near me"** is mostly below:
your Google Business Profile, reviews, consistent listings and real project content. Work top to bottom.

---

## 1. Before you go live (1 day)

- [ ] Fill in every `TODO-REAL` in `src/data/site.ts`: exact shop address, phone, WhatsApp, map pin (`geo`), Google profile link, social links.
- [ ] **Pick one spelling of the name** and use it everywhere: "Ayush Interior" or "Ayush Interiors" (your domain is *ayushinteriors.in*). The website, Google profile, Justdial and Instagram must match exactly.
- [ ] Replace stock photos with your own job photos (before/after from the same corner). Name files descriptively, e.g. `modular-kitchen-kharghar-2bhk.jpg`.
- [ ] Replace placeholder testimonials, numbers and projects with real ones. Never publish invented reviews.
- [ ] Deploy `dist/` (Netlify, Vercel or Cloudflare Pages, all free) and connect **ayushinteriors.in**.
- [ ] Make `https://ayushinteriors.in` the main address: redirect `www.ayushinteriors.in` and `http://` to it.
- [ ] Set the environment variables on your host: `PUBLIC_LEAD_WEBHOOK`, `PUBLIC_GA_ID`, and (if using the HTML-tag method) `PUBLIC_GSC_VERIFICATION`.

## 2. Google Search Console (30 minutes)

1. Go to <https://search.google.com/search-console> → **Add property** → choose **Domain** → enter `ayushinteriors.in`.
2. Google shows a **TXT record**. Add it in your domain registrar's DNS settings (GoDaddy / Hostinger / BigRock → DNS → Add TXT, host `@`). Click Verify (it can take up to an hour).
   *Alternative:* choose **URL prefix**, pick the **HTML tag** method, copy only the `content="…"` value into `PUBLIC_GSC_VERIFICATION`, redeploy, then click Verify.
3. **Sitemaps** → submit `https://ayushinteriors.in/sitemap.xml`.
4. **URL Inspection** → paste each URL below → **Request indexing** (about 10 per day):
   - `/`, `/services`, `/interior-designers`
   - `/services/home-interiors`, `/services/modular-kitchen`, `/services/wardrobes`, `/services/bathroom-renovation`, `/services/false-ceiling`
   - `/interior-designers/kharghar`, `/vashi`, `/nerul`, `/seawoods`, `/cbd-belapur`, `/airoli`, `/panvel`, `/ulwe`
5. Test the home page and one service page at <https://search.google.com/test/rich-results> (it should detect LocalBusiness, Breadcrumb and FAQ).
6. Link Search Console to Google Analytics (Admin → Product links).
7. Each week, check **Pages** (anything "not indexed"?) and **Performance → Queries** (which searches you appear for).

## 3. Bing Webmaster Tools (10 minutes, worth it)

<https://www.bing.com/webmasters> → **Import from Google Search Console**. Bing's index powers ChatGPT search and Microsoft Copilot answers.

## 4. Google Business Profile: the #1 factor for the map results

<https://business.google.com>

- [ ] **Name:** your exact brand name only. Don't add keywords like "Best Interior Designer Navi Mumbai"; Google suspends profiles for it.
- [ ] **Primary category:** *Interior designer*. **Secondary:** *Kitchen remodeler*, *Bathroom remodeler*, *Interior fitting contractor*, *General contractor*, *Carpenter*.
- [ ] **Address / service area:** if clients visit your office, show the address. Otherwise hide it and add service areas: Vashi, Nerul, Seawoods, CBD Belapur, Kharghar, Airoli, Ghansoli, Kopar Khairane, Sanpada, Panvel, Ulwe, Kamothe, Taloja.
- [ ] **Website:** `https://ayushinteriors.in/?utm_source=google&utm_medium=organic&utm_campaign=gbp` (so you can see GBP traffic in Analytics).
- [ ] **Phone / WhatsApp**, hours, opening date (2014), description (750 characters: services, areas, free site visit, warranty).
- [ ] **Services:** add each service with its "from" price (copy from the website).
- [ ] **Photos:** 30+ real photos to start (logo, cover, team at work, finished rooms, before/after), then 3–5 new ones every week.
- [ ] **Posts:** one per week: a finished project, an offer, a tip ("best plywood for Navi Mumbai humidity").
- [ ] **Q&A:** add and answer your own common questions (cost, timeline, warranty).
- [ ] Turn on **messaging**, and add the booking link `https://ayushinteriors.in/#quote`.

## 5. Reviews: the fastest way up the map pack

- [ ] Ask **every** client for a Google review at handover. Print a QR card with your review link (GBP → *Ask for reviews*).
- [ ] Send the link on WhatsApp the same day, while they're happy.
- [ ] Goal: 25 reviews in month 1, 50+ by month 3, then steady new reviews every week.
- [ ] Reply to every review within 48 hours, naturally mentioning the work and area ("Glad you love the modular kitchen in your Kharghar flat!").
- [ ] Never buy reviews or post fake ones; Google filters them and can suspend the profile.

## 6. Consistent listings (citations): same name, address, phone everywhere

Create or claim these with exactly the same details as the website:

- [ ] Justdial · Sulekha · IndiaMART · Houzz India · UrbanClap/Urban Company (if you partner)
- [ ] Bing Places · Apple Business Connect (Apple Maps)
- [ ] Facebook page · Instagram business · Pinterest · YouTube · LinkedIn company page
- [ ] NoBroker / MagicBricks home-services listings · local Navi Mumbai directories
- [ ] Add each profile URL to `site.social` in `src/data/site.ts`. It feeds the `sameAs` schema and helps Google and AI tools connect your brand.

## 7. Content that keeps you climbing (2–4 hours a month)

- [ ] **One real project post per month**, per area: "2BHK interiors in Kharghar: ₹6.8L, 48 days", with before/after photos, budget, materials and the client's quote. Add it to `projects` in `src/data/content.ts`; ask me to turn these into individual project pages.
- [ ] **Cost guides** people search for: "Modular kitchen cost in Navi Mumbai (2026)", "2BHK interior cost in Navi Mumbai".
- [ ] Once you've done 2–3 jobs in a big society or project, a page about that society ranks well for its residents.
- [ ] Short **YouTube / Instagram reels** of walkthroughs and before/afters; link back to the matching service page.

## 8. Links from other websites (ongoing)

- [ ] Ask suppliers and brand dealers (plywood, hardware, tiles) to list you as a partner installer.
- [ ] Partner with builders, real-estate agents and society committees; a mention on their site or newsletter is valuable.
- [ ] Pitch a project story to local Navi Mumbai news and lifestyle sites.
- [ ] Houzz and Pinterest boards with your project photos linking to your site.

## 9. AI search (GEO: ChatGPT, Gemini, Perplexity, Google AI Overviews)

Already done on the site: `/llms.txt` with your facts and prices, robots.txt allowing AI crawlers, FAQ content and structured data.
What you do:
- [ ] Keep the same facts (name, areas, prices, warranty) on the website, Google profile, Justdial and Houzz. AI tools trust what agrees across sources.
- [ ] Get reviews on Google **and** Justdial. AI answers often cite them.
- [ ] Get indexed on Bing (step 3).
- [ ] Each month, ask ChatGPT/Gemini "best interior designer in Navi Mumbai" and note who they mention and why.

## 10. Track it monthly

| Where | What to check |
| :--- | :--- |
| Search Console | Clicks, impressions, average position for "interior designer navi mumbai", "modular kitchen navi mumbai", area searches |
| Google Business Profile → Performance | Calls, direction requests, website clicks, searches that found you |
| Google Analytics | `generate_lead`, `click_call`, `click_whatsapp` events, which pages bring leads |
| Leads sheet | Which service and area each lead came from (UTM saved per lead) |

## What to expect

- **1–2 weeks:** pages indexed; you appear for your brand name.
- **1–3 months:** with a complete Google profile and 25–50 reviews, you start appearing in the map pack for nearby nodes.
- **3–6+ months:** competitive phrases like "interior designer in Navi Mumbai" need steady reviews, real project content and a few good links. Nobody can guarantee position #1; consistency wins.
