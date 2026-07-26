# The operating cadence

The plan does not fail because it is wrong. It fails because week three arrives and nobody
knows what to do on Tuesday morning.

**This is the file you open every Monday.**

---

## Before week 1 — the setup, once

Two days of work. Nothing below runs until these are done.

- [ ] **Buy and warm a separate sending domain** (e.g. `drafttodone.email`). SPF, DKIM, DMARC.
      Warm it for 14 days before the first cold send. Never send cold mail from `drafttodone.io`.
- [ ] **Interview both existing customers.** Record it. Ask: what were you doing before? what
      nearly stopped you buying? what would you tell someone considering it? Two real quotes beat
      any amount of written copy.
- [ ] **Generate one showcase book end to end.** Manuscript, cover, metadata. This single asset
      appears in the partner kit, the launch emails, the Reddit posts and every video.
- [ ] **Record the 90-second demo** — clean screen capture, no voiceover, so creators can drop it
      into their own edit.
- [ ] **Set up the tracking sheet.** Six columns, nothing more:
      `paying customers · MRR · list size · conversations · free generations · replies per 100 sent`
- [ ] **Start the metadata experiment** (Reddit post 4). It needs 30 days, so it starts now or
      it never gets published.

---

## The weekly rhythm

Time-block it. Rob's team blocks whole days for content and lets nothing move them.

| Day | Block | Output |
|-----|-------|--------|
| **Mon** | Free generations from the weekend's comments · the customer question · update the sheet | 5–10 packages delivered, numbers logged |
| **Tue** | Reddit post 1 · outreach batch (add leads, answer replies) | 1 post, 30 emails |
| **Wed** | Record and ship one video | 1 video + 3 clips |
| **Thu** | Reddit post 2 · outreach batch | 1 post, 30 emails |
| **Fri** | Free generations · weekly email to the list · log the week | Packages, 1 email |
| **Sat** | Reddit post 3 · one off-site listicle or one backlink-exchange batch | 1 post, 1 placement |
| **Sun** | Off. Genuinely. | — |

**Daily, 20 minutes, non-negotiable:** one post on X and one on LinkedIn from
[`content/SOCIAL-POSTS.md`](./content/SOCIAL-POSTS.md), and answer every comment and reply.

Thomas (Uneed, €20K/month) spends **80% of his time on marketing** and calls it a muscle: at
first you don't know what to post, and it only comes from doing it.

---

## The 90 days

### Weeks 1–4 — direct response only

**Goal: 10 paying customers, 300 on the list.**

- Free generation offer live on X, LinkedIn and Reddit. Run every one manually, inside 24h.
- Ask every recipient the same question: **"What would have to be true for you to upload this?"**
- 3 Reddit posts a week from [`content/REDDIT-POSTS.md`](./content/REDDIT-POSTS.md).
- Cold outreach: 30/day, ramping. Sequence A.
- Videos 1, 2 and 3 from [`content/VIDEO-SCRIPTS.md`](./content/VIDEO-SCRIPTS.md).
- Creator outreach: start at the **bottom** of the ladder — sub-10K channels, pure commission
  or credits. Do not pay anyone upfront yet.

**Do not** start the founding cohort. The list is too small and the mechanic only fires once.

### Weeks 5–8 — the launch

**Goal: 1,000 on the list, then the cohort.**

- Publish the GEO listicle on Medium and LinkedIn. Then reverse-engineer the citations and email
  every source.
- Keep everything from weeks 1–4 running. Nothing gets dropped.
- **When the list clears 300:** run the founding sequence. 50 seats, five emails, live build.
- Update `FOUNDING_SEATS_CLAIMED` in `app/home-content.ts` as they fill.

### Weeks 9–12 — compound what worked

**Goal: 60 customers, €3,000 MRR.**

- **Talk to 50 customers.** Not 30, not 40. Record every call, feed the transcripts to an LLM,
  extract the most-requested features, the bugs and their exact language. Their words rewrite
  the landing page and the roadmap.
- Double down on the one channel that produced the most customers. **Close the others.** One
  channel does 80% of the volume — find it and stop splitting attention.
- Move creators up the ladder: cash upfront only for the ones already converting on commission.
- Start the faceless tutorial series. It takes months to rank, which is why it starts now.

---

## Monday review — 15 minutes

Six numbers in the sheet. Then three questions:

1. **What produced customers last week?** Not traffic. Customers.
2. **What am I doing out of habit that produced nothing?** Stop it this week, not next month.
3. **What is the one thing this week that, if it works, makes the rest easier?**

---

## The kill criteria

Set now, before the sunk cost accumulates. *"Ship fast, but quit fast."*

| Signal | Threshold | What it means |
|--------|-----------|---------------|
| **Outreach** | 500 sends, under 2% reply | The **offer** is wrong. Change the offer, not the volume. |
| **Free generations** | 30 delivered, nobody asks the price | The **output** isn't good enough yet. Stop selling, go fix it. |
| **The list** | 60 days, under 200 signups | The lead magnet isn't wanted. Rewrite once, then stop. |
| **A channel** | 10 attempts, nothing | Close it. Do not "give it more time" out of sentiment. |

Gene's line is the one that applies to the second row: *"If you think your problem is
distribution, rethink it. Maybe you need a better product."* Two customers is not enough data to
know yet. Thirty free generations is.

---

## What not to do, all quarter

- **No new SEO pages.** The base is built and over-built. It compounds without you.
- **No paid ads.** Not without ads skill and cash flow. You have neither yet.
- **No new features** unless a paying customer asked for it twice.
- **No fabricated proof.** The customer count is 2 until it isn't.
- **No new product.** Elston's warning: the multi-product habit feels productive and caps you at
  small numbers. One thing, compounded.

---

## The one metric underneath everything

**Branded search for "drafttodone", month over month.**

Cody: it is the only number nobody can take from you. Everything else — a channel, a ranking, an
affiliate — can be competed away. People typing your name cannot.

Check it in Google Search Console on the first Monday of each month. If it is growing, the
machine is working, whatever the weekly numbers say.
