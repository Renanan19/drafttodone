"use client";

import { useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  FileText,
  Image as ImageIcon,
  Layers,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { blogIndexPath, locales, SITE_URL, type Locale } from "./blog-content";
import {
  APP_SIGNUP_URL,
  FOUNDING_SEATS_TOTAL,
  foundingSeatsLeft,
  homePath,
  homeUrl,
  type HomeCopy,
} from "./home-content";
import { LeadCapture } from "./lead-capture";
import { playbookPath } from "./playbook-content";
import { LATEST_CONTENT_UPDATE } from "./answer-engine-content";
import { editorialPath, getEditorialPage } from "./seo-pages";
import { legalFooterLinks } from "./glance-content";
import {
  aggregateOffer,
  itemListNode,
  softwareRef,
  speakableSpec,
  webPageNode,
} from "./structured-data";

/* -------------------------------------------------------------------------- */
/*  Logo                                                                      */
/* -------------------------------------------------------------------------- */
function Logo({ locale }: { locale: Locale }) {
  return (
    <a href={homePath(locale)} className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-ink">
        <Check className="h-4 w-4 text-mint-soft" strokeWidth={3} />
      </span>
      <span className="font-display text-[19px] font-medium tracking-tight text-ink">
        DraftToDone<span className="text-mint">.io</span>
      </span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Language links (URL-based, one indexable landing per locale)              */
/* -------------------------------------------------------------------------- */
function LanguageLinks({ locale }: { locale: Locale }) {
  return (
    <nav className="inline-flex items-center rounded-full border border-line bg-paper p-0.5 text-[12px] font-medium">
      {locales.map((l) => (
        <a
          key={l}
          href={homePath(l)}
          aria-current={locale === l ? "page" : undefined}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            locale === l ? "bg-ink text-paper" : "text-muted hover:text-ink"
          }`}
        >
          {l}
        </a>
      ))}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Primary CTA → the live app                                                */
/* -------------------------------------------------------------------------- */
function OpenAppButton({ label, size = "lg" }: { label: string; size?: "lg" | "md" }) {
  const pad = size === "lg" ? "px-7 py-4 text-base" : "px-6 py-3.5 text-[15px]";
  return (
    <a
      href={APP_SIGNUP_URL}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-ink ${pad} font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0`}
    >
      {label}
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
        strokeWidth={2.25}
      />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature card                                                              */
/* -------------------------------------------------------------------------- */
function FeatureCard({
  index,
  icon: Icon,
  title,
  text,
  delay,
}: {
  index: string;
  icon: LucideIcon;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <article
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal-up group relative rounded-2xl border border-line bg-paper p-7 transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(16,24,40,0.45)]"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper-3 text-ink transition-colors duration-300 group-hover:bg-mint-soft group-hover:text-mint-deep">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="font-display text-sm italic text-faint">{index}</span>
      </div>
      <h3 className="mt-6 font-display text-xl font-medium text-ink">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{text}</p>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero visual — fan of AI-generated book covers on a mint pedestal          */
/* -------------------------------------------------------------------------- */
function BookCover({
  cls,
  title,
  label,
  className = "",
}: {
  cls: string;
  title: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`cover ${cls} relative flex aspect-[5/7] w-28 flex-col justify-between overflow-hidden rounded-[10px] p-3.5 transition-all duration-500 ease-out sm:w-36 ${className}`}
    >
      <div className="flex justify-end">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-white/55 text-ink/70 backdrop-blur-sm">
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
      </div>
      <div>
        <p className="font-display text-base font-medium leading-tight text-ink/85 sm:text-lg">
          {title}
        </p>
        <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-ink/45">{label}</p>
      </div>
    </div>
  );
}

function ProductDemo({ demo }: { demo: HomeCopy["demo"] }) {
  const artifactIcons: LucideIcon[] = [FileText, ImageIcon, Search, ShieldCheck];
  const coverTitle = demo.outputTitle.split(" ").slice(-2).join(" ");

  return (
    <div className="reveal-load relative mx-auto mt-14 max-w-full text-left sm:max-w-5xl" style={{ animationDelay: "420ms" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[min(820px,94vw)] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(126,224,203,0.45),rgba(191,233,255,0.2),transparent)] blur-2xl"
      />

      <div className="relative grid min-w-0 gap-4 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="min-w-0 rounded-[22px] border border-line bg-paper p-5 shadow-[0_24px_70px_-42px_rgba(16,24,40,0.45)] sm:p-6">
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
            <Layers className="h-4 w-4" strokeWidth={2} />
            {demo.inputLabel}
          </div>
          <p className="mt-5 text-balance font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">
            {demo.input}
          </p>
          <div className="mt-6 grid gap-2.5">
            {demo.inputFacts.map((fact) => (
              <p key={fact} className="flex items-center gap-2.5 text-sm text-muted">
                <Check className="h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                {fact}
              </p>
            ))}
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-[22px] border border-ink bg-ink text-paper shadow-[0_26px_80px_-42px_rgba(16,24,40,0.65)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[12px] text-paper/55">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-peach" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint-soft" />
              <span className="h-2.5 w-2.5 rounded-full bg-aqua" />
            </div>
            <span>{demo.outputLabel}</span>
          </div>

          <div className="grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
            <div className="flex justify-center sm:block">
              <BookCover cls="cover-mint" title={coverTitle} label="KDP" className="w-32 sm:w-36" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-3xl font-medium leading-tight text-paper">
                {demo.outputTitle}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/68">{demo.outputSubtitle}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {demo.artifacts.map((artifact, index) => {
                  const Icon = artifactIcons[index] ?? Check;
                  return (
                    <div
                      key={artifact}
                      className="flex min-h-16 items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3"
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-mint-soft" strokeWidth={2.2} />
                      <span className="text-sm leading-snug text-paper/78">{artifact}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 grid min-w-0 gap-3 sm:grid-cols-3">
        {demo.metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-line bg-paper/90 px-5 py-4 text-center shadow-sm backdrop-blur">
            <p className="font-display text-3xl font-medium leading-none text-ink">{metric.value}</p>
            <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.16em] text-faint">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProofSection({ proof }: { proof: HomeCopy["proof"] }) {
  return (
    <section className="relative border-t border-line/70 bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p data-reveal className="reveal-up mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-mint-deep">
            {proof.eyebrow}
          </p>
          <h2
            data-reveal
            style={{ transitionDelay: "60ms" }}
            className="reveal-up text-balance font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl"
          >
            {proof.h2}
          </h2>
          <p
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="reveal-up mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted"
          >
            {proof.sub}
          </p>
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "160ms" }}
          className="reveal-up rounded-[24px] border border-line bg-paper p-7 shadow-[0_24px_70px_-42px_rgba(16,24,40,0.48)] sm:p-8"
        >
          <p className="text-balance font-display text-2xl font-medium leading-snug text-ink-soft">
            “{proof.quote}”
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-faint">
            {proof.byline}
          </p>
          <div className="mt-7 grid gap-3">
            {proof.points.map((point) => (
              <p key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={2.4} />
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection({ comparison }: { comparison: HomeCopy["comparison"] }) {
  return (
    <section className="relative border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal className="reveal-up mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-mint-deep">
            {comparison.eyebrow}
          </p>
          <h2
            data-reveal
            style={{ transitionDelay: "60ms" }}
            className="reveal-up text-balance font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl"
          >
            {comparison.h2}
          </h2>
          <p
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="reveal-up mx-auto mt-5 max-w-xl text-balance text-lg text-muted"
          >
            {comparison.sub}
          </p>
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "160ms" }}
          className="reveal-up mx-auto mt-12 max-w-4xl divide-y divide-line rounded-[22px] border border-line bg-paper shadow-[0_24px_70px_-44px_rgba(16,24,40,0.42)]"
        >
          {comparison.rows.map((row) => (
            <div key={row.label} className="grid gap-4 p-5 sm:grid-cols-[0.7fr_1fr_1fr] sm:items-center sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">{row.label}</p>
              <p className="text-[15px] leading-relaxed text-muted">{row.manual}</p>
              <p className="flex gap-2.5 rounded-xl bg-mint-soft/45 p-4 text-[15px] font-medium leading-relaxed text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-deep" strokeWidth={3} />
                {row.drafttodone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShareFooter({ locale, share }: { locale: Locale; share: HomeCopy["share"] }) {
  const shareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(share.text)}&url=${encodeURIComponent(homeUrl(locale))}`;

  return (
    <section className="border-t border-line/70 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-balance font-display text-2xl font-medium leading-tight sm:text-3xl">
          {share.line}
        </p>
        <a
          href={shareHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-mint-soft"
        >
          <Share2 className="h-4 w-4" strokeWidth={2.2} />
          {share.cta}
        </a>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Home view (locale-driven)                                                 */
/* -------------------------------------------------------------------------- */
export function HomeView({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  const t = copy;

  const canonicalUrl = homeUrl(locale);

  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      inLanguage: locale,
      speakable: speakableSpec,
      mainEntity: t.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    webPageNode({
      url: canonicalUrl,
      name: t.meta.title,
      description: t.meta.description,
      locale,
      dateModified: LATEST_CONTENT_UPDATE,
      image: { url: `${SITE_URL}/opengraph-image`, caption: t.hero.caption },
      primaryEntity: softwareRef,
      extra: {
        // The hero and the comparison table answer "what is it / who is it for /
        // how is it different" before any scroll.
        abstract: `${t.hero.h1main} ${t.hero.h1accent} — ${t.hero.sub}`,
        significantLink: [APP_SIGNUP_URL, `${SITE_URL}${blogIndexPath(locale)}`],
      },
    }),
    // The free tools, as an enumerable list rather than three anchors.
    itemListNode({
      id: `${canonicalUrl}#tools`,
      name: t.tools.h2,
      description: t.tools.sub,
      locale,
      items: t.tools.items.map((item) => ({
        name: item.title,
        url: `${SITE_URL}${item.href}`,
        description: item.text,
      })),
    }),
    // Plans as real Offers: price, currency, validity and what one credit buys.
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "@id": `${canonicalUrl}#plans`,
      name: t.pricing.h2,
      inLanguage: locale,
      itemListElement: aggregateOffer().offers,
    },
  ];

  /* scroll reveal */
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 2200);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  const featureIcons: LucideIcon[] = [BookOpen, ImageIcon, Settings];
  const toolIcons: LucideIcon[] = [Calculator, Wand2, Settings];
  const blogPath = `/${locale}/blog`;

  return (
    <div lang={locale} className="relative min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Logo locale={locale} />
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:block">
              <LanguageLinks locale={locale} />
            </div>
            <a
              href={blogPath}
              className="hidden text-sm text-muted transition-colors hover:text-ink sm:inline-flex"
            >
              {t.nav.blog}
            </a>
            <a
              href="#pricing"
              className="hidden text-sm text-muted transition-colors hover:text-ink sm:inline-flex"
            >
              {t.nav.pricing}
            </a>
            <a
              href={APP_SIGNUP_URL}
              className="hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft sm:inline-flex"
            >
              {t.nav.openApp}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(169,240,214,0.28),transparent)]"
          />
          <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-16 text-center sm:px-6 sm:pt-24">
            <p className="reveal-load mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {t.hero.eyebrow}
            </p>

            <h1
              style={{ animationDelay: "80ms" }}
              className="reveal-load mx-auto max-w-[20rem] text-balance font-display text-[2.05rem] font-medium leading-[1.05] tracking-[-0.005em] text-ink sm:max-w-4xl sm:text-6xl sm:tracking-[-0.02em]"
            >
              {t.hero.h1main} <em className="italic text-mint">{t.hero.h1accent}</em>
            </h1>

            <p
              style={{ animationDelay: "160ms" }}
              className="reveal-load mx-auto mt-6 max-w-[20rem] text-balance text-base leading-relaxed text-muted sm:max-w-xl sm:text-lg"
            >
              {t.hero.sub} <span className="font-medium text-ink">{t.hero.subHighlight}</span>
            </p>

            <div
              style={{ animationDelay: "240ms" }}
              className="reveal-load mx-auto mt-9 flex max-w-lg flex-col items-center gap-3"
            >
              <OpenAppButton label={t.hero.openApp} size="lg" />
              <p className="text-sm text-faint">{t.hero.microcopy}</p>
            </div>

            <div
              style={{ animationDelay: "320ms" }}
              className="reveal-load mt-9 flex flex-wrap items-center justify-center gap-2"
            >
              {t.hero.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-2 px-3 py-1 text-[12px] font-medium text-muted"
                >
                  <Check className="h-3 w-3 text-mint" strokeWidth={3} />
                  {c}
                </span>
              ))}
            </div>

            <ProductDemo demo={t.demo} />
          </div>
        </section>

        {/* Origin story */}
        <section className="relative border-t border-line/70 bg-paper-2">
          <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
            <p data-reveal className="reveal-up mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-mint-deep">
              {t.origin.eyebrow}
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: "60ms" }}
              className="reveal-up font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl"
            >
              {t.origin.h2}
            </h2>

            <div
              data-reveal
              style={{ transitionDelay: "120ms" }}
              className="reveal-up relative mt-9 border-l-2 border-mint/50 pl-6 sm:pl-8"
            >
              <span
                aria-hidden
                className="absolute -left-2.5 -top-9 select-none font-display text-7xl leading-none text-mint/25"
              >
                &ldquo;
              </span>
              <p className="text-balance text-xl leading-relaxed text-ink-soft sm:text-2xl">
                {t.origin.pre} <span className="font-semibold text-ink">{t.origin.money}</span>{" "}
                {t.origin.mid} <span className="text-mint-deep">{t.origin.ban}</span> {t.origin.post}{" "}
                <span className="font-semibold text-ink">{t.origin.mrr}</span>
              </p>
              <div className="mt-7 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-mint-soft">
                  <Sparkles className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-faint">
                  {t.origin.sign}
                </span>
              </div>
            </div>
          </div>
        </section>

        <ProofSection proof={t.proof} />

        {/* Features */}
        <section id="features" className="relative border-t border-line/70">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p data-reveal className="reveal-up mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-mint-deep">
                {t.features.eyebrow}
              </p>
              <h2
                data-reveal
                style={{ transitionDelay: "60ms" }}
                className="reveal-up text-balance font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl"
              >
                {t.features.h2}
              </h2>
              <p
                data-reveal
                style={{ transitionDelay: "120ms" }}
                className="reveal-up mx-auto mt-5 max-w-xl text-balance text-lg text-muted"
              >
                {t.features.sub}
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {t.features.items.map((f, i) => (
                <FeatureCard
                  key={f.title}
                  index={`0${i + 1}`}
                  icon={featureIcons[i]}
                  title={f.title}
                  text={f.text}
                  delay={i * 90}
                />
              ))}
            </div>
          </div>
        </section>

        <ComparisonSection comparison={t.comparison} />

        {/* Tools & guides (internal links to money pages) */}
        <section id="tools" className="relative border-t border-line/70 bg-paper-2">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p data-reveal className="reveal-up mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-mint-deep">
                {t.tools.eyebrow}
              </p>
              <h2
                data-reveal
                style={{ transitionDelay: "60ms" }}
                className="reveal-up text-balance font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl"
              >
                {t.tools.h2}
              </h2>
              <p
                data-reveal
                style={{ transitionDelay: "120ms" }}
                className="reveal-up mx-auto mt-5 max-w-xl text-balance text-lg text-muted"
              >
                {t.tools.sub}
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {t.tools.items.map((item, i) => {
                const Icon = toolIcons[i] ?? Wand2;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    data-reveal
                    style={{ transitionDelay: `${i * 90}ms` }}
                    className="reveal-up group relative rounded-2xl border border-line bg-paper p-7 transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(16,24,40,0.45)]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper-3 text-ink transition-colors duration-300 group-hover:bg-mint-soft group-hover:text-mint-deep">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-medium text-ink">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors group-hover:text-ink">
                      {t.tools.explore}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={2.25}
                      />
                    </span>
                  </a>
                );
              })}
            </div>

            <a
              href={blogPath}
              data-reveal
              className="reveal-up group mt-5 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-paper p-7 transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(16,24,40,0.45)] sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-paper-3 text-ink transition-colors duration-300 group-hover:bg-mint-soft group-hover:text-mint-deep">
                  <BookOpen className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">{t.tools.blogTitle}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.tools.blogText}</p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-line bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors group-hover:border-ink/25">
                {t.tools.blogCta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </span>
            </a>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative border-t border-line/70">
          <div className="mx-auto max-w-5xl px-5 py-24 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p data-reveal className="reveal-up mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-mint-deep">
                {t.pricing.eyebrow}
              </p>
              <h2
                data-reveal
                style={{ transitionDelay: "60ms" }}
                className="reveal-up text-balance font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl"
              >
                {t.pricing.h2}
              </h2>
              <p
                data-reveal
                style={{ transitionDelay: "120ms" }}
                className="reveal-up mx-auto mt-5 max-w-xl text-balance text-lg text-muted"
              >
                {t.pricing.sub}
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
              {t.pricing.plans.map((p, i) => (
                <article
                  key={p.name}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className={`reveal-up relative flex flex-col rounded-2xl border p-7 ${
                    p.highlight
                      ? "border-mint/40 bg-gradient-to-b from-mint-soft/40 to-paper shadow-[0_24px_60px_-30px_rgba(16,24,40,0.45)]"
                      : "border-line bg-paper"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute right-5 top-5 rounded-full bg-mint-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-mint-deep">
                      {t.pricing.best}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-medium text-ink">{p.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="font-display text-[40px] font-medium leading-none text-ink">
                      {p.price}
                    </span>
                    <span className="text-[14px] text-muted">{p.period}</span>
                  </div>
                  <p className="mt-2 text-[15px] text-ink-soft">{p.credits}</p>
                  <p className="mt-0.5 text-[13px] text-faint">{p.perBook}</p>

                  <ul className="mt-6 grid gap-2.5">
                    {t.pricing.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2.5 text-[14px] text-muted">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-soft text-mint-deep">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={APP_SIGNUP_URL}
                    className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[15px] font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 ${
                      p.highlight
                        ? "bg-ink text-paper hover:bg-ink-soft"
                        : "border border-line bg-paper text-ink hover:border-ink/25"
                    }`}
                  >
                    {t.pricing.cta}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-faint">{t.pricing.note}</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative border-t border-line/70 bg-paper-2">
          <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
            <h2
              data-reveal
              className="reveal-up text-balance text-center font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl"
            >
              {t.faqHeading}
            </h2>
            <div
              data-reveal
              style={{ transitionDelay: "80ms" }}
              className="reveal-up mt-10 divide-y divide-line rounded-[18px] border border-line bg-paper"
            >
              {t.faq.map((f) => (
                <div key={f.q} className="p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-ink">{f.q}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founding cohort — the capped launch offer, and the email capture */}
        <section id="founding" className="relative border-t border-line/70 bg-paper-2">
          <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
            <p
              data-reveal
              className="reveal-up mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-mint-deep"
            >
              {t.founding.eyebrow}
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: "60ms" }}
              className="reveal-up text-balance font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl"
            >
              {t.founding.h2}
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: "120ms" }}
              className="reveal-up mt-5 text-lg leading-relaxed text-muted"
            >
              {t.founding.sub}
            </p>

            <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-mint/50 bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-mint-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {t.founding.seats
                .replace("{left}", String(foundingSeatsLeft()))
                .replace("{total}", String(FOUNDING_SEATS_TOTAL))}
            </p>

            <ul className="mt-7 grid gap-3">
              {t.founding.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-soft text-mint-deep">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <LeadCapture locale={locale} source="founding-cohort" />
            </div>

            <p className="mt-8 text-[15px] leading-relaxed text-muted">
              {t.founding.playbookLine}{" "}
              <a
                href={playbookPath(locale)}
                className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
              >
                {t.founding.playbookCta}
              </a>
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative border-t border-line/70">
          <div className="mx-auto max-w-5xl px-5 py-24 sm:px-6">
            <div
              data-reveal
              className="reveal-up relative overflow-hidden rounded-[28px] border border-line bg-gradient-to-b from-mint-soft/45 to-paper-2 px-6 py-16 text-center sm:px-12"
            >
              <h2 className="text-balance font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl">
                {t.cta.h2}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-balance text-lg text-muted">{t.cta.sub}</p>
              <div className="mt-9 flex flex-col items-center gap-3">
                <OpenAppButton label={t.hero.openApp} size="lg" />
                <p className="text-sm text-faint">{t.hero.microcopy}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ShareFooter locale={locale} share={t.share} />

      {/* Footer */}
      <footer className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm sm:flex-row sm:px-6">
          <Logo locale={locale} />
          <p className="text-faint">{t.footer}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={blogPath} className="text-muted transition-colors hover:text-ink">
              {t.nav.blog}
            </a>
            <a
              href={editorialPath(locale)}
              className="text-muted transition-colors hover:text-ink"
            >
              {getEditorialPage().translations[locale].eyebrow}
            </a>
            <a href="/site-map" className="text-muted transition-colors hover:text-ink">
              Sitemap
            </a>
            {legalFooterLinks(locale).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://useneedle.net/directory/drafttodone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-ink"
            >
              Needle Directory
            </a>
            <a
              href="https://www.uneed.best/tool/drafttodone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-ink"
            >
              Uneed
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
