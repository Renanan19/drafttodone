import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import { answerEngineResources } from "./answer-engine-content";
import { SITE_NAME, SITE_URL } from "./blog-content";
import { APP_URL } from "./home-content";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const GITHUB_REPO_URL = "https://github.com/Renanan19/drafttodone";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DraftToDone.io — Turn One Idea Into a Complete KDP Book",
  description:
    "Generate a manuscript, full wrap cover, KDP metadata, and a verified pen name from one niche brief. Build 6 ready-to-publish books a week.",
  applicationName: SITE_NAME,
  category: "AI publishing software",
  classification:
    "AI publishing software, KDP automation, book SEO, AI book cover generation, manuscript generation",
  manifest: "/manifest.webmanifest",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
      "application/json": [
        { title: "Content index", url: "/content-index.json" },
        { title: "Answer-engine JSON", url: "/answer-engine.json" },
      ],
      "text/plain": [
        { title: "LLMs text", url: "/llms.txt" },
        { title: "Full LLM context", url: "/llms-full.txt" },
        { title: "AI crawl guide", url: "/ai.txt" },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "DraftToDone.io — Turn One Idea Into a Complete KDP Book",
    description:
      "One brief becomes manuscript, cover, KDP metadata, and pen name. The app is live.",
    type: "website",
    url: SITE_URL,
  },
};

const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "AI publishing software for creating manuscripts, book covers, KDP metadata and repeatable publishing catalog workflows.",
    foundingDate: "2026",
    founder: {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Antoine",
      jobTitle: "Founder",
      knowsAbout: [
        "Amazon KDP",
        "AI publishing",
        "book metadata",
        "self-publishing workflows",
      ],
    },
    sameAs: [GITHUB_REPO_URL],
    subjectOf: [
      {
        "@type": "DigitalDocument",
        name: "DraftToDone answer-engine JSON",
        url: answerEngineResources.answerEngine,
      },
      {
        "@type": "DigitalDocument",
        name: "DraftToDone LLMs text",
        url: answerEngineResources.llms,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "fr", "it", "de"],
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    about: {
      "@id": SOFTWARE_ID,
    },
    potentialAction: {
      "@type": "ReadAction",
      target: [
        `${SITE_URL}/en/blog`,
        `${SITE_URL}/fr/blog`,
        `${SITE_URL}/it/blog`,
        `${SITE_URL}/de/blog`,
        answerEngineResources.llms,
        answerEngineResources.llmsFull,
        answerEngineResources.answerEngine,
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: SITE_NAME,
    alternateName: "DraftToDone",
    applicationCategory: "PublishingApplication",
    applicationSubCategory: "AI publishing software",
    operatingSystem: "Web",
    url: APP_URL,
    mainEntityOfPage: SITE_URL,
    isAccessibleForFree: false,
    description:
      "AI publishing software for turning one niche brief into a manuscript, full cover, KDP metadata and catalog quality workflow.",
    brand: {
      "@id": ORGANIZATION_ID,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    creator: {
      "@id": FOUNDER_ID,
    },
    featureList: [
      "Full manuscript generation",
      "Complete front, spine and back cover package",
      "KDP title, subtitle, description and keyword metadata",
      "Verified pen names",
      "Catalog quality gates",
    ],
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/OnlineOnly",
      lowPrice: "14.99",
      highPrice: "390",
      offerCount: "2",
      priceCurrency: "EUR",
      url: APP_URL,
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable}`}>
      <body>
        {/* No-JS fallback: reveal-up elements must stay visible without the observer */}
        <noscript>
          <style>{`.reveal-up{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
