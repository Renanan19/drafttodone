import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "../blog-content";
import { getHomeAlternates, homeCopy } from "../home-content";
import { HomeView } from "../home-view";

// English landing lives at the site root `/`. fr/it/de live at `/[locale]`.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    title: homeCopy.en.meta.title,
    description: homeCopy.en.meta.description,
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return <HomeView copy={homeCopy.en} locale="en" />;
}
