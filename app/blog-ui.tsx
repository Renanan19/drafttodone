import type { CSSProperties } from "react";
import { ArrowRight, BookOpen, Check, Languages } from "lucide-react";
import {
  blogCopy,
  blogIndexPath,
  localeLabels,
  locales,
  SITE_NAME,
  type BlogPost,
  type Locale,
} from "./blog-content";
import {
  commercialSolutionPages,
  editorialPath,
  getEditorialPage,
  solutionPath,
} from "./seo-pages";
import { APP_SIGNUP_URL, homePath } from "./home-content";

// A post may not exist in every locale; missing locales fall back to the blog index.
type LanguagePaths = Partial<Record<Locale, string>>;

function Logo({ locale }: { locale: Locale }) {
  return (
    <a href={homePath(locale)} className="flex items-center gap-2.5" aria-label={`${SITE_NAME} home`}>
      <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-ink">
        <Check className="h-4 w-4 text-mint-soft" strokeWidth={3} />
      </span>
      <span className="font-display text-[19px] font-medium tracking-tight text-ink">
        DraftToDone<span className="text-mint">.io</span>
      </span>
    </a>
  );
}

export function LanguageLinks({
  locale,
  paths,
}: {
  locale: Locale;
  paths?: LanguagePaths;
}) {
  const t = blogCopy[locale];

  return (
    <nav
      aria-label={t.languageLabel}
      className="inline-flex items-center rounded-full border border-line bg-paper p-0.5 text-[12px] font-medium"
    >
      {locales.map((item) => (
        <a
          key={item}
          href={paths?.[item] ?? blogIndexPath(item)}
          aria-current={locale === item ? "page" : undefined}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            locale === item ? "bg-ink text-paper" : "text-muted hover:text-ink"
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

export function BlogHeader({
  locale,
  paths,
}: {
  locale: Locale;
  paths?: LanguagePaths;
}) {
  const t = blogCopy[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Logo locale={locale} />
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageLinks locale={locale} paths={paths} />
          <a
            href={homePath(locale)}
            className="hidden text-sm text-muted transition-colors hover:text-ink md:inline-flex"
          >
            {t.home}
          </a>
          <a
            href={blogIndexPath(locale)}
            className="hidden text-sm text-muted transition-colors hover:text-ink sm:inline-flex"
          >
            {t.blog}
          </a>
          <a
            href={APP_SIGNUP_URL}
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
          >
            {t.appCta}
          </a>
        </div>
      </div>
    </header>
  );
}

export function BlogFooter({ locale }: { locale: Locale }) {
  const t = blogCopy[locale];

  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <nav
          aria-label={t.tools}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:justify-start"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
            {t.tools}
          </span>
          {commercialSolutionPages.map((page) => (
            <a
              key={page.key}
              href={solutionPath(locale, page)}
              className="text-muted transition-colors hover:text-ink"
            >
              {page.translations[locale].eyebrow}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line/70 pt-8 text-sm sm:flex-row">
          <Logo locale={locale} />
          <p className="text-center text-faint sm:text-left">{t.footer}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={blogIndexPath(locale)}
              className="text-muted transition-colors hover:text-ink"
            >
              {t.blog}
            </a>
            <a href={homePath(locale)} className="text-muted transition-colors hover:text-ink">
              {t.home}
            </a>
            <a
              href={editorialPath(locale)}
              className="text-muted transition-colors hover:text-ink"
            >
              {getEditorialPage().translations[locale].eyebrow}
            </a>
            <a
              href="/site-map"
              className="text-muted transition-colors hover:text-ink"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function BlogVisual({
  post,
  label,
  title,
  compact = false,
}: {
  post: BlogPost;
  label: string;
  title: string;
  compact?: boolean;
}) {
  const style = {
    background: `radial-gradient(circle at 20% 15%, ${post.accent.end}88, transparent 32%), linear-gradient(145deg, ${post.accent.start}, ${post.accent.middle} 54%, ${post.accent.end})`,
  } satisfies CSSProperties;

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] border border-line shadow-[0_24px_70px_-34px_rgba(16,24,40,0.42)] ${
        compact ? "min-h-48" : "min-h-[18rem]"
      }`}
      style={style}
    >
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/35 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute bottom-5 left-1/2 h-7 w-44 -translate-x-1/2 rounded-[100%] bg-ink/10 blur-xl"
      />
      <div className="absolute inset-0 flex items-end justify-center px-8 pb-9">
        <div className="relative flex items-end">
          <div className="h-36 w-24 -rotate-6 rounded-[10px] bg-white/45 p-3 shadow-[0_18px_40px_-24px_rgba(16,24,40,0.45)] backdrop-blur-sm">
            <span className="block h-2 w-11 rounded-full bg-ink/35" />
            <span className="mt-3 block h-1.5 w-14 rounded-full bg-ink/20" />
            <span className="mt-1.5 block h-1.5 w-10 rounded-full bg-ink/20" />
          </div>
          <div className="relative z-10 -mx-4 flex h-44 w-32 flex-col justify-between rounded-[12px] bg-paper/85 p-4 shadow-[0_24px_50px_-24px_rgba(16,24,40,0.5)] backdrop-blur-md">
            <BookOpen className="h-5 w-5 text-mint-deep" strokeWidth={1.8} />
            <div>
              <p className="font-display text-lg font-medium leading-tight text-ink">
                {title.split(" ").slice(0, 5).join(" ")}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">
                {label}
              </p>
            </div>
          </div>
          <div className="h-36 w-24 rotate-6 rounded-[10px] bg-white/40 p-3 shadow-[0_18px_40px_-24px_rgba(16,24,40,0.45)] backdrop-blur-sm">
            <span className="block h-2 w-12 rounded-full bg-ink/30" />
            <span className="mt-3 block h-1.5 w-10 rounded-full bg-ink/18" />
            <span className="mt-1.5 block h-1.5 w-14 rounded-full bg-ink/18" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CtaBand({ locale }: { locale: Locale }) {
  const t = blogCopy[locale];

  return (
    <section className="border-t border-line/70 bg-paper-2">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
              <Languages className="h-3.5 w-3.5" />
              {localeLabels[locale]}
            </p>
            <h2 className="font-display text-4xl font-medium tracking-[-0.015em] text-ink sm:text-5xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{t.ctaText}</p>
          </div>
          <a
            href={APP_SIGNUP_URL}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[15px] font-medium text-paper shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0"
          >
            {t.ctaButton}
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </section>
  );
}
