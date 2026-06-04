"use client";

import { useState } from "react";
import {
  BookOpen,
  Image as ImageIcon,
  Settings,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Mail,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Logo                                                                      */
/* -------------------------------------------------------------------------- */
function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-signal to-violet text-ink shadow-[0_6px_20px_-6px_rgba(94,139,255,0.85)]">
        <BookOpen className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <span className="font-display text-lg tracking-tight text-paper">
        DraftToCover<span className="text-signal">.io</span>
      </span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Waitlist form (reused in hero + bottom CTA)                               */
/* -------------------------------------------------------------------------- */
function WaitlistForm({ onSuccess }: { onSuccess: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    onSuccess(value);
    setEmail("");
    setDone(true);
    window.setTimeout(() => setDone(false), 2600);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="group flex w-full flex-col gap-2.5 rounded-2xl border border-line bg-surface/50 p-2 backdrop-blur-sm transition-colors focus-within:border-signal/50 sm:flex-row sm:items-center"
    >
      <div className="flex flex-1 items-center gap-2.5 px-3">
        <Mail className="h-4 w-4 shrink-0 text-faint" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className="w-full bg-transparent py-3 text-[15px] text-paper outline-none placeholder:text-faint"
        />
      </div>
      <button
        type="submit"
        className="glow-btn inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3 text-[15px] font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
      >
        {done ? (
          <>
            <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
            Added
          </>
        ) : (
          <>
            Join the Waitlist
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </>
        )}
      </button>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*  Toast                                                                     */
/* -------------------------------------------------------------------------- */
function Toast({
  show,
  email,
  onClose,
}: {
  show: boolean;
  email: string;
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
      <div className="pointer-events-auto flex max-w-[22rem] items-start gap-3 rounded-2xl border border-signal/30 bg-surface/90 px-4 py-3.5 shadow-[0_24px_70px_-20px_rgba(94,139,255,0.7)] backdrop-blur-xl">
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-signal/15 text-signal">
          <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-paper">Thanks for subscribing!</p>
          <p className="mt-0.5 text-[13px] text-muted">
            {email ? (
              <>
                You&apos;re on the list —{" "}
                <span className="break-all text-signal-bright">{email}</span>
              </>
            ) : (
              "You're on the early access list."
            )}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Dismiss notification"
          className="shrink-0 text-faint transition-colors hover:text-paper"
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
  children,
}: {
  index: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-signal/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-ink/60 text-signal transition-colors duration-300 group-hover:border-signal/40">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="font-mono text-xs tracking-widest text-faint">{index}</span>
      </div>
      <h3 className="mt-6 font-display text-xl text-paper">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{children}</p>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */
export default function Home() {
  const [toast, setToast] = useState({ show: false, email: "" });

  function handleSuccess(email: string) {
    setToast({ show: true, email });
    window.setTimeout(() => setToast((t) => ({ ...t, show: false })), 4200);
  }

  const closeToast = () => setToast((t) => ({ ...t, show: false }));

  const chips = ["Manuscript", "Front cover", "Back cover", "Verified pen name"];

  return (
    <div className="relative min-h-screen bg-ink">
      {/* film grain */}
      <div
        aria-hidden
        className="grain pointer-events-none fixed inset-0 z-[110] opacity-[0.04] mix-blend-soft-light"
      />

      <Toast show={toast.show} email={toast.email} onClose={closeToast} />

      {/* ---------------------------------------------------------------- */}
      {/* Header                                                           */}
      {/* ---------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <Logo />
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-paper"
          >
            <span className="hidden sm:inline">Follow the journey on</span>
            <span className="font-semibold text-paper">X</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      <main>
        {/* -------------------------------------------------------------- */}
        {/* Hero                                                           */}
        {/* -------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden">
          {/* atmosphere */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-14%] h-[520px] w-[min(900px,95vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(94,139,255,0.28),transparent)] blur-[30px]"
          />
          <div
            aria-hidden
            className="float-slow pointer-events-none absolute right-[6%] top-[22%] h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(154,123,255,0.22),transparent)] blur-[20px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent)]"
          >
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:56px_56px]" />
          </div>

          <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
            <p className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-signal-bright backdrop-blur-sm">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" />
              Now in private beta
            </p>

            <h1 className="reveal text-balance font-display text-5xl leading-[1.04] tracking-tight text-paper [animation-delay:80ms] sm:text-6xl md:text-7xl">
              The Complete AI
              <br className="hidden sm:block" /> Publishing{" "}
              <span className="glow-text italic text-signal">Machine.</span>
            </h1>

            <p className="reveal mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl">
              Don&apos;t just write a book. Generate the entire product. From front cover to back
              cover, manuscript, and optimized title. Build your publishing empire with{" "}
              <span className="font-medium text-paper">6 ready-to-publish books a week.</span>
            </p>

            <div className="reveal mx-auto mt-9 max-w-xl [animation-delay:240ms]">
              <WaitlistForm onSuccess={handleSuccess} />
              <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-faint">
                <Lock className="h-3.5 w-3.5" />
                Limited spots for early beta access.
              </p>
            </div>

            <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-2 [animation-delay:320ms]">
              {chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/30 px-3 py-1 font-mono text-[11px] tracking-wide text-muted"
                >
                  <CheckCircle2 className="h-3 w-3 text-signal" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Origin story                                                   */}
        {/* -------------------------------------------------------------- */}
        <section className="relative border-t border-line/50">
          <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-signal/80">
              The origin story
            </p>
            <h2 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
              Why I&apos;m building this.
            </h2>

            <div className="relative mt-9 border-l-2 border-signal/40 pl-6 sm:pl-8">
              <span
                aria-hidden
                className="absolute -left-3 -top-8 select-none font-display text-7xl leading-none text-signal/15"
              >
                &ldquo;
              </span>
              <p className="text-balance text-lg leading-relaxed text-muted sm:text-xl">
                I used to make <span className="font-semibold text-paper">€400/month</span> on
                Amazon KDP until a bad pun for a pen name got me{" "}
                <span className="text-signal-bright">permanently banned overnight.</span> Now,
                I&apos;m taking the private algorithm I used to automate my entire publishing
                process and turning it into a SaaS. Follow my journey to{" "}
                <span className="font-semibold text-paper">recover my lost MRR.</span>
              </p>
              <div className="mt-7 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-signal to-violet text-ink">
                  <Sparkles className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-faint">
                  Building in public
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Features                                                       */}
        {/* -------------------------------------------------------------- */}
        <section id="features" className="relative border-t border-line/50">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-signal/80">
                The engine
              </p>
              <h2 className="text-balance font-display text-4xl tracking-tight text-paper sm:text-5xl">
                From blank page to published.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-muted">
                Three systems. One pipeline. Every asset a marketplace demands — generated,
                formatted, and ready to upload.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <FeatureCard index="01" icon={BookOpen} title="Full Manuscript Generation">
                The AI determines the ideal length and writes the entire book autonomously based on
                your niche.
              </FeatureCard>
              <FeatureCard index="02" icon={ImageIcon} title="Complete Cover Design">
                Generates the front cover, spine, and back cover layout with AI imagery, ready for
                print.
              </FeatureCard>
              <FeatureCard index="03" icon={Settings} title="Optimized Metadata">
                Generates SEO-optimized titles, descriptions, and verified pen names to avoid
                copyright strikes.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Bottom CTA                                                     */}
        {/* -------------------------------------------------------------- */}
        <section className="relative border-t border-line/50">
          <div className="mx-auto max-w-5xl px-5 py-24 sm:px-6">
            <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-surface/40 px-6 py-16 text-center sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-72 w-[min(700px,90%)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(94,139,255,0.25),transparent)] blur-[20px]"
              />
              <div className="relative">
                <h2 className="text-balance font-display text-4xl tracking-tight text-paper sm:text-5xl">
                  Ready to scale your publishing business?
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-balance text-lg text-muted">
                  Join the founders building their catalog on autopilot. Early access opens soon.
                </p>
                <div className="mx-auto mt-9 max-w-xl">
                  <WaitlistForm onSuccess={handleSuccess} />
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-faint">
                    <Lock className="h-3.5 w-3.5" />
                    Limited spots for early beta access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------------- */}
      {/* Footer                                                           */}
      {/* ---------------------------------------------------------------- */}
      <footer className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm sm:flex-row sm:px-6">
          <Logo />
          <p className="text-faint">© 2026 DraftToCover.io. Built in public.</p>
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-paper"
          >
            Follow the journey on <span className="font-semibold text-paper">X</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
