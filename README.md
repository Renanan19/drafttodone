# DraftToCover.io — Waitlist Landing Page

A modern, high-converting waitlist landing page for an AI-powered publishing engine.
Dark "Ink & Signal" aesthetic: editorial serif display, technical mono labels, signal-blue glow.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`)
- **lucide-react** icons
- **next/font**: Fraunces (display) · Hanken Grotesk (body) · JetBrains Mono (labels)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Notes

- The email form is **front-end only**. On submit it prevents default, clears the input,
  and fires a "Thanks for subscribing!" toast.
- To wire a real backend, replace `handleSuccess` in `app/page.tsx` with a `fetch` to your
  waitlist endpoint (e.g. ConvertKit, Resend, Supabase, or a `/api/subscribe` route).
- Fully responsive (mobile-first). Respects `prefers-reduced-motion`.
- Design tokens live in `app/globals.css` under `@theme` — change `--color-signal` to reskin.
