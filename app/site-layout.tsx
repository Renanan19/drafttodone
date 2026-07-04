import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { answerEngineResources } from "./answer-engine-content";
import { SITE_NAME, SITE_URL, type Locale } from "./blog-content";
import { APP_URL } from "./home-content";

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
const COMMERCIAL_PAGES = [
  {
    name: "AI publishing software",
    url: `${SITE_URL}/en/ai-publishing-software`,
  },
  {
    name: "AI book generator",
    url: `${SITE_URL}/en/ai-book-generator`,
  },
  {
    name: "Best AI book generator",
    url: `${SITE_URL}/en/best-ai-book-generator`,
  },
  {
    name: "KDP book generator",
    url: `${SITE_URL}/en/kdp-book-generator`,
  },
  {
    name: "KDP keyword tool",
    url: `${SITE_URL}/en/kdp-keyword-tool`,
  },
  {
    name: "AI book cover generator",
    url: `${SITE_URL}/en/ai-book-cover-generator`,
  },
];

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DraftToDone.io - Turn One Idea Into a Complete KDP Book",
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
    title: "DraftToDone.io - Turn One Idea Into a Complete KDP Book",
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
    knowsAbout: [
      "Amazon Kindle Direct Publishing",
      "AI book generation",
      "Book cover generation",
      "Book SEO metadata",
      "Self-publishing catalog operations",
    ],
    areaServed: "Worldwide",
    owns: {
      "@id": SOFTWARE_ID,
    },
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
    hasPart: COMMERCIAL_PAGES.map((page) => ({
      "@type": "WebPage",
      name: page.name,
      url: page.url,
      about: {
        "@id": SOFTWARE_ID,
      },
    })),
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
    sameAs: [SITE_URL, GITHUB_REPO_URL],
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    mainEntityOfPage: SITE_URL,
    isAccessibleForFree: false,
    inLanguage: ["en", "fr", "it", "de"],
    availableLanguage: ["English", "French", "Italian", "German"],
    applicationSuite: "DraftToDone",
    softwareRequirements: "Modern web browser",
    audience: {
      "@type": "Audience",
      audienceType: [
        "Indie publishers",
        "Self-published authors",
        "Amazon KDP catalog operators",
      ],
    },
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
      offers: [
        {
          "@type": "Offer",
          name: "Weekly book-credit subscription",
          price: "14.99",
          priceCurrency: "EUR",
          availability: "https://schema.org/OnlineOnly",
          url: APP_URL,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "14.99",
            priceCurrency: "EUR",
            unitText: "week",
          },
        },
        {
          "@type": "Offer",
          name: "Yearly book-credit subscription",
          price: "390",
          priceCurrency: "EUR",
          availability: "https://schema.org/OnlineOnly",
          url: APP_URL,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "390",
            priceCurrency: "EUR",
            unitText: "year",
          },
        },
      ],
    },
  },
];

export function SiteDocument({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  return (
    <html lang={lang} className={`${newsreader.variable} ${hanken.variable}`}>
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
