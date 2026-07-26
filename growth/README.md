# growth/

Everything derived from the *Profitable Founders* podcast corpus (49 episodes) and applied to
DraftToDone. Started 2026-07-26 at **€0 MRR, 2 lifetime customers**.

| File | What it is |
|------|-----------|
| [`STRATEGY.md`](./STRATEGY.md) | **Start here.** The diagnosis and the sequenced 90-day plan. |
| [`PHASE-1-EXECUTION.md`](./PHASE-1-EXECUTION.md) | The five plays for the first 10 paying customers, with the copy to send. |
| [`CREATOR-PARTNERSHIPS.md`](./CREATOR-PARTNERSHIPS.md) | The biggest single lever: the pitch, the ladder, the short-list. |
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

## Open items, in priority order

1. **Build the operator kit** — the four assets the playbook page promises. Nothing else should
   ship before this; the page is currently writing a cheque the inbox cannot cash.
2. **Build the partner kit** — demo video, a real book's full output, copy blocks. A creator who
   says yes and then waits a week has already lost interest.
3. **Interview the two existing customers** and publish it. Two real quotes beat any amount of
   generated copy, and answer engines weigh authority signals heavily.
4. **Run Play 1** (free generations). It is the highest-leverage action available and costs only
   credits.
5. **Wire `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`** as a GitHub secret so the key can be rotated
   without a code change.
6. **Decide on a monthly plan.** Weekly billing is unusual and reads as churn-prone; every
   comparable product in the corpus sells monthly. This is an app-side change (`lib/plans.ts`
   plus a Stripe price).
7. **Update `FOUNDING_SEATS_CLAIMED`** in `app/home-content.ts` as seats fill.

## Two things worth disagreeing with me about

**The volume promise.** "312 books a year" is, read plainly, the behaviour Amazon KDP is
actively suppressing — and the founder's own origin story is getting banned. The copy now
treats volume as a capability rather than the promise. If you disagree, it is one line per
locale in `home-content.ts`.

**The 40% commission.** Generous on purpose: at zero brand awareness the commission is the only
argument available to a creator choosing between tools. It is a single constant
(`AFFILIATE_COMMISSION_PCT` in `app/partners-content.ts`) if the margin does not support it.
