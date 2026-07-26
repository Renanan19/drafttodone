# Brevo — wiring the sequences

The three sequences in [`emails/`](./emails/) are written but inert until there is a tool
behind them. This is that tool.

Everything on the code side is built. What follows is the click-work only you can do.

---

## 0. The key — get the right one

Brevo has two credential types and they are not interchangeable:

| Prefix | What it is | Use |
|---|---|---|
| `xsmtpsib-…` | **SMTP key** | Sending mail through the SMTP relay |
| `xkeysib-…` | **API v3 key** | Contacts, lists, campaigns, automations |

**We need `xkeysib-…`.** Brevo → *SMTP & API* → the **API Keys** tab (not the SMTP tab) →
*Generate a new API key*.

**Never commit it.** It goes in Coolify's environment variables only. An API v3 key can send
mail as you and read every contact you hold, which is exactly why the static site does not touch
it — it posts to `app.drafttodone.io/api/subscribe`, and the key lives on the server.

---

## 1. The three lists — DONE

Created 2026-07-26 in the `DraftToDone` folder (id 3).

| List | ID | Who lands here | What they get |
|---|---|---|---|
| `DTD - Playbook` | **4** | Anyone downloading the operator kit | [Sequence 1](./emails/SEQUENCE-KIT-DELIVERY.md), 5 emails / 14 days |
| `DTD - Founding` | **5** | Founding-operator applicants | [Sequence 2](./emails/SEQUENCE-FOUNDING-LAUNCH.md), the launch countdown |
| `DTD - Partners` | **6** | Creators and affiliates | Neither. Handled personally. |

Three lists rather than one tagged list, because a creator receiving the founding-cohort
countdown reads as spam and costs you the relationship.

---

## 2. The contact attributes — DONE

Created 2026-07-26. The endpoint sends these, and without them the values would be silently
dropped:

| Attribute | Type | Value |
|---|---|---|
| `SOURCE` | Text | `playbook`, `founding-cohort` or `partners` |
| `LOCALE` | Text | `en`, `fr`, `it`, `de` |

`LOCALE` matters: the playbook exists in four languages and sending a French reader the English
sequence wastes the lead.

---

## 3. Set the env vars in Coolify

On the `drafttodone-app` resource:

```
BREVO_API_KEY=xkeysib-...        # never in git — Coolify only
BREVO_LIST_PLAYBOOK=4
BREVO_LIST_FOUNDING=5
BREVO_LIST_PARTNERS=6
```

**The IP allowlist matters here.** Brevo is set to reject unrecognised IPs, which is why every
call failed until the VPS was authorised. If Hetzner ever egresses over IPv6 and that address is
not on the list, production will fail *silently* — `/api/subscribe` returns `ok` even when Brevo
refuses, by design, so a visitor never sees an operator problem. Check the list, not the response.

Then **redeploy** — Coolify does not pick up new env vars on a restart.

---

## 4. Verify before trusting it

```bash
curl -i -X POST https://app.drafttodone.io/api/subscribe \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://drafttodone.io' \
  -d '{"email":"you+test1@yourdomain.com","source":"playbook","locale":"en"}'
```

Expect `200 {"ok":true}`, and the contact to appear in `DTD — Playbook` with `SOURCE=playbook`.

**Important:** the endpoint returns `ok` even when Brevo is unreachable or the key is missing —
someone who just handed over their email should never see an error caused by an operator
problem. So **check the list, not the response.** If the contact is absent, the reason is in
Sentry.

Then test the real form at `drafttodone.io/en/kdp-operator-playbook`. If the app endpoint fails,
the site silently falls back to Web3Forms, so the lead still reaches your inbox — which also
means a broken Brevo config looks like success from the outside. Check the list.

---

## 5. Build the automation

Brevo → *Automations* → *Create* → trigger: **contact added to `DTD — Playbook`**.

Then five emails with waits of 0 / 2 / 5 / 9 / 14 days, copied from
[`SEQUENCE-KIT-DELIVERY.md`](./emails/SEQUENCE-KIT-DELIVERY.md).

**Send email 1 as plain text, not a template.** It is a personal email from a founder asking for
a reply, and a branded HTML template with a header image destroys that. Replies are the point:
they warm the sending domain, and per Rob's step 6 they are the customer conversations you need
anyway.

**Do not automate sequence 2.** The founding launch has a live seat count and a real deadline;
send those by hand so the numbers are true.

---

## 6. Sender and deliverability

- **Sender:** `contact@drafttodone.io`, name `Antoine`. Not "The DraftToDone Team" — there is no team, and pretending otherwise reads exactly as it is.
- **Authenticate the domain** in Brevo (SPF, DKIM, DMARC records in Cloudflare). Skip this and the first campaign lands in spam and poisons the domain reputation you will need later.
- **Warm up gradually.** Do not send to 300 people on day one from a domain that has never sent mail.

---

## What is already built

- `lib/brevo.ts` — contact API client, list routing by source
- `app/api/subscribe/route.ts` — public endpoint, CORS-restricted, rate limited per IP and per email, honeypot
- `app/lead-capture.tsx` on the marketing site — posts here, falls back to Web3Forms

Nothing sends until you build the automation in step 5. That is deliberate: **no email goes to a
real person without you pressing the button.**
