import { APP_URL, homeCopy, homeUrl } from "./home-content";

/**
 * The home page as plain Markdown, for AI agents that read one request and
 * skip JSON-LD. Built from the same copy as the page, so the two cannot drift.
 * Only the indexed languages (en, fr) get one; each page links to its own
 * with <link rel="alternate" type="text/markdown">.
 */
export const markdownLocales = ["en", "fr"] as const;
export type MarkdownLocale = (typeof markdownLocales)[number];

export function homeMarkdownPath(locale: MarkdownLocale) {
  return `/${locale}.md`;
}

const labels: Record<MarkdownLocale, { how: string; facts: string; pricing: string; faq: string; start: string }> = {
  en: { how: "How it works", facts: "Measured facts", pricing: "Pricing", faq: "Questions", start: "Start a free preview" },
  fr: { how: "Comment ça marche", facts: "Chiffres mesurés", pricing: "Tarifs", faq: "Questions", start: "Lancer un aperçu gratuit" },
};

export function homeMarkdown(locale: MarkdownLocale): string {
  const t = homeCopy[locale];
  const l = labels[locale];
  const lines: string[] = [
    `# ${t.hero.h1main} ${t.hero.h1accent}`,
    "",
    `> ${t.hero.eyebrow}. ${t.meta.description}`,
    "",
    `${t.hero.sub} ${t.hero.subHighlight}`,
    "",
    t.hero.microcopy,
    "",
    `- ${l.start}: ${APP_URL}/signup?lang=${locale}`,
    `- Web page: ${homeUrl(locale)}`,
    "",
    `## ${l.how}`,
    "",
    ...t.how.steps.map((s, i) => `${i + 1}. **${s.title}.** ${s.text}`),
    "",
    `## ${l.facts}`,
    "",
    ...t.facts.items.map((f) => `- **${f.value}**: ${f.label}`),
    "",
    t.facts.source,
    "",
    `## ${l.pricing}`,
    "",
    t.pricing.sub,
    "",
    ...t.pricing.plans.map((p) => `- **${p.name}: ${p.price} ${p.period}.** ${p.credits}. ${p.perBook}.`),
    "",
    `${t.pricing.includes.join(" · ")}`,
    "",
    t.pricing.guarantee,
    "",
    t.pricing.note,
    "",
    `## ${l.faq}`,
    "",
    ...t.faq.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
  ];
  return `${lines.join("\n").trim()}\n`;
}
