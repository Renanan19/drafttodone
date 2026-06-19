# DraftToDone.io — SEO Prompt Library

The 20-part local-SEO playbook, **translated for a static-export SaaS site**.
Every prompt assumes you have already loaded [`CONTEXT.md`](./CONTEXT.md).

**Why these differ from the original:** the source playbook optimizes a Google
Business Profile (categories, attributes, map pack, reviews, photos, citations,
GBP posts). DraftToDone has no physical location and no GBP, so those eight
surfaces don't exist. They're replaced 1:1 with the surface that actually
controls a SaaS site's rankings — on-page metadata, schema, social cards,
internal links, programmatic landing pages and content. Local prompts that have
no SaaS analog are marked **N/A** with the reason.

Browsing uses the gstack **`/browse`** skill. Tool-gated prompts (Search
Console / Ahrefs / SEMrush) note it; log in first, then run.

> How to load context, once per session:
> *"Read `seo/CONTEXT.md`. Use it as the base for everything in this session.
> Don't ask me for business info again."*

---

## PART A — On-page & technical (replaces GBP prompts 1–8)

### 1. Title & meta audit  *(replaces "GBP category audit")*
> Read `seo/CONTEXT.md`. Using `/browse`, open the live pages and the SERPs for
> our target keywords. Audit every route's `<title>` and meta description against
> the keyword it should rank for and against the top 3 competitors ranking for
> that term. Output a table: URL · current title · char count · target keyword ·
> keyword present? · competitor titles · suggested rewrite. Flag titles >60 chars,
> descriptions >155, missing primary keyword, and duplicate titles across locales.
> Then give a prioritized rewrite list (impact + effort).

### 2. Structured-data / schema audit  *(replaces "GBP attributes audit")*
> Read `seo/CONTEXT.md`. For the home, a blog post, the blog index and a solution
> page, extract all JSON-LD and validate with Google's Rich Results test via
> `/browse`. Confirm we emit: Organization, WebSite, SoftwareApplication
> (site-wide); Article + FAQPage + BreadcrumbList (posts); SoftwareApplication +
> FAQPage + BreadcrumbList (solutions); CollectionPage (blog index); FAQPage
> (home). Table: page type · schema present · errors · warnings · missing
> property. Recommend additions (e.g. `aggregateRating`, `Product`/`Offer`,
> `HowTo`, `VideoObject`) ranked by rich-result upside.

### 3. Social share / OG image audit  *(replaces "GBP photo audit", #8 — the CTR play)*
> Read `seo/CONTEXT.md`. Paste 5 of our URLs into a social-card validator (X,
> LinkedIn, Slack/Discord, opengraph.xyz) via `/browse`. Confirm every page
> returns a 1200×630 `og:image` + `twitter:image` with `summary_large_image`,
> and that article/solution cards show the page title. Table: URL · og:image? ·
> twitter card? · image renders? · title correct? Flag anything imageless or
> truncated. *(Baseline already shipped via `app/opengraph-image.tsx` — use this
> to verify and to spot pages that need a bespoke card.)*

### 4. Internal-linking audit  *(replaces "GBP services section", maps to money-page #10)*
> Read `seo/CONTEXT.md`. Crawl the site with `/browse` and build the internal
> link graph. For each money page (solution pages, waitlist) list inbound
> internal links and anchor text. Flag orphan/under-linked money pages and
> generic anchors ("read more"). Output: a ranked list of *specific* new links
> (source page → target money page, exact anchor), highest authority-source
> first (home > blog index > high-traffic posts).

### 5. Programmatic landing-page expansion  *(replaces "service + city pages", #11)*
> Read `seo/CONTEXT.md` and `app/seo-pages.ts`. We rank pages, not the site, so
> each transactional intent needs its own solution page. Propose the next 5
> solution pages by intent (e.g. "book description generator", "book title
> generator", "AI book generator", "KDP keyword tool", "low-content book
> generator"). For each: slug (en/fr/it/de), title (<60), description (<155),
> eyebrow, h1, lead, 3 sections × 4 points, 3 FAQ, 5 keywords — as a valid
> `SolutionPage` object matching the existing schema and Venice tone. Keep it
> differentiated from the matching *blog guide* (tool/product page vs how-to) so
> they don't cannibalize.

### 6–8 — N/A
- **GBP attributes / reviews / posts / photos cadence** → no GBP. The ranking
  weight those carry locally is carried here by schema (#2), share cards (#3) and
  publishing cadence (covered by content prompts below).

---

## PART B — Website & content (prompts 9–13, 16–17)

### 7. Keyword gap  *(SEMrush/Ahrefs — log in first)*
> Read `seo/CONTEXT.md`. In the Keyword Gap tool via `/browse`, compare
> `drafttodone.io` against the relevant competitor bucket from CONTEXT.md. Export
> keywords where a competitor ranks 1–20 and we don't. Filter to volume 50–2,000,
> KD <40, containing: ai book / kdp / self-publish / book cover / book
> description / pen name / royalties. Top 20 as a table sorted by opportunity
> (volume × low difficulty × #competitors ranking) with an "Action" column:
> *optimize existing post* | *new solution page* | *new blog post*.

### 8. Content gap  *(SEMrush/Ahrefs — log in first)*
> Read `seo/CONTEXT.md`. Content Gap: our domain vs competitor bucket. Find
> question/topic keywords where competitors have content and we don't (we already
> have 25 pillars — only surface true gaps). Group into problem-aware /
> solution-comparison / ready-to-act. For the top 15, give title, slug, and a
> 150-word brief (target + secondary keywords, questions to answer, internal
> links, CTA). Flag any that should be a *solution page* instead of a post.

### 9. Search-intent funnel map  *(#16)*
> Read `seo/CONTEXT.md`. Map our existing 25 posts + 3 solution pages to funnel
> stages: Unaware / Problem-aware / Solution-aware / Ready-to-act. Table per
> stage: page · stage · primary keyword · does it link down-funnel to a money
> page? Identify which ready-to-act intents have **no** dedicated page (these
> become solution pages, prompt #5) and which top-funnel posts fail to route to a
> tool.

### 10. Search Console money-page audit  *(GSC — log in first; #10/#12)*
> Read `seo/CONTEXT.md`. In Search Console via `/browse`, pull last 3 months.
> Find queries at position 5–20 with ≥50 impressions ("page-2 goldmine"). For
> each, name the ranking URL and whether the query is in title/H1/first-100-words,
> and word count. Build a 30-day sprint: week 1 title/H1 rewrites (give exact new
> copy), week 2 thin-content additions, week 3 internal links (exact source→target),
> week 4 meta-description rewrites for high-impression/low-CTR pages.

### 11. Voice-of-customer / SERP language  *(replaces "review sentiment", #13)*
> Read `seo/CONTEXT.md`. We have no reviews yet, so mine the market instead. Via
> `/browse`, read: r/selfpublishing & r/KDP threads, Amazon reviews of competing
> "how to self-publish" books, and G2/Capterra reviews of the tool competitors.
> Extract the top 20 emotional words, top 10 desired outcomes, top 5 fears
> (e.g. "banned", "didn't sell", "looked AI-generated"), and the exact phrases
> buyers use. Then rewrite our homepage hero, the SoftwareApplication
> descriptions and 3 social-proof lines in that language.

---

## PART C — Authority & entity (prompts 14, 15, 18)

### 12. Backlink gap  *(Ahrefs — log in first; #14)*
> Read `seo/CONTEXT.md`. In Ahrefs via `/browse`, pull dofollow backlinks
> (DR ≥20) for each competitor bucket. Find domains linking to ≥2 competitors but
> not us. Table: domain · DR · type (directory/news/blog/tool-list) · how the link
> was earned · our realistic chance · exact outreach angle. Then a 90-day plan:
> month 1 easy (SaaS/AI-tool directories), month 2 medium (guest posts, podcasts,
> "best AI book tools" listicles — get DraftToDone added), month 3 authority.

### 13. Directory & listing presence  *(replaces "local citations", #15)*
> Read `seo/CONTEXT.md`. Via `/browse`, check whether DraftToDone is listed (with
> consistent name, URL, one-liner, logo) on: Product Hunt, G2, Capterra,
> AlternativeTo, SaaSHub, Futurepedia / There's An AI For That / other AI-tool
> directories, and "best AI book writing tools" listicles. Table: platform ·
> listed? · NAP-equivalent consistent? · review count. Priority fix list +
> high-value directories we're missing.

### 14. Entity / knowledge-graph optimization  *(#18)*
> Read `seo/CONTEXT.md`. Audit our `Organization`/`WebSite`/`SoftwareApplication`
> JSON-LD. Build the entity plan: complete `Organization` markup (logo, `sameAs`
> to X/LinkedIn/Crunchbase/Product Hunt/GitHub), a consistent brand description to
> reuse everywhere, founder entity (`founder`/`Person`), and the `sameAs` profiles
> to create. Goal: a recognized entity → better AI-answer citation + a future
> knowledge panel.

---

## PART D — Tracking (prompt 20)

### 15. Monthly SEO report  *(#20)*
> Read `seo/CONTEXT.md`. Via `/browse`, pull last 30 days vs prior 30 from Search
> Console (clicks, impressions, CTR, avg position, top/rising/falling queries &
> pages) and GA4 if connected (organic sessions, waitlist conversion rate, top
> landing pages). One-page report: 3 wins, 3 problems, the single most important
> action next month, and **waitlist signups from organic** (the only number that
> matters pre-revenue). See the template in [`AUDIT.md`](./AUDIT.md#monthly-report-template).

---

## Suggested cadence

| Week | Run |
|------|-----|
| 1 | Load context · #1 titles · #2 schema · #3 OG cards |
| 2 | #4 internal links · #9 intent map |
| 3 | #5 new solution pages · #7 keyword gap |
| 4 | #8 content gap · #10 GSC sprint |
| 5–6 | #11 voice-of-customer · #14 entity |
| 7–8 | #12 backlinks · #13 directories |
| Monthly | #15 report |
