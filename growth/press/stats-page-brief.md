# Brief: the sourced statistics page

**Status: brief only. The page is not built, and should not be built yet.**

Eighty-two of the site's 175 URLs recorded zero impressions in the three months
to 16 August 2026. The standing rule is no new content pages until that changes.
This brief exists so the page can be built quickly *if* the Qwoted flow shows
journalists asking for these numbers — and not before.

## What it is for

The `qwoted-seo-backlinks-skill` is already installed and its flow works. It
turns on a single asset: a page a journalist can cite in one click, with a
number, a date and a primary source per line. Journalists link to the page that
saved them a lookup; they do not link to a product page.

## The trigger to build it

Build it when **either**:

- three or more Qwoted queries in a month ask for a KDP or self-publishing
  figure this page would answer, **or**
- a pitch from `README.md` lands and the editor asks for a source for a number.

Until one of those happens, this is a brief.

## What goes on it

Two clusters only. Both are areas where the numbers are public, stable enough to
maintain, and currently scattered across a dozen help pages.

### 1. KDP royalty and cost maths

Every figure here comes from Amazon's own help pages and is already implemented
in `app/kdp-royalty-calculator.tsx` and `app/kdp-formatter/engine/kdp-rules.ts`,
so the page and the tools cannot drift.

- The 35% and 70% ebook royalty bands, and the price range each applies in, per
  marketplace.
- Delivery cost and how it is subtracted at 70% but not at 35%.
- Print cost structure: fixed cost plus per-page, by marketplace, and the page
  count at which the fixed rate changes.
- The 60% versus 50% print royalty threshold.
- Expanded Distribution at 40%.
- Minimum list price as a function of print cost.
- Gutter minimums by page count, and spine width per page for white and cream
  paper — the numbers in `kdp-rules.ts`.

### 2. The AI-disclosure policy timeline

This is the cluster with genuine journalist demand, and the site's Italian and
German pages on it are already its best-performing non-brand pages.

- Each dated change to Amazon's AI-generated content policy, with the help-page
  URL as it read on that date.
- What must be disclosed versus what must not.
- The daily upload limit and when it was introduced.
- What is public about enforcement, clearly separated from what is not.

## Rules the page must follow

- **One primary source link per number.** Amazon help pages, official
  announcements, or a named public dataset. No aggregator, no blog, no
  "industry estimates".
- **A visible "checked on" date per cluster**, and a real review cadence. A
  stats page nobody re-checks becomes wrong and then becomes a liability.
- **No number the site cannot source.** If a figure is widely repeated but
  untraceable, it is left out and the page says the figure is not publicly
  documented. That sentence is itself citable and is why journalists come back.
- **No ratings, review counts or user counts** — the editorial-standards page
  commits publicly, in four languages, to not publishing them.
- **No income claims.** Royalty maths describes a formula, never an outcome.

## Where it would live

As a solution page with `kind: "editorial"`, following the pattern in
`app/seo-pages.ts`, so it stays out of the commercial tool grids and the
buyer-intent map. Adding a solution key touches five files — see the plan for
the list.

Slugs, if built: `/en/kdp-statistics`, `/fr/statistiques-kdp`,
`/it/statistiche-kdp`, `/de/kdp-statistiken`.
