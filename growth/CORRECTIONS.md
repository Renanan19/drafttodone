# Corrections — what the full corpus overturned

The first plan was written from 16 episodes. All 49 are now read. Six things I told you were
wrong or too confident. **This file supersedes the others where they disagree.**

Detail and sourcing live in `_agent-findings-A/B/C/D.md`.

---

## 1. The video-to-text ratio was inverted

**What I wrote:** [`CADENCE.md`](./CADENCE.md) runs 7 text posts to 1 video per week.

**What four independent guests found:**

- One attributed **90% of a $20K launch to YouTube and 10% to X — measured by coupon codes**,
  with the YouTube video at ~1K views against the X post at 50K. Fifty times the impressions,
  a ninth of the revenue.
- A founder with a 7-figure X account and 100K followers: X is better for hiring than for leads.
- Another: several hundred X posts produced ~50 followers; one video did 1M views.
- The corpus's two highest-converting channels overall (Marcus, Elston) are both video.

**The correction:** **one video is worth more than a week of posts.** Flip the week — video is
the anchor, text is the offcut. Cheap video only: unedited screen recording, no studio. The
corpus is unanimous that production value is nearly irrelevant and the idea is everything.

---

## 2. The explicit CTA is not obviously right

**What I wrote:** lead-magnet posts ("comment CHECKLIST") as the highest-converting format.

**Three independent counter-examples:**

- A $60 template pitched as an explicit in-video segment sold ~5. A video where the same
  template was merely **visible on screen** while the creator worked sold **20×** that, plus
  inbound DMs asking what it was.
- 700–800 emails collected with **no call to action at all** — described as the highest-intent
  people on the list.
- A 40K-subscriber newsletter grown from a bio link with one stated promise. No lead magnet.

**The correction:** keep the lead-magnet format for LinkedIn and X, where it demonstrably works.
But **run the passive version as the A/B**: use the product on screen, mention nothing, let
people ask. Do not treat the explicit CTA as settled.

---

## 3. Build-in-public is now a red ocean — three sources say so

**What I wrote:** build-in-public posts, citing two founders who grew that way.

**What three others said independently:** it is currently a **net negative** for most new
creators, because POV / day-in-the-life packaging makes everyone indistinguishable. One states
plainly that it does not convert in the early days of a consumer or prosumer product.

The filter one of them offers: *do I have enough separation — in aesthetic, in product, in
quality?*

**The correction:** post the **numbers and the lessons**, not the lifestyle. Your separation is
not that you are building in public — thousands are. It is that **you ran a real KDP catalog and
lost it**. Lead with that, always.

---

## 4. "Niche down hard" needs one exception

**What I wrote:** niche down until the sentence is uncomfortably specific (Sleek's lesson).

**The counter:** a founder at $300K MRR says his single biggest growth lever was targeting the
**adjacent AI niche** rather than his core one — content framed as *"how AI improves X"* rather
than *"X"* — for roughly 10× the distribution. He is open about the cost: higher churn, more
individuals than teams.

**The reconciliation, and I think this one is right:**

> **Broad AI-framed content. Narrow KDP product.**

The content reaches "people curious about what AI can do for publishing." The product page and
the onboarding stay ruthlessly about the KDP catalog operator. Sleek's lesson was about the
*product*, not the *content*, and I conflated them.

---

## 5. The Max MRR formula — the one number that gates everything

The most decisive thing in the corpus, and it is arithmetic:

```
Max MRR = new monthly revenue ÷ churn rate
```

His worked example: 15 signups/day × 30% conversion ÷ 30% monthly churn = a **hard ceiling
around $17.5K**, no matter how much marketing you do. Same signups at 5% churn = **$105K**.

**Why this matters more to you than to almost anyone in the corpus:** you bill **weekly**. You
chose that deliberately and I am not reopening it — but this formula is how you *check* it.
Weekly billing gives you a churn reading in six weeks instead of six months, which is the
genuine advantage you named. So use it:

**Before spending an hour or a euro on acquisition, compute your ceiling.** If churn puts the
ceiling below your target, acquisition cannot fix it and retention is the only lever. This is
the discipline that stops a 90-day marketing sprint from pouring customers into a bucket with a
hole in it.

Related and blunt: one founder puts **60–70% of churn down to product quality alone**, and calls
cancellation-flow optimisation noise by comparison.

---

## 6. The best product idea in the corpus — invert who does the work

Not a marketing tactic, but it is the highest-leverage thing here and it directly attacks churn.

A founder describes the change that transformed his tool: it went from *"log in and generate a
blog post"* to *"it generates and publishes daily whether you show up or not — reviewing is
optional."* Churn dropped sharply.

**Applied to DraftToDone:** today a subscriber must remember to log in and spend a credit.
Weekly billing charges them whether they do or not — which is precisely the shape that produces
resentment and cancellation.

**Instead: ship the next book package on a schedule.** The user sets a niche and a cadence; the
worker produces and emails the package; opening the app becomes optional. You already have the
durable queue, the checkpointing, the reaper and the email layer to do this — it is scheduling
on top of a pipeline that already exists.

This turns "did I get value this week?" from a question the customer has to answer into one
answered for them, every week, automatically.

---

## Two things worth adding, both cheap

**The influencer contract with a guaranteed-views floor.** A real term sheet from the corpus:
a fixed monthly fee for 4 videos, **20% upfront**, with a contractual **minimum cumulative view
count**. If the floor is not met a week after the last video, the creator keeps posting until it
is. This de-risks the first paid creator deal completely, and it upgrades the creator ladder in
[`CREATOR-PARTNERSHIPS.md`](./CREATOR-PARTNERSHIPS.md). Also: **select on average views per
video, not follower count.**

**Micro-equity instead of cash.** 15 influencers offered ~0.1% of profits plus 0.1% of any exit,
with **zero obligation to post**, reportedly hit ~80% acceptance — at only $30K MRR. Cheaper
than the creator-co-founder play and far less fragile than depending on one person.

---

## And the asymmetry you have already paid for

Postiz — the scheduler you are about to install — grew by being **the paid dependency inside
someone else's free artifact**, three separate times: workflow templates, an MCP server given
its own dedicated launch, and a free agent skill where they were the only paid dependency
(~1,600 installs, from an author who had never contacted them).

Plus one long-form article on X, written by a **200-follower account**, that mentioned them
repeatedly and took trials from ~100/month to ~700 in a week. X distributes articles by topic
interest rather than follower graph, so small accounts over-perform — which makes this play
nearly free.

**You already have the MCP server, the CLI, the agent API and `/llms.txt` built.** What is
missing is only the listing and the being-written-about. That is the cheapest unexploited
opening in this entire document.

---

## What NOT to do — reinforced by the full corpus

| Don't | Why |
|---|---|
| **Build agent infrastructure** | The host who evangelised a 13-agent setup abandoned it six weeks later; costs went $200 → ~$2,000/month and he judged plain tooling equivalent. A promoter of the same setup reports business output of **"zero"** — unanswered customers, a mortgage paid late, missed appointments. |
| **Buy Reddit upvotes** | Half of one guest's Reddit playbook is vote manipulation. With a permanent KDP ban already in your history, do not put a second platform relationship on that footing. Another founder killed Reddit at $250K MRR partly for the brand hostility the aggressive version created. |
| **Pay for directories** | Traffic, zero conversions, per direct experience. |
| **Sell API access as a revenue line** | It buys a support burden, not revenue. The agent surface is a **channel**, not a product. |
| **Fire the launch sequence while churn is unknown** | Do not spend viral attention on a leaky bucket. Measure retention first. |
| **Chase Product Hunt for revenue** | Two independent negatives. |

---

## Sustainability — this one is not a platitude

One guest's stop signal was **every tendon in both arms inflamed to the point of not being able
to use his hands** — the exact structures a 90-day daily record-edit-type cadence loads.

His structural warning is the sharper one: a personal-brand cadence **cannot be delegated or
sold**. If you stop wanting it, you have to kill it. The **email list he built from week one
survived him abandoning his entire public identity.**

Guardrails, concretely:

- Daily for the first ~50 days, then switch to quality-weighted rather than daily.
- Never let the format colonise your days off. One guest deliberately vlogs one day a week.
- **The list is the asset that outlives the cadence.** Prioritise it over follower count on
  every platform, every week.
