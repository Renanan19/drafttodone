# DraftToDone.io — Turn One Idea Into a Complete KDP Book

> Turn one niche brief into a complete, publish-ready KDP product —
> **manuscript, full cover, KDP metadata, and pen name** — from one AI pipeline.
> Built for indie authors and catalog operators.

[**🚀 Open the app**](https://app.drafttodone.io) · [**🌐 drafttodone.io**](https://drafttodone.io) · [**📚 Blog & guides**](https://drafttodone.io/en/blog)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdrafttodone.io&label=drafttodone.io)](https://drafttodone.io)
[![App](https://img.shields.io/badge/app-live-10b58a)](https://app.drafttodone.io)
[![Languages](https://img.shields.io/badge/i18n-EN%20%C2%B7%20FR%20%C2%B7%20IT%20%C2%B7%20DE-blue)](https://drafttodone.io)

**DraftToDone** is AI publishing software that generates the whole book *product*
for **Amazon Kindle Direct Publishing (KDP)** — not just text. From a single niche
brief it writes a full **manuscript**, designs a print-ready **book cover** (front,
spine and back), and produces **SEO-optimized metadata** (title, subtitle,
description, keywords) with **verified pen names** to reduce copyright-strike risk.
The focus is repeatable **catalog quality**, not content spam.

This repository is the public **marketing site and SEO content hub**
([drafttodone.io](https://drafttodone.io)). The product itself runs at
[app.drafttodone.io](https://app.drafttodone.io).

## What it does

- **AI book generator** — writes a complete manuscript (outline → chapters) at your target length.
- **AI book cover generator** — full wrap: front cover, spine sized to page count, and back cover, print-ready for KDP.
- **KDP metadata** — SEO title, subtitle, description and the 7 backend keywords, with category fit.
- **Verified pen names** — author/series branding that lowers copyright-strike risk.
- **Catalog quality gates** — chapter, cover and metadata QA before you upload.

## Free tools (no signup)

| Tool | What it does |
|------|--------------|
| [KDP royalty calculator](https://drafttodone.io/en/kdp-royalty-calculator) | Model ebook & paperback royalties before pricing |
| [AI book cover generator](https://drafttodone.io/en/ai-book-cover-generator) | Front, spine & back cover for KDP |
| [AI book generator](https://drafttodone.io/en/ai-book-generator) | Generate a full manuscript with AI |
| [Book description generator](https://drafttodone.io/en/book-description-generator) | Amazon blurb that sells |
| [Book title generator](https://drafttodone.io/en/book-title-generator) | Clickable, keyword-aware titles |
| [KDP keyword tool](https://drafttodone.io/en/kdp-keyword-tool) | Research the 7 backend keyword slots |
| [AI publishing software](https://drafttodone.io/en/ai-publishing-software) | The full idea-to-upload workflow |
| [Best AI book generator](https://drafttodone.io/en/best-ai-book-generator) | Buyer checklist for complete KDP book pipelines |
| [KDP book generator](https://drafttodone.io/en/kdp-book-generator) | Manuscript, cover and Amazon metadata package |

## Guides (free)

A growing knowledge base on AI publishing, self-publishing and KDP SEO:

- [How to write a book with AI — complete guide](https://drafttodone.io/en/blog/how-to-write-a-book-with-ai-complete-guide)
- [How to self-publish a book on Amazon (step by step)](https://drafttodone.io/en/blog/how-to-self-publish-a-book-on-amazon-step-by-step)
- [How to choose KDP keywords](https://drafttodone.io/en/blog/how-to-choose-kdp-keywords-beginner-guide)
- [Best AI book writing tools, compared](https://drafttodone.io/en/blog/best-ai-book-writing-tools-compared)
- [Pen name & author brand strategy](https://drafttodone.io/en/blog/pen-name-author-brand-strategy)
- [How much can you earn with KDP?](https://drafttodone.io/en/blog/how-much-can-you-earn-with-kdp-royalty-examples)
- [All 25 guides →](https://drafttodone.io/en/blog)

## How DraftToDone compares

- [DraftToDone vs Sudowrite](https://drafttodone.io/en/sudowrite-alternative) — whole publishable product vs AI fiction craft.
- [DraftToDone vs Atticus](https://drafttodone.io/en/atticus-alternative) — generate the book vs format one you wrote.
- [Best AI book generator](https://drafttodone.io/en/best-ai-book-generator) — how to choose a full KDP pipeline, not just a text tool.

## Who it's for

Indie authors, self-publishers and KDP catalog operators who want to ship more
publish-ready books — faster, and without quality or compliance blowups.

## Languages

English, French, Italian and German — fully localized with hreflang:
[EN](https://drafttodone.io) · [FR](https://drafttodone.io/fr) · [IT](https://drafttodone.io/it) · [DE](https://drafttodone.io/de).

---

## Development

This repo is the **marketing site** (static, no backend). The app is a separate codebase.

**Stack:** Next.js 15 (App Router, static export) · Tailwind CSS v4 · lucide-react ·
next/font (Newsreader + Hanken Grotesk) · `next/og` for build-time share images.
Aesthetic: see [`DESIGN.md`](./DESIGN.md).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

**Content** lives in TypeScript (not a CMS):

- `app/home-content.ts` — landing copy (en/fr/it/de) + `APP_URL`; `app/home-view.tsx` — landing UI.
- `app/blog-content.ts` + `app/*-seo-posts.ts` — the blog.
- `app/seo-pages.ts` — solution / tool / comparison pages.

`sitemap.xml`, `robots.txt`, `feed.xml`, `manifest.webmanifest`, `llms.txt`,
`llms-full.txt`, `ai.txt`, `content-index.json`, `answer-engine.json` and OG images
are generated from that data. The SEO
playbook, prompt library and audit live in [`seo/`](./seo).

**i18n:** four locales, URL-based — landing at `/`, `/fr`, `/it`, `/de`; blog at
`/[locale]/blog`; solution pages at `/[locale]/[slug]`.

**Deploy:** push to `main` → `.github/workflows/deploy.yml` builds and publishes
`out/` to GitHub Pages. Custom domain via `public/CNAME` (drafttodone.io).

## Topics

`ai-publishing` · `amazon-kdp` · `self-publishing` · `ai-book-generator` ·
`book-cover-generator` · `kdp-keywords` · `nextjs` · `seo`
