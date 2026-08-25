# DraftToDone — 90-day plan from €0 to first real MRR

Derived from [`PLAYBOOK-NOTES.md`](./PLAYBOOK-NOTES.md) (49 *Profitable Founders* episodes),
applied to the actual state of DraftToDone on 2026-07-26.

**Starting position:** €0 MRR · 2 lifetime customers · app live · ~2,400 SEO pages shipped ·
no email list · no launch mechanic · no social proof · no affiliate program.

---

## 1. The diagnosis (using the corpus's own frameworks)

### The work was done in the wrong order

Florian's rule is explicit: *"If you have a project with zero customers, zero MRR, don't even
think about boring marketing, because you will compound on something you don't even know will
get one sale."*

DraftToDone did the exact opposite. It shipped an enormous **boring-marketing** base — 25+
guides, tool pages, comparison pages, 4 locales, `llms.txt`, `answer-engine.json`,
`content-index.json`, an MCP server, a CLI, an agent API — before proving that anyone will pay.
That base is genuinely good and will compound. It is also **finished**. More SEO pages are now
the lowest-ROI hour available.

**Consequence: from today, effectively all new effort goes to viral marketing and direct
response.** The SEO asset keeps compounding on its own.

### The one gap that blocks everything else

Rob Hoffman's entire $60K-in-53-days playbook — waitlist → capped cohort → early-bird →
webinar → repeat — runs on **an email list**. DraftToDone deliberately removed its waitlist
form (`b8d4e5a feat(launch): drop waitlist form, point all CTAs to the live app`).

Right now every visitor is asked to do the single hardest thing (subscribe) or nothing. There
is no middle step, so 100% of non-buyers leave no trace. With ~0 conversions, that means the
traffic that already exists is being thrown away.

**This is fix #1 and everything else depends on it.**

### The ICP was two people

The site said *"indie authors and KDP catalog operators."* Sleek's founders lost a year to
exactly this: *"the product was cool but it wasn't made for anyone specifically, so nobody
loved it."*

An indie author writing one passion project and an operator building a catalog want opposite
things. The whole product is built for the operator: €10 per book, or €14.99/week for 2 book credits, a founder
story about a €400/month catalog, a durable job queue, an MCP server, a CLI.

**Locked: the ICP is the KDP catalog operator.** Every landing page, every post, every outreach
message speaks to that one person from now on.

### A real risk worth naming

The current headline promise — *"104 books a year"* — is, read plainly, the exact behaviour
Amazon KDP is actively suppressing (3 titles/day cap, mandatory AI disclosure, quality reviews).
The founder's own origin story is *getting banned*. Selling volume attracts buyers who get
banned, churn immediately, and leave bad reviews.

This does not mean changing the product. It means **the volume is the mechanism, not the
promise**. The promise is: *books that survive KDP review and actually sell.* Volume is how you
get there. That reframing costs nothing, is more honest, is more defensible, and — per Tanya —
is exactly the kind of "helpful, trustworthy" positioning that answer engines reward.

---

## 2. The sequence

### Phase 0 — Unblock (this week)

Nothing here needs traffic. It removes the reasons traffic currently converts to nothing.

| # | Action | Source |
|---|--------|--------|
| 0.1 | **Email capture live** — a real lead magnet, gated, on every page | Cody, Rob |
| 0.2 | **Founding-operator offer** — capped seats, deepest discount, countdown | Rob, step 4 |
| 0.3 | **Affiliate program page** — 40% recurring + a promo kit | Roman |
| 0.4 | **Honest social proof** — interview the 2 existing customers, publish it | Rob, step 6 |
| 0.5 | **ICP lock** across the landing copy | Sleek |

The lead magnet is **the blueprint**, in Roman's sense: a 10-page document so useful that
saying yes to it is easy, with the product placed inside the method rather than pitched.
For this ICP it writes itself:

> **The KDP Catalog Operator's Playbook — how to publish books that survive review and sell**
> — niche selection with real demand signals, the metadata that decides your ranking, the
> compliance checklist that keeps the account alive, and the production loop.

DraftToDone appears as the tool used at one step. That is the "edgy selling" format.

### Phase 1 — Direct response (weeks 1–4). Goal: the first 10 paying operators.

Roman: *"Outreach is number one, because you know right away if it works. Send 5,000 emails and
get no answers — your offer is wrong."* Nothing else gives a signal that fast.

**Where this ICP actually is:**

- `r/selfpublish`, `r/KDP`, `r/Kindle`, `r/publishing`, `r/passive_income`
- KDP Facebook groups (large, active, and full of operators comparing tools)
- Comment sections of KDP YouTube channels
- Publisher Rocket / Book Bolt / Helium-style tool audiences
- Anyone reviewing "AI book generator" tools on YouTube or a blog

**Three concrete plays, in priority order:**

1. **The free-generation offer** (Sleek's #1 template, adapted).
   *"Comment your niche and I'll generate the complete book package — manuscript, wrap cover,
   metadata — and send it to you free."* Run it manually. It removes 100% of the friction,
   produces proof assets, gives you the customer conversations Rob demands, and every reply is
   a warm lead. This is the single highest-leverage post available and costs only credits.

2. **Reddit story posts** — 2–3/week, story + proof + link. Real material available today:
   the ban and what triggered it; the exact metadata that moved a book's ranking; a teardown of
   what an AI-generated book gets wrong before a human fixes it; the full economics of a
   catalog with real numbers.
   *(Not doing: the upvote-group tactic from the corpus — it's vote manipulation and gets
   accounts banned.)*

3. **Cold outreach with the blueprint.** Not "want a demo" — *"want the playbook?"* Targets:
   operators visible in the places above. Volume matters more than cleverness, and once a
   message converts, stop editing it and only add leads.

### Phase 2 — The launch (weeks 4–8). Goal: 1,000 on the list → a cohort.

Rob's math: 1,000 signups × 10% = 100 customers. At €65/month that is €6.5K MRR — from
one launch.

- **Timebox: 30–60 days.** If the list is at ~100 after two months, that is data, not a reason
  to push harder. *"Ship fast but also quit fast."*
- **Founding Operator cohort — 50 seats, 50% off for life.** Constrain supply against demand.
  Countdown emails: *"31 seats left."*
- **A launch-day live build.** The webinar format, minus the webinar theatre: generate a
  complete book live, from a niche a viewer picks in the chat. This product is inherently
  demo-able — that is a real advantage most SaaS doesn't have. Cap an attendee-only bonus, call
  out each purchase live, and bring a real customer on to talk.
- **Then talk to 50 customers.** Record everything, feed the transcripts to an LLM, and let
  their words rewrite the landing page and the roadmap.

### Phase 3 — Compounding (weeks 8–12)

- **YouTube, problem-aware.** Marcus's format, which is the highest-converting channel in the
  entire corpus. Not *"how to use DraftToDone"* (solution-aware — reaches only people who
  already know you exist). Instead: *"Your KDP books aren't selling. It isn't the algorithm."*
  → perspective shift → 4-step method → the tool sits inside step 3. Also: Tanya's finding that
  a keyword-in-thumbnail YouTube video is currently one of the fastest AI-visibility wins there is.
- **Affiliates at 40% recurring.** This niche is unusually well suited: KDP YouTubers and
  bloggers already monetise via affiliate links, already rank for the exact BOFU queries, and
  already have the audience. Ship them a kit — Roman's point is that affiliates fail because
  nobody tells them how to promote.
- **GEO placement.** The site already ranks. The missing half is *off-site*: Medium and
  LinkedIn **articles** (not posts), plus G2/Capterra listings, plus the backlink-exchange
  email to every listicle ChatGPT already cites for "best AI book generator."

---

## 3. What is deliberately not being done

| Not doing | Why |
|-----------|-----|
| More SEO pages | The base is built and over-built. It compounds without more input. |
| Paid ads | Florian: never without ads skill and cash flow. Zero of both today. |
| Reddit upvote rings | Vote manipulation. Gets the account and the domain burned. |
| Fabricated reviews or logos | Two real customers is a small number; inventing more is a lie that answer engines and buyers both eventually price in. |
| A "reviews.com" doorway domain | Tanya's own verdict: works for ~3 months, then Google bans it. |
| Chasing broad virality | Sleek got ~2M impressions from an Elon Musk reply chain and called it *"the thing that converted the worst ever."* |

---

## 4. The scoreboard

Weekly, in one place — vanity metrics excluded on purpose.

| Metric | Today | Day 30 | Day 90 |
|--------|-------|--------|--------|
| Paying customers | 2 | 10 | 60 |
| MRR | €0 | €400 | €3,000 |
| Email list | 0 | 300 | 1,000 |
| Customer conversations | 0 | 15 | 50 |
| Free generations delivered | 0 | 30 | — |
| Affiliates with ≥1 sale | 0 | 2 | 10 |

Cody's brand metric is the one to watch underneath all of it: **branded search for
"drafttodone" month over month.** It is the only number nobody can take from you.

---

*Implementation log lives in [`CHANGELOG-GROWTH.md`](./CHANGELOG-GROWTH.md).*
