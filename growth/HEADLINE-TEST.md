# Headline split test (started 2026-10-09)

Ogilvy's method (*Ogilvy on Advertising*, ch. 15): two headlines with **different promises**, half
the audience each, a free sample offered at the end, then count the replies. Here the sample is
the free preview, and a reply is a signup from the hero brief box.

| Variant | `utm_content` | Headline (EN) | Promise |
|---|---|---|---|
| a, control | `h1-control` | Turn one idea into a complete *KDP book.* | completeness: the whole package |
| b, challenger | `h1-sample` | See your book's title and cover in a minute, free. *Get the whole book in about an hour.* | free sample + speed (Hopkins: specific claim, "free") |

**Mechanics:** `site-layout.tsx` assigns a/b in a `<head>` script before first paint (50/50,
sticky per browser in `localStorage.dtd_hv`); CSS shows one `<h1>` text; `hero-brief.tsx`
sends the variant as `utm_content`; the app stores it in `users.signup_source` (first touch). No-JS
visitors and crawlers see the control. Both variants are in all four languages.

**Measure:**
```sql
select signup_source->>'utm_content' as variant, count(*) as signups,
       count(*) filter (where exists (select 1 from book_previews p where p.user_id = users.id)) as previews,
       count(*) filter (where exists (select 1 from credit_ledger c where c.user_id = users.id and c.delta > 0 and c.reason not like 'qa:%')) as paid
  from users
 where signup_source->>'utm_campaign' = 'hero_brief'
   and created_at >= '2026-10-09'
 group by 1;
```

**Decision rule, set before the data:** run until 100 hero signups in total or 4 weeks, whichever
comes first. Keep the challenger only if it has **at least 20% more signups AND does not have fewer
paid customers**; otherwise keep the control. A signup that never pays is not a win.

**Known limit:** attribution is first touch. A visitor who reached app.drafttodone.io before
(any page) already has a cookie, so their utm_content is not recorded. That affects both halves
equally, so it shrinks the sample without biasing it.

**After the test:** delete the losing text from `home-content.ts` (`h1test` or `h1main`), the
`.hv-*` CSS and the head script, so the page carries one headline again.
