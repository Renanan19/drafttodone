# Postiz — self-hosting the posting machine

[Postiz](https://github.com/gitroomhq/postiz-app) is an open-source social scheduler (AGPL-3.0)
— the self-hosted alternative to Buffer/Hypefury. It covers every platform in the cadence: **X,
LinkedIn, Reddit, Threads, Instagram, TikTok, YouTube, Bluesky, Mastodon, Discord, Facebook,
Pinterest, Slack.**

Reddit and LinkedIn in one tool is the part that matters here — most schedulers drop Reddit, and
Reddit is three of our seven weekly posts.

**Why this is the right call:** the daily 20-minute posting block in
[`CADENCE.md`](./CADENCE.md) is the first thing that dies in a busy week. Batching a week of
posts on Sunday and letting them fire is the difference between a cadence that survives month
two and one that doesn't.

---

## Where it goes

You already have the infrastructure. **Coolify on the Hetzner VPS** (`coolify.drafttodone.io`),
which already runs the app, the worker and Postgres. Postiz is one more resource on the same box.

Cost: €0 beyond the VPS you are already paying for. Buffer/Hypefury for these platforms would be
roughly €30–80/month, and this is the kind of fixed cost that quietly eats a bootstrapped
runway.

**Sizing:** Postiz brings Postgres, Redis and Temporal. On a CPX21 alongside the existing app and
worker this will be tight — watch memory for the first week and bump to CPX31 if the worker
starts getting OOM-killed. The book worker is the thing that must never die; Postiz is expendable.

---

## Deploy on Coolify

Postiz's own docs are the canonical source and the compose file changes between releases — **pull
it fresh, do not copy a snapshot from a blog post**:

- Docs: <https://docs.postiz.com/installation/docker-compose>
- Config reference: <https://docs.postiz.com/configuration/reference>
- Canonical compose: <https://github.com/gitroomhq/postiz-docker-compose>

### Steps

1. **DNS:** point `postiz.drafttodone.io` at the VPS in Cloudflare. **Grey cloud (DNS only)** for
   the initial OAuth setup — several providers' callbacks dislike the orange-cloud proxy. You can
   turn the proxy on afterwards.
2. In Coolify: **New Resource → Docker Compose**, and paste the current compose file from the
   repo above.
3. Set the domain to `https://postiz.drafttodone.io`. Coolify handles TLS.
4. Fill the environment variables (below).
5. Deploy, then open the URL and create your account.
6. **Immediately set `DISABLE_REGISTRATION=true`** and redeploy. Otherwise you are running an open
   signup form on your own domain.

### The environment variables that matter

| Variable | Value | Note |
|---|---|---|
| `DATABASE_URL` | Postgres connection string | Use a **separate** database from the app. Do not share. |
| `REDIS_URL` | Redis connection string | Postiz brings its own; leave the compose default |
| `JWT_SECRET` | `openssl rand -base64 48` | Rotating this logs everyone out |
| `FRONTEND_URL` | `https://postiz.drafttodone.io` | Browser-facing. OAuth callbacks depend on it |
| `NEXT_PUBLIC_BACKEND_URL` | `https://postiz.drafttodone.io/api` | Browser-facing |
| `BACKEND_INTERNAL_URL` | `http://localhost:3000` | Server-side only, inside the container |
| `MAIN_URL` | `https://postiz.drafttodone.io` | Optional; defaults to `FRONTEND_URL` |
| `IS_GENERAL` | `true` | Required for self-hosted |
| `DISABLE_REGISTRATION` | `true` | Set after your account exists |
| `RUN_CRON` | `true` | **Without this nothing ever posts.** |
| `STORAGE_PROVIDER` | `cloudflare` | You already run R2 for the app — use a separate bucket |
| `TEMPORAL_ADDRESS` | per compose default | Required on v2.12.0+ |

**Gotchas, in the order people hit them:**

- **`RUN_CRON` unset = a scheduler that schedules and never posts.** This is the single most
  common self-host failure.
- The three URL variables are three different contexts. Getting `BACKEND_INTERNAL_URL` wrong
  breaks SSR in ways that look like random blank pages.
- Changing env vars needs a full `down` then `up` — a restart will not pick them up. In Coolify,
  redeploy rather than restart.
- Use a **separate Postgres database** from `drafttodone-app`. Sharing is how a scheduler
  migration takes the book queue down.

---

## Connecting the accounts

Each platform needs its own developer app and OAuth credentials. Budget an evening; this is
tedious and it is a one-time cost.

**Do these three first — they carry the cadence:**

1. **X** — developer portal, create an app, OAuth 2.0, callback
   `https://postiz.drafttodone.io/integrations/social/x`. The free tier's write limits are low
   but sufficient for one post a day.
2. **LinkedIn** — LinkedIn Developers, create an app, request *Share on LinkedIn* and
   *Sign In with LinkedIn using OpenID Connect*. Approval takes a day or two, so start it now.
3. **Reddit** — reddit.com/prefs/apps, type `web app`. **Warning:** Postiz can post to Reddit, but
   Reddit's own rules apply. Do not blast three subreddits at once from a fresh account. Space
   them, and post the first few by hand from a warmed account.

**Later, once the cadence is stable:** Threads, YouTube (video descriptions), Bluesky, Mastodon,
Facebook. These have real audiences for this niche but are not worth the OAuth setup on day one.

**Skip for now:** Instagram and TikTok. Per the corpus, agency-style UGC is not the play for a
product-led prosumer SaaS, and founder-led short-form works better posted natively anyway.

---

## The workflow this creates

**Sunday, 45 minutes:**

1. Open [`content/SOCIAL-POSTS.md`](./content/SOCIAL-POSTS.md) and
   [`content/REDDIT-POSTS.md`](./content/REDDIT-POSTS.md).
2. Load the week from [`SCHEDULE-WEEK-1-4.md`](./SCHEDULE-WEEK-1-4.md) into Postiz.
3. Queue it. Done for the week.

**Daily, 10 minutes:** answer comments and replies. **Postiz does not do this and it must not.**
The comment section is where the trust gets built — Julia's point that the comments outrank the
video applies to every platform here.

**What never goes in the scheduler:**
- Replies and comments — always live, always you
- Anything reacting to news or a trend
- The free-generation offer replies
- Launch-week emails

---

## The honest limitation

A scheduler makes a cadence survivable. It does not make content good, and a queue full of
mediocre posts firing on time is worse than three good posts a week — it trains the algorithm
that your account is low-value.

Cody schedules ~70 posts a week, but the point he makes is that volume is only useful because it
gives you **surface area to find what works**. Post a lot, look at what performed, make more of
that. The scheduler is how you afford the volume; it is not the strategy.
