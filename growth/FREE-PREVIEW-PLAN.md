# Free preview before the first credit — plan (no code yet)

Written 2026-10-09 from the getebook.ai teardown. **Decision needed from Antoine before any code.**
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
