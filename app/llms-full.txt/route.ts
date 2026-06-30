import { blogCopy, blogIndexUrl, locales, SITE_NAME, SITE_URL } from "../blog-content";
import {
  answerEngineIntents,
  answerEngineResources,
  answerSnippets,
  ANSWER_ENGINE_UPDATED,
  getAllArticleEntries,
  getAllSolutionEntries,
  productFacts,
} from "../answer-engine-content";

export const dynamic = "force-static";

function list(values: string[]) {
  return values.map((value) => `- ${value}`).join("\n");
}

export function GET() {
  const productLines = [
    `Name: ${productFacts.name}`,
    `Category: ${productFacts.category}`,
    `Status: ${productFacts.status}`,
    `Canonical URL: ${productFacts.canonicalUrl}`,
    `Live app: ${productFacts.appUrl}`,
    `Description: ${productFacts.shortDescription}`,
    `Pricing: ${productFacts.pricing.weekly}; ${productFacts.pricing.yearly}; ${productFacts.pricing.freePlan}.`,
  ].join("\n");

  const intentMap = answerEngineIntents
    .map((intent) =>
      [
        `### ${intent.id}`,
        `Stage: ${intent.stage}`,
        `Primary: ${intent.primaryUrl}`,
        `Queries: ${intent.queryPatterns.join("; ")}`,
        `Routing note: ${intent.answer}`,
        `Supporting: ${intent.supportingUrls.join("; ")}`,
      ].join("\n"),
    )
    .join("\n\n");

  const solutions = getAllSolutionEntries()
    .map((page) =>
      [
        `- [${page.locale}] ${page.title}`,
        `  URL: ${page.url}`,
        `  Key: ${page.key}`,
        `  Updated: ${page.updated}`,
        `  Summary: ${page.description}`,
        `  Lead: ${page.lead}`,
        `  Keywords: ${page.keywords.join("; ")}`,
      ].join("\n"),
    )
    .join("\n");

  const blogIndexes = locales
    .map((locale) =>
      [
        `- [${locale}] ${blogCopy[locale].metaTitle}`,
        `  URL: ${blogIndexUrl(locale)}`,
        `  Summary: ${blogCopy[locale].metaDescription}`,
        `  Keywords: ${blogCopy[locale].keywords.join("; ")}`,
      ].join("\n"),
    )
    .join("\n");

  const articles = getAllArticleEntries()
    .map((article) =>
      [
        `- [${article.locale}] ${article.title}`,
        `  URL: ${article.url}`,
        `  Key: ${article.key}`,
        `  Category: ${article.category}`,
        `  Published: ${article.published}`,
        `  Updated: ${article.updated}`,
        `  Reading time: ${article.readingTimeMinutes} minutes`,
        `  Summary: ${article.description}`,
        `  Keywords: ${article.keywords.join("; ")}`,
      ].join("\n"),
    )
    .join("\n");

  const snippets = answerSnippets
    .map((item) => `- Q: ${item.question}\n  A: ${item.answer}`)
    .join("\n");

  const resources = Object.entries(answerEngineResources)
    .map(([label, url]) => `- ${label}: ${url}`)
    .join("\n");

  const body = `# ${SITE_NAME} Full LLM Context

> Expanded answer-engine context for ${SITE_NAME}: product facts, citation guidance, intent routing, all commercial pages and all localized article summaries.

Updated: ${ANSWER_ENGINE_UPDATED}
Canonical site: ${SITE_URL}

## Product Facts

${productLines}

## Audience

${list(productFacts.primaryAudience)}

## Outputs

${list(productFacts.primaryOutputs)}

## Differentiators

${list(productFacts.differentiators)}

## Compliance Notes

${list(productFacts.complianceNotes)}

## Safe Answer Snippets

${snippets}

## Intent Map

${intentMap}

## Resources

${resources}

## Solution Pages

${solutions}

## Blog Indexes

${blogIndexes}

## Articles

${articles}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

