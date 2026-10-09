# Free preview before the first credit

**Status 2026-10-09: approved by Antoine and built** (app + worker, migration 0015 applied). The section *As built* below supersedes the plan where they differ.

Written 2026-10-09 from the getebook.ai teardown. Original plan below, kept for the reasoning.
Touches the worker and the `books` / `credit_ledger` tables: message the worker session
(antoine-12) before starting, and push worker/ only when no book is queued or running.

## The idea, in one sentence

A new account gets its book's **title, chapter plan and front cover for free**; the credit is
spent only when they ask for the manuscript.

## Why

getebook.ai lets a visitor describe the book, watches it "plan", and only then asks for an
email ("You're seconds from your finished book"), and only takes money at download. The visitor
has already put something of their own into it when the ask comes. Their samples are
watermarked: the preview is real, but it can't be shipped as is.

DraftToDone today: `canCreate = credits >= 1`, so a new account sees a disabled form and a buy
button. The 2026-10-07 win-back emailed 30 never-paid signups, 4 of them people who left at
Stripe checkout: that is the leak this closes. The hero brief shipped on 2026-10-09
(`utm_campaign=hero_brief`) is step one; this is step two.

## What the preview contains

| Part | Already produced by | Cost per preview |
|---|---|---|
| Title + subtitle | `titles.py` / planning | one LLM call |
| Chapter plan (titles + one line each) | `original_pipeline/planning.py`; fiction `fiction_pipeline/planning.py` | one or two LLM calls |
| Front cover (flat, watermarked) | `cover_image.py` (`gemini-3.1-flash-image`) | one image generation |

Not in the preview: manuscript, interior PDF, KDP wrap, metadata. Those are where the book's
cost goes.

**Cost: to be measured, not assumed.** `usage_meter.py` already splits tokens per step; run
three previews on the QA account and read it. Working assumption until then: **≤ €0.15 per
preview** against roughly €1.50 for a full book (OpenRouter, 2026-10-07).

## The arithmetic that decides it

```
cost per paying customer from previews = preview cost ÷ preview→paid rate
€0.15 ÷ 5%  = €3.00   ← below the €10 first purchase: go
€0.15 ÷ 1%  = €15.00  ← above it: stop, or put the preview behind something
```

The kill line is the preview→paid rate at which this costs more than the first purchase it
earns: **1.5% at €0.15 a preview**. Measure it from the ledger, not from impressions.

## Build (when approved)

1. `books.params.preview = true` jobs: run planning + title + cover only, then stop at a new
   status `preview_ready`. A worker change: coordinate.
2. One free preview per account (`credit_ledger` reason `preview:free`, amount 0, so it is
   countable), plus the existing rate limit and Turnstile on signup. A second preview costs a
   credit like any book.
3. Dashboard: the preview card shows the cover and plan with one button, "Write this book:
   €10" (or 1 credit). Paying converts the same job, so the manuscript is planned from
   *that* plan and the reader gets the book they saw.
4. Watermark the preview cover ("DraftToDone preview"); the paid run renders it clean.
5. Hero microcopy then becomes "See your title, plan and cover free" — only once it is true.

## Measure

- `select count(*) from credit_ledger where reason = 'preview:free'`: previews made.
- Previews → first paid credit within 7 days: the number that decides it (kill line above).
- Abuse: previews per IP/email domain per day. If one source makes many, require email
  verification before the preview runs.

## What I am not doing

- No free full book. A full book costs real money per signup, and churn on a free full book is
  unmeasurable.
- No "credits" relabelling to make prices look smaller. getebook sells 300 credits for $29, where
  a how-to guide costs 35 credits, about $3.40. DraftToDone says €10 a book, and that is clearer.


---

## As built (2026-10-09)

**What the preview is:** the first step of each engine, run on its own, plus the cover step.
- Non-fiction: `generate_book_info` (title, subtitle, audience, objectives, invented pen name).
  The "promises" shown are the model's objectives, with the engine's generic padding lines
  ("Understand the foundations") filtered out.
- Fiction: `story_idea` + `coerce_idea` + `names.scrub` (title, genre, hook, synopsis); the pen
  name comes from the cover step, as in a paid run.
- No chapter plan: the non-fiction chapter plan is built deep inside the vendored engine, and
  showing one that the paid run then re-plans would be a promise broken. The preview shows
  only what the paid book is guaranteed to keep.

**Same book, nothing paid twice:** buying the preview creates a normal book job with
`params.preview_seed` (+ the cover refs and the pen name). The non-fiction runner replays the seed
(`seed_book_info`, no new title call; template + Perplexity avatar still computed). The fiction
runner takes `seed_idea` (commit 804f3bc). The cover step downloads the preview's clean cover
instead of drawing a new one.

**Measured cost (two real runs in the worker container, 2026-10-09):**

| Run | Time | Text | Image | Total |
|---|---|---|---|---|
| Non-fiction ("Stop the One-Star Slide") | 72 s | $0.0014 | $0.10 (1 draw) | **$0.10** |
| Fiction ("Hardcovers and High Tides") | 63 s | $0.0018 | $0.30 (3 draws: proofread rejected stray text) | **$0.30** |

The image is the cost. The proofread redraws are the same ones a paid book would make, and the
cover is reused on purchase, so the extra spend on a converted preview is zero; it is lost only on
previews that never convert. **Kill line, recomputed:** at ~$0.20 average a preview (≈ €0.18), it
stops paying when fewer than **1.8%** of previews lead to a €10 purchase.

**Abuse limits:** one preview per account (unique index; a *failed* preview can be retried), 3 per
IP per day (`PREVIEW_IP_RATE_LIMIT_PER_DAY`), 150 a day in total (`PREVIEW_DAILY_CAP`).
Worst case, about $45 a day; the daily cap bounds it.

**Measure:**
```sql
select status, count(*) from book_previews group by 1;
-- preview → paid book
select count(*) filter (where book_id is not null) * 1.0 / nullif(count(*) filter (where status in ('ready','converted')), 0)
  from book_previews;
select avg((usage->>'routed_cost_usd')::numeric) from book_previews where usage is not null;
```
