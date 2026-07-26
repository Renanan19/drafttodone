# growth/

Everything derived from the *Profitable Founders* podcast corpus (49 episodes) and applied to
DraftToDone. Started 2026-07-26 at **€0 MRR, 2 lifetime customers**.

| File | What it is |
|------|-----------|
| [`CADENCE.md`](./CADENCE.md) | **Open this every Monday.** The weekly rhythm, the 90 days, the kill criteria. |
| [`SCHEDULE-WEEK-1-4.md`](./SCHEDULE-WEEK-1-4.md) | Four weeks of posts, mapped to day and platform. Load one week each Sunday. |
| [`POSTIZ-SETUP.md`](./POSTIZ-SETUP.md) | Self-hosting the scheduler on the existing Coolify box. |
| [`BREVO-SETUP.md`](./BREVO-SETUP.md) | Wiring the email sequences: lists, attributes, env vars, automation. |
| [`STRATEGY.md`](./STRATEGY.md) | The diagnosis and why the plan is sequenced this way. |
| [`PHASE-1-EXECUTION.md`](./PHASE-1-EXECUTION.md) | The five plays for the first 10 paying customers, with the copy to send. |
| [`CREATOR-PARTNERSHIPS.md`](./CREATOR-PARTNERSHIPS.md) | The biggest single lever: the pitch, the ladder, the short-list. |
| [`content/REDDIT-POSTS.md`](./content/REDDIT-POSTS.md) | Four posts, written out. |
| [`content/SOCIAL-POSTS.md`](./content/SOCIAL-POSTS.md) | ~35 X and LinkedIn posts. |
| [`content/VIDEO-SCRIPTS.md`](./content/VIDEO-SCRIPTS.md) | Three flagship scripts + the tutorial series. |
| [`content/GEO-LISTICLE.md`](./content/GEO-LISTICLE.md) | The Medium/LinkedIn listicle — the 72-hour AI-visibility win. |
| [`content/MEME-PLAYBOOK.md`](./content/MEME-PLAYBOOK.md) | The meme account: 12 concepts, the rules, and the honest risk. |
| [`emails/`](./emails/) | Kit delivery, founding launch, cold outreach. |
| [`PLAYBOOK-NOTES.md`](./PLAYBOOK-NOTES.md) | The raw extraction — what the founders actually said. |

## The one-paragraph version

The boring-marketing base (≈2,400 SEO pages, `llms.txt`, MCP server, CLI, four locales) was
built *before* validation, which inverts the corpus's central rule. That base is finished and
compounds without further input, so from here effectively all new effort goes to **viral
marketing and direct response**. The blocking gap was that the site captured no email at all,
making a launch impossible; that is now fixed. The ICP is locked to the **KDP catalog
operator**. The fastest available lever is a **creator partnership**, which for this product
can be paid in credits rather than cash.

## Shipped so far

- `/[locale]/kdp-operator-playbook` — the lead magnet, ungated so it can rank, with the email
  capture buying the operator kit. Four locales.
- `/[locale]/partners` — 40% recurring affiliate program plus a creator-partnership track.
  Four locales.
- Landing page: ICP locked to the operator, volume reframed from promise to capability, and a
  capped **Founding Operator** cohort that captures email.
- `LeadCapture` — client-side email capture for a static site, via Web3Forms.

- `/kit` — the four operator-kit assets, live and downloadable. Noindex; it is what the email buys.
- The content bank, the three email sequences and the GEO listicle, all written out.

## Open items, in priority order

Everything writable is written. What is left needs you, a camera, or a decision.

1. **Do the setup block** at the top of [`CADENCE.md`](./CADENCE.md) — warmed sending domain,
   customer interviews, the showcase book, the demo video, the tracking sheet. Two days.
   Deploy Postiz alongside it ([`POSTIZ-SETUP.md`](./POSTIZ-SETUP.md)) so week 1 can be queued
   rather than typed daily.
2. **Interview the two existing customers.** Two real quotes beat any amount of written copy,
   and answer engines weigh authority signals heavily. I will not invent these.
3. **Run Play 1** (free generations). Highest-leverage action available, costs only credits.
4. **Wire `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`** as a GitHub secret so the key can be rotated
   without a code change.
5. **Decide on the app-side attribution** — capture UTM/referrer at signup into
   `users.signup_source`. Without it, none of the above is measurable and you will double down
   on guesses. Additive, no pipeline or Stripe impact.
6. **Decide on a monthly plan.** Weekly billing is 52 chances a year to churn, and nothing
   comparable in the corpus bills weekly. Needs a Stripe price plus `lib/plans.ts`.
7. **Update `FOUNDING_SEATS_CLAIMED`** in `app/home-content.ts` as seats fill.

## Two things worth disagreeing with me about

**The volume promise.** "312 books a year" is, read plainly, the behaviour Amazon KDP is
actively suppressing — and the founder's own origin story is getting banned. The copy now
treats volume as a capability rather than the promise. If you disagree, it is one line per
locale in `home-content.ts`.

**The 40% commission.** Generous on purpose: at zero brand awareness the commission is the only
argument available to a creator choosing between tools. It is a single constant
(`AFFILIATE_COMMISSION_PCT` in `app/partners-content.ts`) if the margin does not support it.
