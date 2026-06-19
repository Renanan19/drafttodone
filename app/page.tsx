import type { Metadata } from "next";
import { SITE_NAME } from "./blog-content";
import { getHomeAlternates, homeCopy } from "./home-content";
import { HomeView } from "./home-view";

// English landing lives at the site root `/`. fr/it/de live at `/[locale]`.
export const metadata: Metadata = {
  title: homeCopy.en.meta.title,
  description: homeCopy.en.meta.description,
  alternates: {
    canonical: "/",
    languages: getHomeAlternates(),
  },
  openGraph: {
    title: homeCopy.en.meta.title,
    description: homeCopy.en.meta.description,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "it_IT", "de_DE"],
  },
};

export default function Home() {
  return <HomeView copy={homeCopy.en} locale="en" />;
}
