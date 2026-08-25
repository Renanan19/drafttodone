import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { answerEngineResources } from "./answer-engine-content";
import { SITE_NAME, SITE_URL, type Locale } from "./blog-content";
import { APP_SIGNUP_URL, APP_URL } from "./home-content";
import { editorialUrl } from "./seo-pages";
import {
  aggregateOffer,
  FOUNDER_ID,
  GITHUB_REPO_URL,
  imageObject,
  LEGAL_URLS,
  LOGO_ID,
  ORGANIZATION_ID,
  PRICE_REVIEWED,
  softwareRef,
  SOFTWARE_ID,
  WEBSITE_ID,
} from "./structured-data";

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

const COMMERCIAL_PAGES = [
  {
    name: "Free KDP interior formatter",
    url: `${SITE_URL}/en/kdp-interior-formatter`,
  },
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
    "Generate a manuscript, full wrap cover, KDP metadata, and a verified pen name from one niche brief. Buy one book for €10, or 2 a week on subscription.",
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
    logo: imageObject({
      id: LOGO_ID,
      url: `${SITE_URL}/icon.svg`,
      caption: `${SITE_NAME} logo`,
      width: 512,
      height: 512,
    }),
    image: { "@id": LOGO_ID },
    description:
      "AI publishing software for creating manuscripts, book covers, KDP metadata and repeatable publishing catalog workflows.",
    foundingDate: "2026",
    founder: {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Antoine",
      jobTitle: "Founder",
      worksFor: { "@id": ORGANIZATION_ID },
      knowsAbout: [
        "Amazon KDP",
        "AI publishing",
        "book metadata",
        "self-publishing workflows",
      ],
    },
    // Editorial policy, sourcing and the limits the product does not claim.
    // Answer engines weigh a stated, checkable policy over marketing adjectives.
    publishingPrinciples: editorialUrl("en"),
    termsOfService: LEGAL_URLS.terms,
    slogan: "One idea in, a complete KDP book out.",
    sameAs: [GITHUB_REPO_URL, APP_URL],
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
      {
        "@type": "DigitalDocument",
        name: "Terms of service",
        url: LEGAL_URLS.terms,
      },
      {
        "@type": "DigitalDocument",
        name: "Privacy policy",
        url: LEGAL_URLS.privacy,
      },
      {
        "@type": "DigitalDocument",
        name: "Refund policy",
        url: LEGAL_URLS.refund,
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
    dateModified: PRICE_REVIEWED,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    about: {
      "@id": SOFTWARE_ID,
    },
    publishingPrinciples: editorialUrl("en"),
    hasPart: COMMERCIAL_PAGES.map((page) => ({
      "@type": "WebPage",
      name: page.name,
      url: page.url,
      about: {
        "@id": SOFTWARE_ID,
      },
    })),
    mainEntity: {
      "@type": "ItemList",
      name: "DraftToDone tools and solution pages",
      numberOfItems: COMMERCIAL_PAGES.length,
      itemListElement: COMMERCIAL_PAGES.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.name,
        url: page.url,
      })),
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
    // Straight to signup: the bare app root answers 307, and every redirect hop
    // is spent inside the fetch budget an answer-engine crawler allows a page.
    installUrl: APP_SIGNUP_URL,
    downloadUrl: APP_SIGNUP_URL,
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
      "MCP server, CLI and REST API for autonomous AI agents",
    ],
    dateModified: PRICE_REVIEWED,
    offers: aggregateOffer(),
    // Stated limits, not disclaimers in a footer: answer engines quote these
    // back, and a product that names what it cannot do reads as more citable.
    disambiguatingDescription:
      "DraftToDone generates the book package. It does not upload to Amazon, and it does not guarantee KDP approval, rankings or sales; AI-content disclosure remains the publisher's responsibility.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#agent-api`,
    name: "DraftToDone agent API (MCP, CLI and REST)",
    serviceType: "Agent-operable book generation API",
    provider: { "@id": ORGANIZATION_ID },
    isRelatedTo: softwareRef,
    url: `${APP_URL}/agents`,
    description:
      "An AI agent can sign up, authorize payment once, subscribe off-session, generate a complete book package, poll progress and download the files through a remote MCP server, a zero-dependency CLI or a plain JSON REST API.",
    availableChannel: [
      {
        "@type": "ServiceChannel",
        name: "MCP server (streamable HTTP)",
        serviceUrl: `${APP_URL}/mcp`,
      },
      {
        "@type": "ServiceChannel",
        name: "OpenAPI specification",
        serviceUrl: `${APP_URL}/openapi.json`,
      },
    ],
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
