import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, SITE_NAME, SITE_URL, type Locale } from "@/app/blog-content";
import { getHomeAlternates, homeCopy, homePath, homeUrl } from "@/app/home-content";
import { HomeView } from "@/app/home-view";
import { seoDescription, seoTitle } from "@/app/seo-metadata";

export const dynamicParams = false;

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  it: "it_IT",
  de: "de_DE",
};

// English lives at `/` (app/page.tsx). Only fr/it/de get a `/[locale]` landing.
export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

type LocaleHomeProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LocaleHomeProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = homeCopy[locale];
  const metadataTitle = seoTitle(copy.meta.title);
  const metadataDescription = seoDescription(copy.meta.description);

  return {
    metadataBase: new URL(SITE_URL),
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: homePath(locale),
      languages: getHomeAlternates(),
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: homeUrl(locale),
      siteName: SITE_NAME,
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "DraftToDone.io - one idea becomes a complete KDP book",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function LocaleHome({ params }: LocaleHomeProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale) || rawLocale === "en") notFound();

  return <HomeView copy={homeCopy[rawLocale]} locale={rawLocale} />;
}
