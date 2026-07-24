/**
 * Shared schema.org node builders.
 *
 * Answer engines (Copilot, ChatGPT, Perplexity, Google AI) fuse three data
 * planes: crawled pages, structured feeds and the live HTML they fetch. These
 * helpers keep the structured plane consistent across every route so the same
 * entity (@id) is described the same way everywhere, with the freshness,
 * pricing and language fields those systems actually read.
 */
import { SITE_NAME, SITE_URL, type Locale } from "./blog-content";
import { APP_SIGNUP_URL, APP_URL } from "./home-content";

export const GITHUB_REPO_URL = "https://github.com/Renanan19/drafttodone";

/** Legal documents live on the app host. Paths verified live — there is no `/legal` index. */
export const LEGAL_URLS = {
  terms: `${APP_URL}/legal/terms`,
  privacy: `${APP_URL}/legal/privacy`,
  refund: `${APP_URL}/legal/refund`,
} as const;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const LOGO_ID = `${SITE_URL}/#logo`;

/** Prices are reviewed on this date; offers stay valid for a year after it. */
export const PRICE_REVIEWED = "2026-07-24";
export const PRICE_VALID_UNTIL = "2027-07-24";

export const PRICE_CURRENCY = "EUR";
export const WEEKLY_PRICE = "14.99";
export const YEARLY_PRICE = "390";

export const organizationRef = { "@id": ORGANIZATION_ID };
export const websiteRef = { "@id": WEBSITE_ID };
export const softwareRef = { "@id": SOFTWARE_ID };
export const founderRef = { "@id": FOUNDER_ID };

export const schemaLocales: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  it: "it",
  de: "de",
};

export type SchemaNode = Record<string, unknown>;

export function imageObject({
  url,
  caption,
  width = 1200,
  height = 630,
  id,
}: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
  id?: string;
}): SchemaNode {
  return {
    "@type": "ImageObject",
    ...(id ? { "@id": id } : {}),
    url,
    contentUrl: url,
    width,
    height,
    caption,
    representativeOfPage: true,
  };
}

/**
 * Marks the answer-first blocks. Every selector below exists in the rendered
 * DOM (`h1`, the "at a glance" card, the FAQ answers) so voice and answer
 * surfaces extract the same text a reader sees.
 */
export const speakableSpec = {
  "@type": "SpeakableSpecification",
  cssSelector: ["h1", "[data-speakable]"],
};

export function webPageNode({
  type = "WebPage",
  url,
  name,
  description,
  locale,
  datePublished,
  dateModified,
  image,
  breadcrumb,
  primaryEntity,
  extra,
}: {
  type?: string | string[];
  url: string;
  name: string;
  description: string;
  locale: Locale;
  datePublished?: string;
  dateModified: string;
  image?: { url: string; caption: string };
  breadcrumb?: SchemaNode;
  primaryEntity?: SchemaNode;
  extra?: SchemaNode;
}): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: schemaLocales[locale],
    isPartOf: websiteRef,
    publisher: organizationRef,
    ...(datePublished ? { datePublished } : {}),
    dateModified,
    ...(image
      ? {
          primaryImageOfPage: imageObject({ url: image.url, caption: image.caption }),
          image: imageObject({ url: image.url, caption: image.caption }),
        }
      : {}),
    ...(breadcrumb ? { breadcrumb } : {}),
    ...(primaryEntity ? { mainEntity: primaryEntity } : {}),
    speakable: speakableSpec,
    ...extra,
  };
}

/**
 * Microsoft's AEO guidance calls out ItemList for any page that is really a
 * collection (categories, tool hubs, related products). Answer engines use it
 * to enumerate options instead of guessing from links.
 */
export function itemListNode({
  id,
  name,
  description,
  items,
  locale,
}: {
  id: string;
  name: string;
  description?: string;
  locale: Locale;
  items: { url: string; name: string; description?: string }[];
}): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": id,
    name,
    ...(description ? { description } : {}),
    inLanguage: schemaLocales[locale],
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

/**
 * One offer shape reused by every route. `url` points straight at the signup
 * page: the bare app root answers 307, and a redirect hop costs time inside
 * the hard fetch budget answer-engine crawlers apply.
 */
export function aggregateOffer(): SchemaNode {
  return {
    "@type": "AggregateOffer",
    availability: "https://schema.org/InStock",
    lowPrice: WEEKLY_PRICE,
    highPrice: YEARLY_PRICE,
    offerCount: "2",
    priceCurrency: PRICE_CURRENCY,
    url: APP_SIGNUP_URL,
    offers: [
      offer({
        name: "Weekly book-credit subscription",
        price: WEEKLY_PRICE,
        unitText: "week",
        description: "6 book credits per week. 1 credit = 1 complete, ready-to-publish book package.",
      }),
      offer({
        name: "Yearly book-credit subscription",
        price: YEARLY_PRICE,
        unitText: "year",
        description: "312 book credits per year. 1 credit = 1 complete, ready-to-publish book package.",
      }),
    ],
  };
}

export function offer({
  name,
  price,
  unitText,
  description,
}: {
  name: string;
  price: string;
  unitText: string;
  description: string;
}): SchemaNode {
  return {
    "@type": "Offer",
    name,
    description,
    price,
    priceCurrency: PRICE_CURRENCY,
    priceValidUntil: PRICE_VALID_UNTIL,
    availability: "https://schema.org/InStock",
    url: APP_SIGNUP_URL,
    category: "Subscription",
    seller: organizationRef,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: PRICE_CURRENCY,
      unitText,
      valueAddedTaxIncluded: false,
    },
  };
}

export function breadcrumbList(items: { name: string; url: string }[]): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const softwareEntityFacts = {
  name: SITE_NAME,
  applicationCategory: "PublishingApplication",
  applicationSubCategory: "AI publishing software",
  operatingSystem: "Web",
  url: APP_URL,
  installUrl: APP_SIGNUP_URL,
} as const;
