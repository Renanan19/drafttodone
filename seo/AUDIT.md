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
2. **Homepage internal links to money pages** (`app/page.tsx`): new "Free tools &
   guides" section linking the KDP royalty calculator, AI book cover generator, AI
   publishing software and the blog (EN/FR). The highest-authority page previously
   linked **zero** money pages. -> **Impact: high, 2–8 weeks.**
3. **Homepage FAQ + FAQPage schema** (`app/page.tsx`): 5 Q&A (EN/FR) + JSON-LD.
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

## Prioritized backlog

### Quick wins (high impact, low effort)
| Action | Impact | Effort | How |
|--------|:------:|:------:|-----|
| Set the real **X / social handle** (currently `href="#"` in headers/footers) and add to `Organization.sameAs` | Med | XS | edit `page.tsx`, `blog-ui.tsx`, layout JSON-LD |
| Run **title/meta audit** + rewrite outliers | High | S | prompt #1 |
| Run **Rich Results** validation on 1 page per type | Med | XS | prompt #2 |
| Add `Organization.sameAs` + `founder` to layout JSON-LD | Med | S | prompt #14 |

### Medium (high impact, medium effort)
| Action | Impact | Effort | How |
|--------|:------:|:------:|-----|
| ~~Ship book description / title / AI book generator / KDP keyword tool pages~~ DONE this pass | — | — | shipped |
| **Comparison pages** ("[competitor] alternative", "best AI book generator") — needs verified competitor facts first | High | M | prompt #7/#12 then #5 |
| **GSC page-2 sprint** once data exists | High | M | prompt #10 |
| **Keyword + content gap** vs competitor buckets | High | M | prompts #7, #8 |
| **Comparison pages** ("[competitor] alternative", "best AI book generator") | High | M | prompt #5/#8 |

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
- `/` — English, server component (`app/page.tsx`), canonical `/` + hreflang.
- `/fr`, `/it`, `/de` — server-rendered localized landings (`app/[locale]/page.tsx`),
  each with its own metadata, canonical and hreflang cluster.
- All four added to `sitemap.xml` with hreflang alternates.

The Venice design is preserved (verified by screenshot of
`/fr`). Known minor: the shared root layout emits `<html lang="en">` statically and
the client effect updates it per route; content uses `<div lang={locale}>` +
hreflang, matching the existing blog/solution pattern. A per-locale `<html lang>`
would need a `[locale]` layout (future).

## Notes / smaller items
- **Homepage canonical**: not emitted. Can't be set in the shared `layout.tsx`
  without mis-canonicalizing `/site-map`, and the client home page can't export
  `metadata`. Resolve as part of Opportunity #1 (server home route can set its own).
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
