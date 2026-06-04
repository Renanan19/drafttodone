# DraftToDone — Design System

Source of truth for the look & feel. The aesthetic is modeled on **Venice Inc.**
("The Design Company of California"). This file captures *why* the design is the
way it is, so future changes stay coherent.

---

## The Venice Inc. idea (reference)

Venice Inc. is a premium, S-tier product design studio. Their signature is taking
abstract, technical products (AI, B2B SaaS, data) and making them feel **premium,
credible, and desirable** — consumer-grade beauty applied to serious software.

**1. Aesthetic — Premium minimalism, "consumer-grade"**
- Reject utilitarian/austere B2B looks. Import B2C standards of beauty, fluidity, clarity.
- "Tastemakers": clean typography, airy interfaces, strong legibility.
- Motion is integrated, not decorative — interfaces feel alive (Framer-grade).

**2. Philosophy — Design as a strategic engine**
- Structure intuition: get involved at stage 0→1, clarify the idea before pixels.
- Fuse Product + Go-To-Market: the design's job is to build trust and *help close*.
- AI imprint: adapt visual/ergonomic codes to AI-era usage.

**3. Scope — Design engineering end to end**
- Brand identity + design systems, product UX/UI, and front-end (Webflow, Framer,
  React, Next.js) so the live result is pixel-perfect to the vision.

**4. Execution — Lightning fast**
- Complete identities/products shipped in days, without sacrificing detail.

**Visual signals observed on venice.inc:**
- Pure **white** canvas, generous negative space.
- **Editorial serif** headlines + clean grayscale **sans** body. Near-black text.
- Restrained black/white core with **soft pastel gradient pedestals** (a signature
  mint/aqua glow) under floating product shots.
- Small, refined buttons (black primary, ghost secondary).
- Calm, precise, premium. Playful California touches (a weather chip, a parasol icon).

---

## How DraftToDone applies it

**Concept:** "California Light." White, airy, elegant — but the accent is **mint**,
because mint = *done* (the ✓). The name's promise (draft → done) lives in the color.

### Tokens (see `app/globals.css` → `@theme`)
| Token | Value | Use |
|-------|-------|-----|
| `--color-paper` | `#ffffff` | base canvas |
| `--color-paper-2` | `#fafaf7` | alternating section |
| `--color-paper-3` | `#f4f4ef` | icon chips |
| `--color-ink` | `#0b0b0c` | text, buttons |
| `--color-muted` | `#6b6b73` | body copy |
| `--color-faint` | `#9a9aa2` | captions, microcopy |
| `--color-line` | `#ececea` | hairline borders |
| `--color-mint` | `#10b58a` | accent (readable on white) |
| `--color-mint-deep` | `#0a8f6c` | accent text on light |
| `--color-mint-soft` | `#a9f0d6` | glows, pedestals, fills |

### Type
- **Display:** Newsreader (editorial serif, used at medium weight + italic accents).
- **Body:** Hanken Grotesk (clean, legible grotesk). No mono — stay calm.
- Headlines are restrained (not shouty): tight tracking, ~1.05 leading, weight 500.

### Motion
- Scroll-reveal fade-up via IntersectionObserver (`.reveal-up` → `.in`), staggered.
- Hero book-cover fan **spreads on hover** + slow float. This is the "alive" moment.
- Buttons lift 0.5px on hover. Everything eased with `cubic-bezier(.16,1,.3,1)`.
- All motion respects `prefers-reduced-motion`.

### Signature element
- A fan of AI-generated **book covers** on a soft **mint pedestal** = the product,
  shown the Venice way (object floating on a pastel gradient). Mirrors venice.inc's
  app-icon-on-mint hero.

### Rules
- Keep white space generous. When unsure, add space, not elements.
- One accent (mint). Pastels (peach/lilac) only on the book covers for variety.
- Conversion-first: the email form is the visual anchor of the hero.
- Bilingual EN/FR — copy lives in `COPY` in `app/page.tsx`.
