import { agentWorkflowSeoPosts } from "./agent-workflow-seo-posts";
import { aiWritingSeoPosts } from "./ai-writing-seo-posts";
import { bookMarketingSeoPosts } from "./book-marketing-seo-posts";
import { kdpAccountPaymentsPost } from "./kdp-account-post";
import { kdpSeoPosts } from "./kdp-seo-posts";
import { selfPublishingSeoPosts } from "./self-publishing-seo-posts";

export const SITE_URL = "https://drafttodone.io";
export const SITE_NAME = "DraftToDone.io";
export const BLOG_AUTHOR = "DraftToDone editorial team";

export const locales = ["en", "fr", "it", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
};

export type BlogCopy = {
  home: string;
  blog: string;
  appCta: string;
  languageLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  subtitle: string;
  pillarLabel: string;
  updatedLabel: string;
  readTimeLabel: string;
  readGuide: string;
  tableOfContents: string;
  checklist: string;
  faq: string;
  related: string;
  sources: string;
  tools: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  footer: string;
};

export type BlogSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogTranslation = {
  slug: string;
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords: string[];
  category: string;
  intro: string[];
  sections: BlogSection[];
  checklist: string[];
  faq: BlogFaq[];
  sources?: {
    label: string;
    href: string;
  }[];
};

export type BlogPost = {
  key: string;
  date: string;
  updated: string;
  readingTime: number;
  accent: {
    start: string;
    middle: string;
    end: string;
  };
  // English is mandatory; other locales are optional so a post can ship
  // in a subset of languages without phantom URLs in the other locales.
  translations: { en: BlogTranslation } & Partial<Record<Locale, BlogTranslation>>;
};

export const blogCopy: Record<Locale, BlogCopy> = {
  en: {
    home: "Home",
    blog: "Blog",
    appCta: "Open the app",
    languageLabel: "Choose language",
    metaTitle: "AI Publishing Blog: SEO, KDP, Covers and Book Automation",
    metaDescription:
      "Complete multilingual guides for AI-assisted publishing: book SEO, metadata, covers, KDP workflows and catalog operations.",
    keywords: [
      "AI publishing blog",
      "book SEO",
      "KDP metadata",
      "AI book cover",
      "publishing automation",
      "KDP keyword research",
      "AI manuscript editing",
      "KDP launch checklist",
      "pen name strategy",
    ],
    eyebrow: "AI publishing knowledge base",
    h1: "A complete SEO blog for building a modern publishing catalog.",
    subtitle:
      "Pillar guides for writers, indie publishers and operators who want repeatable workflows: niche research, manuscript quality, book metadata, covers and catalog systems.",
    pillarLabel: "Pillar guide",
    updatedLabel: "Updated",
    readTimeLabel: "min read",
    readGuide: "Read guide",
    tableOfContents: "Table of contents",
    checklist: "Operational checklist",
    faq: "FAQ",
    related: "Related guides",
    sources: "Official sources",
    tools: "Tools",
    ctaTitle: "Turn your publishing workflow into a system.",
    ctaText:
      "DraftToDone helps transform ideas into manuscript, cover assets and optimized metadata from one controlled pipeline.",
    ctaButton: "Open the app",
    footer: "Built in public for publishers who care about quality and leverage.",
  },
  fr: {
    home: "Accueil",
    blog: "Blog",
    appCta: "Ouvrir l'app",
    languageLabel: "Choisir la langue",
    metaTitle: "Blog édition IA : SEO, KDP, couvertures et automatisation",
    metaDescription:
      "Guides complets en français sur l'édition assistée par IA : SEO livre, métadonnées, couvertures, workflow KDP et opérations éditoriales.",
    keywords: [
      "blog édition IA",
      "SEO livre",
      "métadonnées KDP",
      "couverture livre IA",
      "automatisation édition",
      "recherche mots-clés KDP",
      "édition manuscrit IA",
      "checklist lancement KDP",
      "stratégie nom de plume",
    ],
    eyebrow: "Base de connaissance édition IA",
    h1: "Un blog SEO complet pour bâtir un catalogue éditorial moderne.",
    subtitle:
      "Des guides piliers pour auteurs, éditeurs indépendants et opérateurs qui veulent des workflows reproductibles : recherche de niche, qualité du manuscrit, métadonnées, couvertures et systèmes de catalogue.",
    pillarLabel: "Guide pilier",
    updatedLabel: "Mis à jour",
    readTimeLabel: "min de lecture",
    readGuide: "Lire le guide",
    tableOfContents: "Sommaire",
    checklist: "Checklist opérationnelle",
    faq: "FAQ",
    related: "Guides liés",
    sources: "Sources officielles",
    tools: "Outils",
    ctaTitle: "Transformez votre workflow éditorial en système.",
    ctaText:
      "DraftToDone aide à transformer une idée en manuscrit, assets de couverture et métadonnées optimisées depuis un pipeline contrôlé.",
    ctaButton: "Ouvrir l'app",
    footer: "Construit en public pour les éditeurs qui veulent qualité et levier.",
  },
  it: {
    home: "Home",
    blog: "Blog",
    appCta: "Apri l'app",
    languageLabel: "Scegli lingua",
    metaTitle: "Blog editoria IA: SEO, KDP, copertine e automazione",
    metaDescription:
      "Guide complete in italiano sull'editoria assistita dall'IA: SEO per libri, metadati, copertine, flussi KDP e sistemi di catalogo.",
    keywords: [
      "blog editoria IA",
      "SEO libri",
      "metadati KDP",
      "copertina libro IA",
      "automazione editoriale",
      "ricerca keyword KDP",
      "editing manoscritto IA",
      "checklist lancio KDP",
      "strategia pseudonimo",
    ],
    eyebrow: "Knowledge base per editoria IA",
    h1: "Un blog SEO completo per costruire un catalogo editoriale moderno.",
    subtitle:
      "Guide pilastro per autori, editori indipendenti e operatori che vogliono workflow ripetibili: ricerca di nicchia, qualità del manoscritto, metadati, copertine e sistemi di catalogo.",
    pillarLabel: "Guida pilastro",
    updatedLabel: "Aggiornato",
    readTimeLabel: "min di lettura",
    readGuide: "Leggi la guida",
    tableOfContents: "Indice",
    checklist: "Checklist operativa",
    faq: "FAQ",
    related: "Guide correlate",
    sources: "Fonti ufficiali",
    tools: "Strumenti",
    ctaTitle: "Trasforma il workflow editoriale in un sistema.",
    ctaText:
      "DraftToDone aiuta a trasformare un'idea in manoscritto, asset di copertina e metadati ottimizzati da un unico pipeline controllato.",
    ctaButton: "Apri l'app",
    footer: "Costruito in pubblico per editori che vogliono qualità e leva.",
  },
  de: {
    home: "Startseite",
    blog: "Blog",
    appCta: "App öffnen",
    languageLabel: "Sprache wählen",
    metaTitle: "KI-Publishing-Blog: SEO, KDP, Cover und Automatisierung",
    metaDescription:
      "Ausführliche deutschsprachige Guides für KI-gestütztes Publishing: Buch-SEO, Metadaten, Cover, KDP-Workflows und Katalogsysteme.",
    keywords: [
      "KI Publishing Blog",
      "Buch SEO",
      "KDP Metadaten",
      "KI Buchcover",
      "Publishing Automatisierung",
      "KDP Keyword Recherche",
      "KI Manuskript Lektorat",
      "KDP Launch Checkliste",
      "Pseudonym Strategie",
    ],
    eyebrow: "Wissensbasis für KI-Publishing",
    h1: "Ein vollständiger SEO-Blog für den Aufbau eines modernen Publishing-Katalogs.",
    subtitle:
      "Pillar-Guides für Autorinnen, Indie-Publisher und Operatoren, die wiederholbare Workflows wollen: Nischenrecherche, Manuskriptqualität, Metadaten, Cover und Katalogsysteme.",
    pillarLabel: "Pillar-Guide",
    updatedLabel: "Aktualisiert",
    readTimeLabel: "Min. Lesezeit",
    readGuide: "Guide lesen",
    tableOfContents: "Inhalt",
    checklist: "Operative Checkliste",
    faq: "FAQ",
    related: "Verwandte Guides",
    sources: "Offizielle Quellen",
    tools: "Tools",
    ctaTitle: "Mach aus deinem Publishing-Workflow ein System.",
    ctaText:
      "DraftToDone hilft, Ideen in Manuskript, Cover-Assets und optimierte Metadaten aus einer kontrollierten Pipeline zu verwandeln.",
    ctaButton: "App öffnen",
    footer: "Öffentlich aufgebaut für Publisher, die Qualität und Hebelwirkung wollen.",
  },
};

export const posts: BlogPost[] = [
  ...agentWorkflowSeoPosts,
  ...aiWritingSeoPosts,
  ...selfPublishingSeoPosts,
  ...bookMarketingSeoPosts,
  kdpAccountPaymentsPost,
  ...kdpSeoPosts,
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function postLocales(post: BlogPost): Locale[] {
  return locales.filter((locale) => Boolean(post.translations[locale]));
}

export function getPostTranslation(post: BlogPost, locale: Locale): BlogTranslation {
  return post.translations[locale] ?? post.translations.en;
}

export function postEntries(post: BlogPost) {
  return postLocales(post).map((locale) => ({
    locale,
    article: getPostTranslation(post, locale),
  }));
}

export function getPostsForLocale(locale: Locale) {
  return posts
    .filter((post) => Boolean(post.translations[locale]))
    .map((post) => ({
      ...post,
      translation: getPostTranslation(post, locale),
    }));
}

export function getPostBySlug(locale: Locale, slug: string) {
  return posts.find((post) => post.translations[locale]?.slug === slug);
}

export function blogIndexPath(locale: Locale) {
  return `/${locale}/blog`;
}

export function blogIndexUrl(locale: Locale) {
  return `${SITE_URL}${blogIndexPath(locale)}`;
}

export function postPath(locale: Locale, post: BlogPost) {
  return `${blogIndexPath(locale)}/${getPostTranslation(post, locale).slug}`;
}

export function postUrl(locale: Locale, post: BlogPost) {
  return `${SITE_URL}${postPath(locale, post)}`;
}

export function getBlogIndexAlternates() {
  return {
    en: blogIndexPath("en"),
    fr: blogIndexPath("fr"),
    it: blogIndexPath("it"),
    de: blogIndexPath("de"),
    "x-default": blogIndexPath(defaultLocale),
  };
}

export function getPostAlternates(post: BlogPost) {
  return {
    ...Object.fromEntries(
      postLocales(post).map((locale) => [locale, postPath(locale, post)]),
    ),
    "x-default": postPath(defaultLocale, post),
  };
}

export function getArticleStaticParams() {
  return posts.flatMap((post) =>
    postLocales(post).map((locale) => ({
      locale,
      slug: getPostTranslation(post, locale).slug,
    })),
  );
}
