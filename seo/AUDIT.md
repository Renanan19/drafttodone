# DraftToDone.io — SEO Audit & Execution Plan

_Audit date: 2026-06-19. Applies the 20-part local-SEO playbook to a Next.js
static-export SaaS. See [`CONTEXT.md`](./CONTEXT.md) and
[`PROMPT-LIBRARY.md`](./PROMPT-LIBRARY.md)._

## TL;DR

The site was already in the **top few percent** of SaaS landing sites for
technical SEO: full 4-language i18n with hreflang, rich JSON-LD on every page
type, auto-generated sitemap/robots/feed/manifest, and answer-engine surfaces
(`llms.txt`, `llms-full.txt`, `ai.txt`, `content-index.json`, `answer-engine.json`).
The content moat is real — **25
pillar guides x 4 locales = 100 article pages**.

The gaps were **not** informational content. They were: (1) **zero social share
images**, (2) the homepage linked to **no money pages**, and (3) too few
**transactional "tool" landing pages**. This pass fixed 1 and 2 and started 3.

## Playbook -> SaaS translation table

| # | Local playbook prompt | SaaS reality | Verdict |
|---|----------------------|--------------|---------|
| 1 | Load business context | `seo/CONTEXT.md` | done |
| 2 | GBP category audit | Title/meta audit | plan (prompt #1) |
| 3 | GBP attributes | Schema/structured data | already strong |
| 4 | Competitor review teardown | Voice-of-customer (Reddit/G2/Amazon) | plan (#11) |
| 5 | Review response strategy | no reviews | **N/A** |
| 6 | GBP posts strategy | Blog publishing cadence | done (25 pillars) |
| 7 | Services section | Solution/feature pages | expanding |
| 8 | GBP description | Meta description / hero copy | good |
| 9 | **Photo audit (CTR)** | **OG / Twitter share images** | **shipped this pass** |
| 10 | Keyword gap (SEMrush) | Keyword gap | plan (#7) — tool login |
| 11 | Money-page audit (GSC) | GSC page-2 sprint | plan (#10) — tool login |
| 12 | Service + city pages | Programmatic solution pages | +1 shipped, more queued |
| 13 | GSC analysis | Same | plan (#10) |
| 14 | Review sentiment | Voice-of-customer | plan (#11) |
| 15 | Backlink audit (Ahrefs) | Backlink gap | plan (#12) — tool login |
| 16 | Local citations | SaaS/AI directories | plan (#13) |
| 17 | Search-intent mapping | Funnel map | plan (#9) |
| 18 | Content gap | Content gap | plan (#8) |
| 19 | Entity optimization | Entity / knowledge graph | good, extend (#14) |
| 20 | GBP posting patterns | no GBP | **N/A** |
| — | Monthly report | Monthly report | template below (#15) |

## Current-state scorecard

| Area | Before | Now | Notes |
|------|:------:|:---:|-------|
| i18n + hreflang | A | A | en/fr/it/de + x-default on posts/solutions/blog |
| Structured data | A | A | Org/WebSite/SoftwareApp + Article/FAQ/Breadcrumb/Collection; **+FAQPage on home** |
| Sitemap/robots/feed/manifest | A | A | auto-generated from data files |
| AI-crawler surfaces | A | A+ | llms.txt, llms-full.txt, ai.txt, content-index.json, answer-engine.json; AI bots allowed |
| **Social share images** | **F** | **A** | was none; now branded 1200x630 on every page |
| **Internal links to money pages** | **D** | **B+** | home + every blog/solution footer now link the tools |
| Transactional landing pages | C | A- | 2 -> 7 solution pages (x4 langs = 28); cross-linked |
| Localized landing page | C | A | home now `/`, `/fr`, `/it`, `/de` server-rendered + hreflang |
| Off-page / backlinks | ? | ? | needs Ahrefs login (#12) |

## What shipped this pass (changelog)

1. **OG / Twitter share images** (`app/og-card.tsx`, `app/opengraph-image.tsx`,
   `app/[locale]/blog/[slug]/opengraph-image.tsx`, `app/[locale]/[slug]/opengraph-image.tsx`).
   Branded 1200x630 PNGs generated at build with `next/og` (works under
   `output: export`). Root default + per-article and per-solution cards with the
   page title baked in. Venice palette; CSS-drawn check mark (no font fetch).
   -> **Impact: high.** Every link shared on X/LinkedIn/Slack/Discord/iMessage now
   renders a card instead of a blank rectangle. Visible immediately on next share.
2. **Homepage internal links to money pages** (`app/(root)/page.tsx`): new "Free tools &
   guides" section linking the KDP royalty calculator, AI book cover generator, AI
   publishing software and the blog (EN/FR). The highest-authority page previously
   linked **zero** money pages. -> **Impact: high, 2–8 weeks.**
3. **Homepage FAQ + FAQPage schema** (`app/(root)/page.tsx`): 5 Q&A (EN/FR) + JSON-LD.
   -> captures question queries / AI answers; **medium, 2–6 weeks.**
4. **Sitewide footer money-page links** (`app/blog-ui.tsx`): every blog post and
   solution page now links all solution pages. -> distributes authority; **medium.**
5. **Solution-page cross-links** (`app/[locale]/[slug]/page.tsx`): "More tools"
   strip linking sibling solution pages. -> **medium.**
6. **5 new transactional solution pages** (`app/seo-pages.ts`), each in 4
   languages with full schema + own OG image, auto-added to
   sitemap/llms/content-index and cross-linked via the "More tools" strip:
   `ai-book-cover-generator`, `book-description-generator`, `book-title-generator`,
   `ai-book-generator`, `kdp-keyword-tool`. Each is the transactional twin of an
   existing how-to guide (tool/product page vs article), differentiated to avoid
   cannibalization. Solution pages went 2 -> 7. -> **high, 4–12 weeks.**
   _Note: FR/IT/DE for four of these were drafted by parallel subagents, then
   rewritten with correct diacritics/apostrophes before integration (the agents
   had stripped them); EN kept as drafted._

All changes keep the Venice Inc. design system (reused tokens/components) and the
build stays green (`npm run build`, 0 errors).

## Follow-up shipped 2026-07-04

7. **Entity JSON-LD strengthened** (`app/layout.tsx`): added stable `@id`
   references for Organization, WebSite and SoftwareApplication; connected the
   site to the app URL, founder entity, confirmed GitHub repo `sameAs`, publisher
   / brand relationships, app feature list and offer URL. This closes the
   schema/entity quick win from prompt #14 without inventing unconfirmed social
   profiles. -> **Impact: medium, 2-8 weeks** for entity clarity and AI-answer
   citation consistency.
8. **Removed unconfirmed X placeholder links** (`app/blog-ui.tsx`,
   `app/blog-content.ts`, `app/home-content.ts`): the footer no longer links to
   `#`, and unused "follow X" copy was removed until a real social profile is
   confirmed. -> **Impact: low-medium, immediate** for trust, crawl hygiene and
   broken-link cleanup.
9. **Static localized document language** (`app/site-layout.tsx`,
   `app/(root)/layout.tsx`, `app/[locale]/layout.tsx`): replaced the single
   global `html lang="en"` layout with route-group root layouts so `/fr`, `/it`
   and `/de` export the correct `<html lang>` before JavaScript runs. -> **Impact:
   medium, immediate** for accessibility and international SEO consistency.
10. **Social metadata made explicit after the layout split** (`app/(root)/page.tsx`,
   `app/[locale]/page.tsx`, blog and solution page metadata): each representative
   page type now declares `metadataBase`, `og:image` and `twitter:image` directly;
   the exported `404.html` no longer leaks a localhost OG image. Local validation:
   `npm run build`, full `out/` scan for `http://localhost:3000`, and JSON-LD
   parsing on home, localized home, blog index, solution page and article. ->
   **Impact: medium, immediate** for share-card reliability.
11. **External-validation runbook tightened** (`seo/AUDIT.md`): split no-login
    checks from paid/logged-in checks so the next SEO sprint can move without
    guessing unavailable metrics. Public checks are: GitHub Pages deploy status,
    live HTML smoke tests, localhost leak scan, JSON-LD parse and Google's Rich
    Results test on one page per type. Logged-in checks are: GSC page-2 sprint,
    Ahrefs/SEMrush keyword gaps and backlink gaps. -> **Impact: low, immediate**
    for execution clarity.
12. **IndexNow post-deploy notification** (`ops/submit-indexnow.mjs`,
    `.github/workflows/deploy.yml`): every successful GitHub Pages deploy now
    submits the live sitemap URLs to Bing/IndexNow after publication. The key is
    hosted at the site root and the workflow is non-blocking if the endpoint is
    temporarily unavailable. -> **Impact: medium, immediate** for faster discovery
    by IndexNow search partners.
13. **Buyer-intent pages expanded** (`app/seo-pages.ts`,
    `app/answer-engine-content.ts`): added localized pages for `best AI book
    generator` and `KDP book generator`, plus answer-engine intent routing. This
    targets commercial-investigation and exact KDP generator queries without
    inventing competitor facts or ranking guarantees. -> **Impact: high, 4-12
    weeks** for qualified organic demand.
14. **Entity graph deepened without fake ratings** (`app/site-layout.tsx`,
    `app/[locale]/[slug]/page.tsx`): added audience, available languages,
    commercial page `hasPart` links, app/site relationships, stable page-level
    software IDs and detailed subscription offers. `aggregateRating` remains
    intentionally absent until real public reviews exist. -> **Impact: medium,
    2-8 weeks** for entity clarity and rich-result quality.
15. **Legal domination runbook added** (`seo/DOMINATION-PLAN.md`): defines the
    weekly GSC/Bing loop, legal link-earning targets, proof assets, content
    expansion and monthly scorecard. -> **Impact: high, compounding** because
    authority and proof are now the limiting factors, not technical SEO.

## Prioritized backlog

### Quick wins (high impact, low effort)
| Action | Impact | Effort | How |
|--------|:------:|:------:|-----|
| Create or confirm the real **X / social handle** and add it to `Organization.sameAs` | Med | XS | add only after the profile exists |
| Run **title/meta audit** + rewrite outliers | High | S | prompt #1 |
| Run **Rich Results** validation on 1 page per type | Med | XS | prompt #2 |
| ~~Add `Organization.sameAs` + `founder` to layout JSON-LD~~ DONE 2026-07-04 | Med | S | prompt #14 |

### External validation gates
| Check | Access | Status |
|-------|--------|--------|
| `npm run build` static export | none | passing locally and in GitHub Actions |
| Export scan for `http://localhost:3000` | none | clean locally after the 2026-07-04 layout split |
| JSON-LD parse on representative page types | none | passing locally |
| Live custom-domain smoke test after deploy | none | run after GitHub Pages reports success |
| Google Rich Results test on one page per type | public tool | run against live URLs after deploy |
| GSC money-page / page-2 sprint | Search Console login | blocked until property access |
| Ahrefs/SEMrush keyword and backlink gaps | paid tool login | blocked until account access |

### Medium (high impact, medium effort)
| Action | Impact | Effort | How |
|--------|:------:|:------:|-----|
| ~~Ship book description / title / AI book generator / KDP keyword tool pages~~ DONE this pass | — | — | shipped |
| ~~Ship `best AI book generator` + `KDP book generator` buyer-intent pages~~ DONE 2026-07-04 | — | — | shipped |
| **More competitor comparison pages** ("[competitor] alternative") — needs verified competitor facts first | High | M | prompt #7/#12 then #5 |
| **GSC page-2 sprint** once data exists | High | M | prompt #10 |
| **Keyword + content gap** vs competitor buckets | High | M | prompts #7, #8 |

### Long (compounding)
| Action | Impact | Effort | How |
|--------|:------:|:------:|-----|
| **Opportunity #1** below — localized landing routes | High | L | refactor |
| Backlink + directory campaign | High | L | prompts #12, #13 |
| Voice-of-customer rewrite of hero/descriptions | Med | M | prompt #11 |

## Opportunity #1 — localize the landing page — DONE (2026-06-19)

Previously the home page was a **client component with an EN/FR toggle**, so only
an English `/` was server-rendered and indexable; IT/DE visitors got no localized
landing and FR had no distinct indexable URL.

**Shipped:** the landing UI was extracted into a locale-driven client component
(`app/home-view.tsx`), copy moved to `app/home-content.ts` (now full en/fr/it/de,
including new IT and DE), and the routes split:
- `/` — English, server component (`app/(root)/page.tsx`), canonical `/` + hreflang.
- `/fr`, `/it`, `/de` — server-rendered localized landings (`app/[locale]/page.tsx`),
  each with its own metadata, canonical and hreflang cluster.
- All four added to `sitemap.xml` with hreflang alternates.

The Venice design is preserved (verified by screenshot of
`/fr`). 2026-07-04 update: the route-group layout split now emits static
per-locale `<html lang>` values before JavaScript runs.

## Notes / smaller items
- **Homepage canonical**: emitted from the root server route after Opportunity #1
  and the 2026-07-04 route-group layout split.
- The `ai-book-cover-generator` solution page and the `ai-book-cover-design...`
  blog post target **different intents** (tool vs how-to) and cross-link — no
  cannibalization, but keep titles distinct as both mature.

## Monthly report template
_(fill via prompt #15)_

```
DraftToDone SEO — <month>
Organic clicks:        ____ ( +/-__% MoM )
Impressions:           ____ ( +/-__% )
Avg position:          ____ ( +/-__ )
Clicks to the app (organic): ____   <- the number that matters
Top rising queries:    1.____ 2.____ 3.____
Top falling queries:   1.____ 2.____ 3.____
3 wins:                1.____ 2.____ 3.____
3 problems:            1.____ 2.____ 3.____
#1 action next month:  ____
```
