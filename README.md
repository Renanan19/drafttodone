# DraftToDone.io — Waitlist Landing Page

A high-converting, bilingual (EN/FR) waitlist landing page for an AI-powered
publishing engine. Light, airy, premium **Venice Inc.** aesthetic — see
[`DESIGN.md`](./DESIGN.md).

## Stack

- **Next.js 15** (App Router, **static export** → GitHub Pages ready)
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`)
- **lucide-react** icons
- **next/font**: Newsreader (serif display) · Hanken Grotesk (body)
- **Web3Forms** for email capture (client-side, no backend)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs ./out (static HTML/CSS/JS)
```

`output: "export"` in `next.config.mjs` produces a fully static `out/` folder.

## Email capture — Web3Forms

The form posts directly to Web3Forms from the browser (works on static hosting).

1. Get a free access key at <https://web3forms.com> (enter your email, key is mailed).
2. Provide it as a build-time env var: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
   - Local: create `.env.local` with `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key`.
   - GitHub Actions: add repo secret `WEB3FORMS_ACCESS_KEY` (already wired in the workflow).
3. Until set, the form runs in **demo mode** (shows success, sends nothing).

Each signup is emailed to the inbox tied to your access key. The key is public by
design — it only allows submitting to *your* form.

## Deploy to GitHub Pages

1. Push to `main`. `.github/workflows/deploy.yml` builds and deploys `out/` to Pages.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Custom domain: `public/CNAME` is set to `drafttodone.io`. Point your domain's DNS
   at GitHub Pages, then set the same domain under Settings → Pages.
4. **Project page instead of a domain?** (`username.github.io/REPO`) — uncomment
   `basePath` / `assetPrefix` in `next.config.mjs` and set them to `/REPO`.

## i18n

Bilingual EN/FR. All copy lives in the `COPY` object in `app/page.tsx`. Language
auto-detects from the browser, persists to `localStorage`, and toggles via the
EN/FR switch in the header.

## Notes

- Fully responsive (mobile-first). Respects `prefers-reduced-motion`.
- Scroll-reveal animations + a hover-spreading book-cover fan in the hero.
