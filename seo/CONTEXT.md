# DraftToDone.io — SEO Context

> The permanent business-context file. This is the SaaS equivalent of the
> "load your business context" step in the local-SEO playbook. Reference this
> file before running any SEO prompt in [`PROMPT-LIBRARY.md`](./PROMPT-LIBRARY.md)
> so every audit, brief or page is written for *this* product, not a generic one.
>
> The local playbook is built for a brick-and-mortar business with a Google
> Business Profile, a map pack, citations and reviews. DraftToDone has none of
> those. The transferable core — context → systematic audit → gap analysis →
> prioritized execution — is kept; the local-only surfaces are dropped. See
> [`AUDIT.md`](./AUDIT.md) for the full translation table.

## Business basics

| Field | Value |
|-------|-------|
| Product | DraftToDone.io — AI publishing software (SaaS) |
| Marketing site | https://drafttodone.io (this repo) |
| App | https://app.drafttodone.io |
| Stage | Launched, 2026. Every CTA sends visitors to the live app. |
| Positioning | "The complete AI publishing machine" — generate the whole book *product*, not just text |
| Origin story | Founder ran an Amazon KDP catalog (~€400/mo), got permanently banned over a pen-name issue, is rebuilding the private automation as a SaaS and building in public to recover lost MRR. |
| Business model | Book credits: 1 credit = 1 ready-to-publish book. €10 per book with no subscription (lead offer) · Weekly €14.99 (2 books/wk) · Yearly €390 (104 books/yr). |
| Conversion | CTAs to app.drafttodone.io (no on-site signup) |

## Product (what we actually generate)

One controlled pipeline from idea to KDP upload:

- **Full manuscript** — AI picks ideal length, writes the whole book from a niche brief.
- **Complete cover package** — front cover, spine and back cover with AI imagery, print-ready.
- **Optimized metadata** — SEO title, subtitle, description, KDP keywords.
- **Verified pen names** — reduce copyright-strike risk.
- **Catalog quality gates** — chapter acceptance criteria, metadata/cover QA. Positioning is *catalog quality, not content spam.*

## Market & audience

- **Who:** indie publishers, self-publishing authors, KDP "operators" running catalogs at scale.
- **Job to be done:** ship more publish-ready books, faster, without quality or compliance blowups.
- **Languages:** English, French, Italian, German (full site i18n).
- **Average customer value:** €10 per book one-off, or subscription (≈€15/wk or €390/yr).

## SEO goals (priority order)

1. Own **transactional tool/generator intent**: "AI book cover generator", "AI book generator", "KDP royalty calculator", "book description generator", "KDP keyword tool".
2. Own **commercial-investigation intent**: "best AI book writing tools", "[competitor] alternative", "AI publishing software".
3. Keep the **informational moat**: 25 pillar guides on KDP, self-publishing, book SEO, covers, catalog ops (already strong — protect & interlink).
4. Be the **cited source in AI answers** (ChatGPT/Claude/Perplexity/Google AI) via clean schema + `llms.txt` + `llms-full.txt` + `ai.txt` + `content-index.json` + `answer-engine.json`.

## Keywords we already target

- **Solution pages:** KDP royalty calculator · AI publishing software · AI book cover generator (+ FR/IT/DE variants).
- **Blog pillars (EN):** how to write a book with AI · best AI book writing tools · KDP AI content policy/disclosure · KDP paperback formatting · Amazon Ads for KDP · book description that sells · get book reviews · KDP categories & BSR · create KDP account/payments · KDP royalties / earnings · choose KDP keywords · KDP Select vs not · why my KDP book isn't selling · how much self-published authors make · price a self-published book · self-publish step-by-step · low-content books · pen-name & author brand · niche keyword research · AI book cover design · AI publishing workflow · AI manuscript editing · book SEO metadata · KDP launch checklist · catalog operations.

## Competitive set (for gap analysis — we can't see their analytics, so list them explicitly)

| Bucket | Competitors to benchmark |
|--------|--------------------------|
| AI writing tools | Sudowrite, Jasper, Squibler, Novelcrafter, Rytr |
| Book formatting | Atticus, Vellum, Reedsy |
| KDP research tools | Publisher Rocket (Kindlepreneur), Book Bolt, BookBeam, KDSPY |
| Cover tools | BookBrush, Canva, Designrr |
| Education/authority | Kindlepreneur, Self Publishing School, Dave Chesson, Reddit r/selfpublishing |

When a prompt says "competitors", default to the relevant bucket above unless told otherwise.

## Ahrefs baseline — 20 July 2026

Treat these as a dated snapshot, not permanent truth. Refresh them before any decision that depends on current rankings, traffic, or backlinks.

### Organic visibility

- **DR 0, UR 0, Ahrefs Rank 98,995,747.**
- **1 organic keyword, 0 estimated organic visits, $0 traffic value.**
- The only detected ranking is **“amazon kdp keywords”**, position **44** in the US, monthly volume **500**, estimated traffic **0**.
- The ranking URL is `/en/blog/how-to-choose-kdp-keywords-beginner-guide`; Ahrefs reports no keyword in positions 8–30 and only one organic page.
- Relevant US organic competitors surfaced by Ahrefs: `keywordtooldominator.com`, `keywordtool.io`, `kindlepreneur.com`, and `reedsy.com`. Content Gap itself is locked on the current plan.

### Backlinks and authority

- **9 live backlinks** from **8 referring domains**; 11 backlinks and 9 referring domains all-time.
- 8 backlinks are followed and 1 is nofollow. The only high-DR referring domain is `trustmrr.com` (DR 69), and that backlink is nofollow.
- Ahrefs labels `sheepnav.com`, `mrrwars.com`, and `aistartup.co` as spam. Most remaining domains have DR 0.
- Existing backlinks point to the homepage or `http://www` tracking/redirect variants. There are **no observed deep editorial backlinks** to solution pages, tools, or guides.

### Technical crawl

- Latest Site Audit: **Health Score 98 (Excellent)**, **182 crawled URLs** (168 internal URLs and 14 resources).
- HTTP distribution: **180 successful**, **4 redirects**, **1 client error**. Ahrefs reports 4 errors affecting 3 URLs, 379 warnings, and 474 notices.
- One 404 is Cloudflare’s `/cdn-cgi/l/email-protection`, linked from the EN and FR DraftToDone CLI/MCP articles. Replace or exempt the obfuscated email links.
- **157 pages link to `https://app.drafttodone.io/`, which returns 307.** Point CTAs directly to the final destination to remove the site-wide redirect hop.
- **146 titles** and **71 meta descriptions** are flagged as too long. Shorten templates first, prioritizing English money pages and then localized variants.
- Ahrefs showed a structured-data validation warning count in the overview, but the detail report returned no rows and a fetch error; validate independently before changing schema.
- Site Audit found 0 internal-link opportunities, but this is not evidence that the current maillage is sufficient: the report has only one ranked keyword/page to work from.

### Data gaps on the current Ahrefs plan

- GSC Insights, Rank Tracker, Keywords Explorer, and Content Gap are unavailable without upgrading. Ahrefs Web Analytics is not configured.
- Brand Radar was still setting up, so there is no dependable AI-visibility baseline yet.
- Do not upgrade or subscribe to fill these gaps. Use the connected Google Search Console directly when available, plus manual SERP checks and the accessible Ahrefs reports.

## Search-performance baseline — exports dated 20 July 2026

Treat these exports as a dated snapshot. GSC daily totals are the source of truth for overall Google performance; query and page tables are partial and must not be summed against the daily total.

### Google Search Console

- Coverage period in the export: **2 June–18 July 2026**.
- **6 clicks, 593 impressions, 1.01% CTR, weighted average position 41.78**.
- The latest 14 active days produced **520 impressions but only 1 click** (0.19% CTR, average position about 46), versus 58 impressions and 4 clicks in the previous 14 active days. Visibility is expanding faster than rankings.
- Priority pages by impressions: `/en/kdp-royalty-calculator` (141, position 63.06), `/en/blog/create-kdp-account-payments-guide` (92, position 42.89), `/fr/blog/mise-en-page-livre-broche-kdp` (74, position 34.31), `/en/ai-publishing-software` (46, position 55.91), `/en/blog/how-to-choose-kdp-keywords-beginner-guide` (41, position 40.63), and `/en/blog/best-ai-book-writing-tools-compared` (36, position 45.25).
- Best striking-distance opportunities: Amazon Ads guide (30 impressions, position 19.47), EN blog index (20, 23.65), IT KDP categories guide (10, 8.6), EN KDP book generator (7, 9.86), EN Atticus alternative (7, 16.43), EN niche/keyword research (5, 12.6), and DE Amazon book description (5, 18.8).
- Leading query clusters: `formater roman kdp` (72 impressions, position 34.71), royalty-calculator variants (113 impressions, average position about 70), and KDP keyword variants (23 impressions, average position about 49).

### Bing / Brave search export

- Daily totals: **3 clicks, 278 impressions, 1.08% CTR**; impressions accelerated to 90 on 18 July.
- Keyword table: 102 rows, 175 represented impressions, weighted average position 5.27.
- Important top-10 CTR gaps: `kdp sign up`, French KDP royalty-calculator variants, and low-content-book queries rank on page one but often have zero clicks.
- Main represented clusters: royalties (49 impressions, 1 click, position 5.90), low-content (49, 1 click, 4.47), and KDP account setup (37, 0 clicks, 5.57).

### AI search / Brave grounding

- The daily export contains **186 citation occurrences summed across the available dates**; the peak was 24 citations on 12 July.
- The query report exposes one high-confidence opportunity: `self-publishing pricing royalties expert advice`, with 11 citations and 25% citation share.
- This makes the royalty calculator the first GEO page to strengthen with answer-first copy, dated methodology, transparent assumptions, official sources and numerical examples.

### Execution rule from this baseline

Prioritize CTR and relevance improvements on pages that already have impressions before creating new URLs. The first implementation queue is: royalty calculator, KDP account sign-up/payments, French paperback formatting, low-content books, Amazon Ads, KDP keywords, KDP book generator and Atticus alternative.

## Tech & content constraints (this is a codebase, not a CMS)

- **Next.js 15 App Router, `output: "export"`** → fully static, deployed to **GitHub Pages** at custom domain `drafttodone.io`. No server runtime, no DB, no ISR.
- **Content lives in TypeScript data files**, not a CMS:
  - `app/blog-content.ts` — locales, shared copy, helpers, **and 8 inline pillar posts**.
  - `app/ai-writing-seo-posts.ts`, `book-marketing-seo-posts.ts`, `kdp-seo-posts.ts`, `self-publishing-seo-posts.ts`, `kdp-account-post.ts` — the other 17 posts.
  - `app/seo-pages.ts` — solution/tool landing pages.
- **Routes:** `/` (home, client EN/FR toggle), `/[locale]/blog`, `/[locale]/blog/[slug]`, `/[locale]/[slug]` (solution pages), `/site-map`.
- **Auto-generated SEO surfaces** (driven by the data files — add a post/page and these update for free): `sitemap.xml`, `robots.txt`, `feed.xml`, `manifest.webmanifest`, `llms.txt`, `llms-full.txt`, `ai.txt`, `content-index.json`, `answer-engine.json`, OG images (`opengraph-image.tsx`).
- **Design system is sacred:** Venice Inc. "California Light" aesthetic — see [`../DESIGN.md`](../DESIGN.md). White canvas, editorial serif (Newsreader) headlines, mint accent, generous space, `reveal-up` motion. Any new page/section must reuse the existing tokens and component patterns.

## How to work (rules for every SEO task)

1. **Prioritize quick wins** over long plays unless asked otherwise.
2. Tag every recommendation with **impact (high/med/low)** and **time-to-result**.
3. When **comparing competitors, output a table.**
4. **Don't guess** numbers — if a metric needs Search Console / Ahrefs / SEMrush, say so and use `/browse` to fetch it; never invent volumes or rankings.
5. **Protect the brand:** new pages match Venice (DESIGN.md) and the existing TS schema; build must stay green (`npm run build`).
6. **No content spam** — the product's whole pitch is catalog quality. Fewer, excellent pages beat bulk.
7. Browsing uses the gstack **`/browse`** skill (never other browser tools).
