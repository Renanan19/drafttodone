# Agent findings C — Florian Darroman podcast, "OpenClaw / agent" cluster

Source: 7 transcripts in `C:\Users\Antoine\youtube_transcripts\florian-darroman\transcripts\`, read in full.
Lens: DraftToDone.io, €0 MRR, 2 lifetime customers, solo founder, marketing is the bottleneck.

**Headline before the detail.** Six of these seven episodes are about building agent infrastructure. The one
guest who actually made money in the period covered (Nevo, Postiz, 20K → 66K MRR in ~35 days) built almost no
agent infrastructure — he made his *product* consumable by other people's agents and then spent his time on
distribution. The host himself abandoned the entire 13-agent setup he evangelised in ep. 4 roughly six weeks
later in ep. 6. Treat the "agent army" content as a genre, not as a playbook.

Second headline: DraftToDone has already done the expensive half of the one strategy that demonstrably worked
here (MCP server, agent REST API, CLI, /llms.txt). It has done ~none of the cheap half (getting listed,
getting written about, being the required dependency inside somebody else's free artifact). That asymmetry is
the single most actionable thing in this batch.

---

## Ep. 1 — "AI Agents Army ... $28k/mo startup" (Bhanu, SideGPT / Mission Control HQ)

Mostly architecture porn. Three things survive scrutiny:

- **The one-shot conversion audit is real and takes an hour, not an agent army.** He pointed an agent at his
  own product as a *signed-up user* — it went through the full signup → create-a-chatbot flow and came back
  with named breakpoints: pricing page has only one testimonial; "I signed up and you sent me no email, you
  have no onboarding sequence, here are emails 1/2/3 and the condition for sending #3." Diagnosis: 50,000
  visitors/month → 50 trial starts wasn't a retention problem, it was an *activation* problem. You can run
  this today with Claude Code + a throwaway account against drafttodone.io. Cost: one hour. This is the only
  thing in ep. 1 I'd actually copy.
- **Read-only credentials as the default.** He asked the agent how to give it *read-only* email access, and it
  walked him through creating an API key with send disabled. Same pattern for Stripe/analytics. Relevant if you
  ever point an LLM at your live Stripe or Postgres — read-only DB user, restricted Stripe key.
- **Honest disclosure buried at the midpoint.** Asked directly "did this agent help you make more money?" —
  *"Not exactly yet."* The $28k/mo in the title predates the agents. The output so far is a to-do list, not
  revenue. He also says the real effect was that he now has *too many things to do* and has "worked more in the
  past two weeks than ever." For a founder whose bottleneck is time, that is a cost, not a benefit.

Skip: Mission Control HQ (it's the guest's product, plugged in the description), the 3D agent-office
visualisation, the multi-agent group chat.

---

## Ep. 2 — "I made $46k in 35 days with OpenClaw" (Nevo, Postiz) — **the only episode with real signal**

This is the one to re-read. Note the irony: Postiz is the tool you're planning to self-host, and Nevo says
plainly he doesn't expect self-hosters to ever pay him. You are his non-customer; that's fine, but it means
you should read this as a competitor case study, not as vendor advice.

**The mechanic that actually produced the money — be the paid dependency inside someone else's free artifact.**
He ran this three times, on three different trends, with numbers:

1. **N8N templates (6K → 12K MRR in one month).** He noticed people were selling N8N automation templates.
   He hired a cheap Upwork freelancer to scrape Skool communities for N8N group owners' names and emails, then
   ran an outreach sequence asking them to add Postiz as the *final node* in their templates. Buyer installs
   template → template requires Postiz → buyer signs up. He paid in kind: newsletter listing, lifetime free
   account, intros. (Adjacent to the "pay creators in credits" item you already have, but the mechanism is
   different and stronger: you're not buying a mention, you're becoming a *required step in a workflow someone
   else is selling.*)
2. **MCP (+3–4K MRR).** Built an MCP for Postiz, ran a **separate Product Hunt launch for the MCP alone**, and
   pushed it into every MCP directory/library he could find. DraftToDone already has the MCP. The listing and
   the launch are ~a weekend of work and cost nothing.
3. **A free skill on the OpenClaw marketplace with Postiz as the only paid dependency** (see ep. 3 —
   this was Oliver's skill, 1,600 installs, and Nevo didn't build it or pay for it).

**The X long-form article channel — the highest-leverage single finding in the batch.** Oliver Henry, **200
followers**, wrote a long-form X *article* about his agent setup that mentioned Postiz nine times. It hit
**7M views**. Postiz went from ~100 trials/**month** to **700 trials in a week**, then settled at a sustained
**~400 trials/week**. Nevo then wrote his own article with the same ~200-follower account and got 500K views.
Specifics worth keeping:

- **X now distributes articles by topic interest, not by follower graph.** Nevo's explicit read: *"when I'm on
  200 [followers] the articles explode a lot more than when I'm on 2,000."* So recruit *small* accounts, not
  big ones. This inverts normal influencer logic and makes the play nearly free.
- Nevo then scaled it: DM'd dozens of 200–300-follower accounts already using Postiz and asked them to write
  articles. Payment: free/lifetime accounts, newsletter placement, intros.
- **The second article converted far better than the first because it contained an installable skill rather
  than a how-to.** Ship the artifact, not the tutorial. This is the same conversion mechanic as the N8N
  template.
- He found Oliver by **manually searching his own brand name on X's "Latest" tab** every day or two. No social
  listening tool. Two minutes a day.

**CLI beats MCP for agent consumption.** His own MCP is *"slow, huge context window, sometimes disconnects."*
A CLI (`postiz create post -m "..." -i ...`) is one line instead of a large JSON payload, so the model burns
far less context and can retry cheaply on failure. He built the whole CLI by pointing Claude Code at his
existing public docs — *"here is the docs, just make a CLI for me"* — in about two hours. **You already have
this.** The finding for you is a negative-cost one: stop building agent surface, start distributing it.

**Product Hunt, honestly.** PH today "barely gives you any customers" directly. The reason he still launches
every 3–6 months (and just asks PH to waive the wait, they always approve): if you top the list, newsletters
pick you up for free. The Rundown AI listed him off the back of a PH placement and sent ~200 people
immediately — a slot that otherwise costs real money. How he wins: private 1:1 outreach with an explicit
reciprocal offer ("upvote if you like it, and in return I'll list you / discount you / intro you"), plus —
flagged as grey-area — LinkedIn automation and mass-DMing members of Slack communities. **The reciprocal-offer
part is clean and copyable; the Slack/LinkedIn spraying is not, and would burn your name in a niche this
small.**

**Two operational notes worth keeping:**

- *"Every time you create something new, this something new gives you bugs and can cause very high churn."*
  He has shipped almost no new features for a long time and spends most days fixing existing bugs. Directly
  supports leaving the product alone and doing marketing.
- He **refused** to build an agent-based support automation: *"I don't want to create an OpenClaw automation
  ... it will be too expensive to run OpenClaw on everything. I prefer something more automated."* The person
  making the most money in this batch deliberately uses the least agent infrastructure.

Ignore: the open-source / r/selfhosted growth engine (250K views per Reddit post). It's the backbone of his
story and it does not transfer — DraftToDone is closed-source, and he says himself the open-source channel is
now "AI sloppy" and weakening. Also ignore the ad read for "Distribute" (competitor product, already excluded).

---

## Ep. 3 — "How I make money with OpenClaw (free skill)" (Oliver Henry, Larry / Snuggly)

The other side of the ep. 2 story. Useful, with a large caveat about what actually earned the money.

- **The free-skill-as-distribution play, from the author's side.** He published the Larry skill free on the
  official marketplace: 1,600 installs in the first days. He made Postiz the only paid dependency — not from a
  deal (he had *never spoken to Nevo*) but because it was what his agent understood from the docs. He monetised
  via an **affiliate link inside the article**. This is the template: *someone else's free artifact, your paid
  dependency, and an affiliate link back to them.* You can be either side of it. For DraftToDone: a free
  "niche-brief → KDP package" skill/template where the generation step requires a DraftToDone key.
- **TikTok cold-account warm-up protocol — free, concrete, and the best small tactic here.** Before posting
  anything: create a fresh account and spend **three days** consuming your niche like a human (watch some,
  skip some, like some, comment, follow — do *not* bulk-like). After three days your For You page is entirely
  that niche, and TikTok classifies your first post correctly instead of dumping it on 100 random people.
  Result: first video gets 1–2K views instead of 100–300, skipping months of algorithmic guessing. Costs
  ~15 min/day for three days. The KDP/self-publishing niche is well populated on TikTok.
- **The funnel-diagnosis triad. No tooling required — it's a decision rule, memorise it:**
  - many views, few signups → **the CTA is bad**
  - few views, high click-through → CTA fine, **the hook is bad**
  - many views *and* many signups, few conversions → **onboarding/paywall is bad**
  He acted on the third: 200K views, zero conversions → added an onboarding question ("which room?") and made
  the paywall reflect that answer, then made the hard paywall reflect what the user *actually* generated.
  Personalised-paywall-from-onboarding-answer is a real, cheap idea for a €14.99/week product.
- **Deliberate errors as comment bait.** He mislabelled a 70s room as 90s and left a kitchen with the oven
  missing; pedants flooded the comments correcting him and it became his most-viewed post. He notes conversion
  from those was poor. Use for reach, never as the main format. (KDP equivalent: post a cover that quietly
  violates a KDP spec and let the publishing pedants pile on.)
- **Security, since you run a Hetzner VPS:** don't install marketplace skills you haven't read line by line
  (early marketplace skills were pulling dependencies from random URLs and exfiltrating API keys); and do not
  stand up an internet-exposed agent gateway wired to your other machines.

**Be sceptical about the money.** Asked how he made money, the answer is: affiliate links, **a memecoin
someone minted on his agent's name**, and his existing app. The coin is the outlier that made it a story. He
also already worked at RevenueCat and had ~1,900 followers before this. And note what he *doesn't* automate:
he refuses to let the agent touch his email or personal life, deliberately keeping it to the one thing it's
good at.

---

## Ep. 4 — "How OpenClaw runs my entire business (full setup)" (the host, 13 agents, Mac Mini)

**Primarily an ad.** For a free "interactive install assistant" linked in the description and for his paid
Skool community, OpenClaw Lab. Read ep. 6 immediately after: this is the same person, and he abandons this
entire setup about six weeks later. Almost nothing here is worth a solo founder's hours. Three ideas survive
as *ideas*, none of which require any of the infrastructure:

- **A daily churn/at-risk brief.** Every morning: who cancelled, a drafted DM asking why, unanswered posts,
  people who need help, and "content gaps" (several people asking the same question → write the answer once).
  He says the DMs to churned customers gave him the most useful insight he'd had. **You do not need 13 agents
  for this at 2 customers — you need to email both of them personally.** But the shape is right for later, and
  Stripe + Postgres + Resend already give you every input.
- **"Cross out what you love, automate the rest."** Write down every task you do, keep the ones you're good at
  and enjoy, automate/kill the rest. Then **pick exactly one task and make it perfect before adding a second.**
  He built the website first, then spent days on *only* the content pipeline. His own advice contradicts his
  own 13-agent screenshot.
- **Every recurring job needs a feedback loop into a metric, or it's theatre.** A post that got many views and
  no conversions vs. one that got few views and many conversions should change what you publish next week. If
  a cron job doesn't feed a number that changes a decision, delete it.

Also, quietly, in his own words: *"it doesn't work always perfectly. Sometimes my OpenClaw forgets a task. I
wake up in the morning and a post wasn't scheduled."* Cost he quotes: $600 Mac Mini + $200/mo Claude Max, or
$20–30/day on credits.

---

## Ep. 5 — "39 OpenClaw use cases" (Kits, Tinkerers Club) — **titled as a positive, reads as the strongest warning**

An hour of home-automation projects (weight sensors under sofas, a smart pantry, a dental-history dashboard,
Pi-hole, a custom Android launcher). Zero of it is marketing or customer work. But it contains the most
candid self-assessment in the batch, from a *promoter* of the tooling running a paid community about it:

- Asked what he uses it for in his business daily, right now: **"Zero."** *"I went from being super productive
  with it to feeling paralysed ... now I'm just tinkering with my setup but it's not doing anything useful,
  meaning I have customers yelling at me — 'hey man, you didn't answer me, you didn't do this.'"*
- *"I'm spending more time on improving my setup than my life actually being fixed."* Since installing it he
  was **late paying his mortgage for the first time in his life** and **missed three appointments**, including
  driving to his vet instead of his dentist.
- He **turned off the heartbeat and all cron jobs**, because the email agent decided an inbound *investor*
  email looked like cold outreach and archived it. *"Even if this happens once every 100 emails, I cannot
  trust it."*
- His actual working conclusion: the agent is useful only for *very specific, explicitly-scoped instructions*
  ("read these DMs, find the sponsor, use Infakt to create the invoice, send it via this integration"). Left
  autonomous on a schedule, *"it's a dumbass and it's useless."*
- **The most transferable line, and it argues against agents:** *"if you find something repetitive enough you
  need to put it in an old-school webhook type of flow — when A happens, B happens ... it has nothing to do
  with AI."* Anything recurring in your business (welcome sequence, trial-expiry nudge, failed-payment
  recovery, weekly metrics digest) should be a cron job + a script + Brevo/Resend. Not an agent.
- Secondary but real: convert anything that worked into a **written skill or slash-command file** instead of
  re-prompting it. His "vibe coding → vibe engineering" point. If you use Claude Code for marketing ops, the
  win is committing repeatable prompts to files in the repo, not standing up agents.
- Cost he quotes for himself: **~$600/month on LLMs**, to produce (his word) zero business output.

Also worth noting for later, not now: prompt injection is the real attack surface (email, inbound messages,
web browsing), and the mitigation is a strong model plus not letting the agent read untrusted input at all.

---

## Ep. 6 — "I stopped using OpenClaw ($2,000 → $200)" — **the most valuable episode in the batch**

Same host as ep. 4, ~6 weeks later. Why he quit, precisely:

1. **The magic was the model, not the framework.** *"I found out that OpenClaw was magical thanks to Opus 4.6.
   And since I changed to GPT 5.4 or Codex or any other model, I can't find the same thing."* On a weaker
   model the same setup couldn't send a file on Telegram or create a GitHub repo. He now recommends
   **following the model, not the harness.**
2. **Cost blew up 10x in one week.** Anthropic blocked Max-plan use inside these harnesses; he went from
   **$200/month to ~$60/day ≈ $2,000/month** on API credits. The "$2,000 → $200" in the title is him going
   *back* to a plain subscription — it is not a saving produced by automation. (Hermes was blocked ~2–3 days
   later, so switching harness wasn't an escape either.)
3. **The tinkering treadmill.** *"I was using it every day trying to find out a new setup, but I was talking
   to a wall."* Every day spent on the setup, not the business.
4. **The 13-agent architecture bought him nothing.** After switching to plain Claude Code / Cowork on a
   Mac Mini his verdict is that they are *"approximately equal to OpenClaw"* — and Claude renders reports
   inline instead of him having to route them to Notion/Obsidian first. **The tool you already have was
   sufficient.**
5. **The only thing that made the switch painless was portable context, not the agents.** Everything —
   `user.md`, `soul.md`, `tools.md`, all accumulated context — lived as plain markdown in Obsidian. He
   re-pointed a different tool at the same files and was running in an afternoon. *"If tomorrow Claude is not
   the best, I can switch to a new setup pretty easily because everything is in my Obsidian."*

**What this means for you.** Everything durable is the context files, not the harness. Keep your ICP notes,
brand voice, offer, objections, and channel learnings as markdown in the repo — that survives every model and
tool change. Do not buy a Mac Mini. Do not build an agent org chart. The distance between a 13-agent army and
plain Claude Code was, by the evangelist's own measurement, approximately zero.

Also note the shape of the incentive: he kept the paid community running through the reversal and just
renamed it. Every episode in this cluster is attached to a community, a skill, a marketplace listing or a
sponsor read. Weight the claims accordingly.

---

## Ep. 7 — "I make $1M/year selling access to APIs I don't own" (Mickey, Zenlyn / ex-getlate.dev)

Nothing about agents. Four genuinely useful *marketing* findings, and a clear answer to the strategic question.

- **Bid on branded/competitor keywords you can never rank for organically.** From day zero they ran Google Ads
  on `meta API`, `tiktok API`, `youtube API` — maximally high-intent, and impossible to outrank organically
  because they're brand terms. *"With the paid ad you can do it pretty easily."* Zero to 10K MRR in ~3 months
  on this. DraftToDone equivalent: bid on competitor tool brand names and on `amazon kdp cover generator`-type
  terms rather than fighting for them in SEO. (Distinct from the automated-budget-rules item you already have —
  this is about *keyword selection*.)
- **Let Google Ads pick your SEO topics.** They initially sprayed AI-generated blog posts at everything and it
  didn't work on the head terms. They now write **far less content, higher quality**, targeting exactly the
  keywords Ads has *proved* convert. Cheap, and it directly counters the "publish 30 AI posts a month" trap.
- **Second independent negative on Product Hunt:** they launched, and *"it didn't really work or bring any
  revenue"* — all revenue that month came from the channels already working. Combined with ep. 2, PH is worth
  doing only for the newsletter-pickup second-order effect, and only if you can realistically top the list.
- **He deliberately ignored CAC vs LTV for the first 2–3 months** — acquisition cost was ~2x LTV and he shipped
  anyway, on the theory that the product and retention were both about to change. Be careful copying this: he
  had money from a prior VC-backed exit, and by month ~4 he had hired his first of four developers. You do not
  have that buffer. The transferable half is: don't over-instrument a channel before you have enough data for
  the numbers to mean anything; the non-transferable half is the ability to eat negative unit economics.

**Is there a second revenue line in your MCP server / agent API? Honest answer: no, not as a product.**
Zenlyn's business is absorbing *someone else's* bureaucratic moat — weeks of Meta/TikTok developer-program
approval and compliance that its customers refuse to do themselves. DraftToDone's API exposes your own
pipeline; there is no third-party approval nightmare to resell, so the core value proposition doesn't exist.
Their near-zero churn comes from a lock-in you also don't have: their customers' *end users'* social accounts
are connected through Zenlyn, so migrating would break those users. And the GTM is entirely wrong for you —
their ICP is other SaaS companies with dev teams, which means enterprise sales, uptime guarantees, and **150
support conversations a day** handled by a five-person team, four of them developers. At €0 MRR with one
person, that is a way to acquire a support burden instead of revenue.

**The version of the agent-surface question that *is* worth pursuing is ep. 2's, not ep. 7's:** your MCP/CLI/
agent API is not a product to sell, it's a **distribution channel** — it lets DraftToDone be the paid step
inside somebody else's free skill, template, or article. That costs nothing extra because it's already built.

---

# Worth doing at €0 MRR

Ordered by (value ÷ hours). Nothing here needs new infrastructure.

1. **Get the existing agent surface listed and written about.** You have the MCP server, CLI, agent API and
   /llms.txt already. What's missing is purely distribution: submit the MCP to every MCP/skill directory and
   registry you can find, and publish a **free, readable skill/template** — "niche brief → complete KDP
   package" — where DraftToDone is the required (paid) step. This is the exact mechanic behind Postiz's
   6K→12K month and its +3–4K MRR MCP bump, and behind 1,600 installs of a skill whose author had never met
   the vendor. Cost: a weekend. *Honest caveat: Postiz's audience was ~90% technical, yours is prosumer KDP
   publishers. The overlap is the "automated income stream" crowd, which is large but not identical. Treat
   this as the highest-upside bet in the batch, not a certainty.*
2. **Recruit micro-accounts (200–500 followers) to write long-form X articles.** X distributes articles by
   topic interest, not follower graph — small accounts got *more* reach, repeatedly, across two independent
   guests. Pay in product (lifetime/extended access), not cash. Make sure every article ships with an
   **installable artifact**, not just a narrative: the article containing a skill converted far better than
   the one explaining a workflow. Budget: near zero.
3. **Search your own brand name on X's "Latest" tab, two minutes a day.** No tooling. This is literally how the
   7M-view article was found before it was written. Do the same for a handful of KDP intent phrases.
4. **Run the one-shot conversion audit on your own funnel this week.** Point Claude Code at a fresh signup on
   drafttodone.io — walk the entire path to first generated book — and have it name the breakpoints. One hour.
   Combine with the ep. 3 diagnostic rule (views vs. clicks vs. conversions → hook / CTA / onboarding) so you
   know which number to fix first. Also: personalise the paywall from an onboarding answer (which niche are you
   publishing in?) — that's a small, cheap change with a documented effect.
5. **Warm a fresh TikTok account for three days before posting.** Consume the KDP/self-publishing niche like a
   human, then post. Turns first-post reach from ~200 into ~1–2K and skips months of algorithmic guessing.
   ~15 min/day for three days, free.
6. **Google Ads on branded/competitor terms only**, and then **let the converting search terms decide which
   SEO pages you write.** Fewer, better pages. This inverts the usual order and prevents burning weeks on
   content that Ads could have told you was worthless in days.
7. **Keep all durable context as markdown in the repo** (ICP language, voice, objections, what worked per
   channel). Ep. 6's only real lesson: the context files survive every model, tool and harness change; nothing
   else does.
8. **Anything recurring → cron + script + Brevo/Resend.** Trial-expiry nudge, failed-payment recovery, weekly
   metrics digest, churned-customer "why did you leave?" email. Deterministic, cheap, debuggable. Explicitly
   endorsed by both the highest-revenue guest and the deepest tinkerer in the batch.
9. **Email your two lifetime customers personally today and ask what nearly stopped them buying.** The one
   thing the host said actually produced insight was DMing churned users by hand. At n=2 there is no automation
   worth building; there is a conversation worth having.

# Explicitly not worth doing yet (and why)

1. **Do not build an agent org chart / "13 agents" setup.** The evangelist who filmed the full-setup episode
   abandoned it ~6 weeks later and concluded plain Claude Code was *"approximately equal."* The other heavy
   user's business output from his setup, self-reported, is **"zero"** — while customers went unanswered, he
   was late on his mortgage and missed three appointments. You would be buying the exact failure mode you
   already have (building instead of marketing) and dressing it as progress.
2. **Do not buy a Mac Mini or dedicate a VPS to an agent gateway.** $600 hardware plus $200–600/month in LLM
   spend, at €0 MRR, to run something you have already established is roughly equal to the CLI on your laptop.
   An internet-exposed gateway wired to your infrastructure is also a genuine security liability — one guest
   specifically warns about it, and you have live Stripe keys, Postgres and R2 on that Hetzner box.
3. **Do not build agent-driven customer support.** Nevo refused it explicitly as too expensive to run per
   ticket. Kits turned his off after it archived an investor email. At 2 customers you have no ticket volume
   to justify it, and one bad autonomous action costs more than every hour it could save.
4. **Do not automate autonomous inbox triage or anything on a heartbeat that can take an irreversible action**
   (archive, delete, send, refund, reply). The single most concrete failure in these transcripts is exactly
   this, from someone who wanted it to work.
5. **Do not sell API/MCP access as a second revenue line.** Ep. 7's business resells someone else's compliance
   nightmare and locks customers in via their end-users' connected accounts — neither applies to you. Their
   model needs enterprise sales, uptime guarantees and ~150 support conversations/day handled by four
   developers. It is a support burden disguised as a revenue line. Use the agent surface as a *channel*
   (item 1 above), not as a product.
6. **Do not build more agent surface.** You have MCP + CLI + REST + /llms.txt. Postiz built its CLI in two
   hours from existing docs and that was enough to become the category default. Every further hour here is an
   hour not spent getting listed or getting written about. If anything, note that MCP is the *weaker* surface
   (slow, heavy context, disconnects) and the CLI is what agents actually prefer — so lead with the CLI in
   docs and listings.
7. **Do not launch on Product Hunt as a growth plan.** Two independent negatives on direct revenue in this
   batch. Only worth it as a bank-shot at newsletter pickup, and only if you can credibly top the list — which
   at 2 customers and no audience you cannot. Revisit later. And do not copy the mass Slack-community DM and
   LinkedIn-automation tactics used to win it; in a niche this small that trades a permanent reputation cost
   for a one-day placement.
8. **Do not open-source the product to farm r/selfhosted.** It's load-bearing for Postiz's whole story and it
   does not transfer: closed-source SaaS, and even the guest says the channel is now saturated with AI slop and
   weakening. Also, his open source *is* his cloud product — he simply accepts that most users never pay.
9. **Do not ship new features to make DraftToDone more "agentic."** *"Every time you create something new, this
   something new gives you bugs and can cause very high churn."* The product is described as strong. The
   bottleneck is marketing. Every episode here is a founder finding an elaborate reason to build instead.
