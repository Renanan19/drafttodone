"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  Check,
  Image as ImageIcon,
  Loader2,
  Lock,
  Settings,
  Sparkles,
  Wand2,
  X,
  type LucideIcon,
} from "lucide-react";
import { locales, type Locale } from "./blog-content";
import { APP_URL, homePath, type HomeCopy } from "./home-content";

/* -------------------------------------------------------------------------- */
/*  Web3Forms — paste your access key (free at https://web3forms.com).        */
/*  Public by design: the key only allows submitting to YOUR form.            */
/*  Until set, the form runs in demo mode (shows success, sends nothing).     */
/* -------------------------------------------------------------------------- */
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_ACCESS_KEY_HERE";

type FormCopy = HomeCopy["form"];

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
/*  Waitlist form (hero + bottom CTA)                                         */
/* -------------------------------------------------------------------------- */
type Status = "idle" | "loading" | "done" | "error";

function WaitlistForm({
  t,
  onSuccess,
  id,
}: {
  t: FormCopy;
  onSuccess: (email: string) => void;
  id?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value || status === "loading") return;
    setStatus("loading");

    try {
      if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        // Demo mode — no key configured yet.
        await new Promise((r) => setTimeout(r, 650));
      } else {
        // FormData (multipart) is a CORS-safelisted content type → no preflight,
        // so Web3Forms' ACAO:* applies and the browser submission succeeds.
        const formData = new FormData();
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        formData.append("email", value);
        formData.append("subject", "New DraftToDone waitlist signup");
        formData.append("from_name", "DraftToDone Waitlist");
        formData.append("botcheck", "");
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (!data.success) throw new Error(data.message ?? "Submission failed");
      }

      onSuccess(value);
      setEmail("");
      setStatus("done");
      window.setTimeout(() => setStatus("idle"), 2600);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 4500);
    }
  }

  return (
    <div>
      <form
        id={id}
        onSubmit={handleSubmit}
        className="flex w-full scroll-mt-28 flex-col gap-2.5 sm:flex-row"
      >
        {/* honeypot */}
        <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden className="hidden" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
          className="w-full flex-1 rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink outline-none transition-all placeholder:text-faint focus:border-ink/25 focus:ring-4 focus:ring-mint/15"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0 disabled:cursor-wait disabled:opacity-80"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "done" && <Check className="h-4 w-4" strokeWidth={2.5} />}
          {status === "loading"
            ? t.loading
            : status === "done"
              ? t.done
              : status === "error"
                ? t.retry
                : t.cta}
          {(status === "idle" || status === "error") && (
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          )}
        </button>
      </form>
      {status === "error" && <p className="mt-2 text-sm text-red-500">{t.error}</p>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Toast                                                                     */
/* -------------------------------------------------------------------------- */
function Toast({
  show,
  email,
  t,
  onClose,
}: {
  show: boolean;
  email: string;
  t: HomeCopy["toast"];
  onClose: () => void;
}) {
  return (
    <div
      aria-live="polite"
      role="status"
      className={`pointer-events-none fixed right-4 top-4 z-[120] transition-all duration-500 sm:right-6 sm:top-6 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
      }`}
    >
      <div className="pointer-events-auto flex max-w-[22rem] items-start gap-3 rounded-2xl border border-line bg-paper px-4 py-3.5 shadow-[0_24px_70px_-24px_rgba(16,24,40,0.45)]">
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint-soft text-mint-deep">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">{t.title}</p>
          <p className="mt-0.5 text-[13px] text-muted">
            {email ? (
              <>
                {t.withEmail} <span className="break-all font-medium text-ink">{email}</span>
              </>
            ) : (
              t.noEmail
            )}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label={t.dismiss}
          className="shrink-0 text-faint transition-colors hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
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

function BookFan({ caption }: { caption: string }) {
  return (
    <div className="reveal-load relative mt-16" style={{ animationDelay: "420ms" }}>
      {/* pedestal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[min(720px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(126,224,203,0.55),rgba(191,233,255,0.25),transparent)] blur-2xl"
      />
      {/* ground shadow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-2 left-1/2 h-7 w-64 -translate-x-1/2 rounded-[100%] bg-ink/10 blur-xl"
      />

      <div className="float-slow group relative flex items-end justify-center">
        <BookCover
          cls="cover-peach"
          title="Morning Light"
          label="A Novel"
          className="z-10 -mr-7 -rotate-[9deg] translate-y-3 group-hover:-translate-x-5 group-hover:-rotate-[15deg]"
        />
        <BookCover
          cls="cover-mint"
          title="The Quiet Coast"
          label="Fiction"
          className="z-20 scale-110 group-hover:-translate-y-2"
        />
        <BookCover
          cls="cover-lilac"
          title="After the Rain"
          label="Stories"
          className="z-10 -ml-7 rotate-[9deg] translate-y-3 group-hover:translate-x-5 group-hover:rotate-[15deg]"
        />
      </div>

      <p className="relative mt-10 text-center text-sm text-muted">{caption}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Home view (locale-driven)                                                 */
/* -------------------------------------------------------------------------- */
export function HomeView({ copy, locale }: { copy: HomeCopy; locale: Locale }) {
  const [toast, setToast] = useState({ show: false, email: "" });
  const t = copy;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  /* keep the document language in sync with the route locale */
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

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

  function handleSuccess(email: string) {
    setToast({ show: true, email });
    window.setTimeout(() => setToast((s) => ({ ...s, show: false })), 4200);
  }

  const closeToast = () => setToast((s) => ({ ...s, show: false }));

  const featureIcons: LucideIcon[] = [BookOpen, ImageIcon, Settings];
  const toolIcons: LucideIcon[] = [Calculator, Wand2, Settings];
  const blogPath = `/${locale}/blog`;

  return (
    <div lang={locale} className="relative min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Toast show={toast.show} email={toast.email} t={t.toast} onClose={closeToast} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Logo locale={locale} />
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageLinks locale={locale} />
            <a
              href={blogPath}
              className="hidden text-sm text-muted transition-colors hover:text-ink sm:inline-flex"
            >
              {t.nav.blog}
            </a>
            <a
              href="#"
              className="group hidden items-center gap-1 text-sm text-muted transition-colors hover:text-ink sm:inline-flex"
            >
              {t.nav.followX}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pricing"
              className="hidden text-sm text-muted transition-colors hover:text-ink sm:inline-flex"
            >
              {t.nav.pricing}
            </a>
            <a
              href={APP_URL}
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
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
          <div className="relative mx-auto max-w-3xl px-5 pb-8 pt-16 text-center sm:px-6 sm:pt-24">
            <p className="reveal-load mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {t.hero.eyebrow}
            </p>

            <h1
              style={{ animationDelay: "80ms" }}
              className="reveal-load text-balance font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl"
            >
              {t.hero.h1main} <em className="italic text-mint">{t.hero.h1accent}</em>
            </h1>

            <p
              style={{ animationDelay: "160ms" }}
              className="reveal-load mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
            >
              {t.hero.sub} <span className="font-medium text-ink">{t.hero.subHighlight}</span>
            </p>

            <div style={{ animationDelay: "240ms" }} className="reveal-load mx-auto mt-9 max-w-lg">
              <WaitlistForm t={t.form} onSuccess={handleSuccess} id="waitlist" />
              <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-faint">
                <Lock className="h-3.5 w-3.5" />
                {t.hero.microcopy}
              </p>
              <div className="mt-5 flex items-center justify-center">
                <a
                  href={APP_URL}
                  className="group inline-flex items-center gap-2 rounded-xl border border-line bg-paper px-5 py-3 text-[15px] font-medium text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/25"
                >
                  {t.hero.openApp}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                  />
                </a>
              </div>
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

            <BookFan caption={t.hero.caption} />
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
                    href={APP_URL}
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
              <div className="mx-auto mt-9 max-w-lg">
                <WaitlistForm t={t.form} onSuccess={handleSuccess} />
                <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-faint">
                  <Lock className="h-3.5 w-3.5" />
                  {t.hero.microcopy}
                </p>
                <div className="mt-5 flex items-center justify-center">
                  <a
                    href={APP_URL}
                    className="group inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft"
                  >
                    {t.hero.openApp}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm sm:flex-row sm:px-6">
          <Logo locale={locale} />
          <p className="text-faint">{t.footer}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={blogPath} className="text-muted transition-colors hover:text-ink">
              {t.nav.blog}
            </a>
            <a href="/site-map" className="text-muted transition-colors hover:text-ink">
              Sitemap
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
            >
              {t.nav.followX}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
