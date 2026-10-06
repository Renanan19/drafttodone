import { blogCopy, type Locale } from "./blog-content";
import { homeCopy, homePath } from "./home-content";
import { commercialSolutionPages, solutionPath } from "./seo-pages";

// The pages where a visitor becomes a customer, in the shared footer so every
// page on the site links to them. Kept to five on purpose: pricing, the main
// product, the KDP-operator use case, the free tool and the comparison page.
// The other tools stay reachable from the home #tools grid and each tool page.
const FOOTER_MONEY_KEYS = [
  "ai-book-generator",
  "kdp-interior-formatter",
  "kdp-royalty-calculator",
  "sudowrite-alternative",
] as const;

export function footerMoneyLinks(locale: Locale) {
  const pages = FOOTER_MONEY_KEYS.map((key) => {
    const page = commercialSolutionPages.find((item) => item.key === key);
    if (!page) throw new Error(`footer money page missing: ${key}`);
    return { href: solutionPath(locale, page), label: page.translations[locale].eyebrow };
  });
  return [{ href: `${homePath(locale)}#pricing`, label: homeCopy[locale].nav.pricing }, ...pages];
}

export function FooterMoneyNav({ locale }: { locale: Locale }) {
  const label = blogCopy[locale].tools;
  return (
    <nav
      aria-label={label}
      className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:justify-start"
    >
      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
        {label}
      </span>
      {footerMoneyLinks(locale).map((link) => (
        <a key={link.href} href={link.href} className="text-muted transition-colors hover:text-ink">
          {link.label}
        </a>
      ))}
    </nav>
  );
}
