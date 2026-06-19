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
| Business model | Book-credit subscription: 1 credit = 1 ready-to-publish book. Weekly €14.99 (6 books/wk) · Yearly €390 (312 books/yr). |
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
- **Average customer value:** subscription (≈€15/wk or €390/yr).

## SEO goals (priority order)

1. Own **transactional tool/generator intent**: "AI book cover generator", "AI book generator", "KDP royalty calculator", "book description generator", "KDP keyword tool".
2. Own **commercial-investigation intent**: "best AI book writing tools", "[competitor] alternative", "AI publishing software".
3. Keep the **informational moat**: 25 pillar guides on KDP, self-publishing, book SEO, covers, catalog ops (already strong — protect & interlink).
4. Be the **cited source in AI answers** (ChatGPT/Claude/Perplexity/Google AI) via clean schema + `llms.txt` + `content-index.json`.

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

## Tech & content constraints (this is a codebase, not a CMS)

- **Next.js 15 App Router, `output: "export"`** → fully static, deployed to **GitHub Pages** at custom domain `drafttodone.io`. No server runtime, no DB, no ISR.
- **Content lives in TypeScript data files**, not a CMS:
  - `app/blog-content.ts` — locales, shared copy, helpers, **and 8 inline pillar posts**.
  - `app/ai-writing-seo-posts.ts`, `book-marketing-seo-posts.ts`, `kdp-seo-posts.ts`, `self-publishing-seo-posts.ts`, `kdp-account-post.ts` — the other 17 posts.
  - `app/seo-pages.ts` — solution/tool landing pages.
- **Routes:** `/` (home, client EN/FR toggle), `/[locale]/blog`, `/[locale]/blog/[slug]`, `/[locale]/[slug]` (solution pages), `/site-map`.
- **Auto-generated SEO surfaces** (driven by the data files — add a post/page and these update for free): `sitemap.xml`, `robots.txt`, `feed.xml`, `manifest.webmanifest`, `llms.txt`, `ai.txt`, `content-index.json`, OG images (`opengraph-image.tsx`).
- **Design system is sacred:** Venice Inc. "California Light" aesthetic — see [`../DESIGN.md`](../DESIGN.md). White canvas, editorial serif (Newsreader) headlines, mint accent, generous space, `reveal-up` motion. Any new page/section must reuse the existing tokens and component patterns.

## How to work (rules for every SEO task)

1. **Prioritize quick wins** over long plays unless asked otherwise.
2. Tag every recommendation with **impact (high/med/low)** and **time-to-result**.
3. When **comparing competitors, output a table.**
4. **Don't guess** numbers — if a metric needs Search Console / Ahrefs / SEMrush, say so and use `/browse` to fetch it; never invent volumes or rankings.
5. **Protect the brand:** new pages match Venice (DESIGN.md) and the existing TS schema; build must stay green (`npm run build`).
6. **No content spam** — the product's whole pitch is catalog quality. Fewer, excellent pages beat bulk.
7. Browsing uses the gstack **`/browse`** skill (never other browser tools).
