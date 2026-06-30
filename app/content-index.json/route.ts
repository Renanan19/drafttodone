import {
  blogCopy,
  blogIndexUrl,
  locales,
  postEntries,
  posts,
  postUrl,
  SITE_NAME,
  SITE_URL,
} from "../blog-content";
import {
  answerEngineResources,
  answerSnippets,
  getAnswerEngineData,
  productFacts,
} from "../answer-engine-content";
import { solutionPages, solutionUrl } from "../seo-pages";

export const dynamic = "force-static";

export function GET() {
  const body = {
    site: {
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "AI publishing software and multilingual SEO knowledge base for KDP books, manuscripts, covers, metadata and catalog operations.",
      resources: {
        sitemap: answerEngineResources.sitemap,
        htmlSitemap: answerEngineResources.htmlSitemap,
        robots: answerEngineResources.robots,
        rss: answerEngineResources.rss,
        llms: answerEngineResources.llms,
        llmsFull: answerEngineResources.llmsFull,
        ai: answerEngineResources.ai,
        answerEngine: answerEngineResources.answerEngine,
      },
    },
    answerEngine: {
      product: productFacts,
      snippets: answerSnippets,
      map: getAnswerEngineData(),
    },
    solutionPages: solutionPages.flatMap((page) =>
      locales.map((locale) => ({
        type: "solution",
        key: page.key,
        locale,
        title: page.translations[locale].title,
        description: page.translations[locale].description,
        h1: page.translations[locale].h1,
        lead: page.translations[locale].lead,
        keywords: page.translations[locale].keywords,
        url: solutionUrl(locale, page),
        updated: page.updated,
      })),
    ),
    blogIndexes: locales.map((locale) => ({
      type: "blog-index",
      locale,
      title: blogCopy[locale].metaTitle,
      description: blogCopy[locale].metaDescription,
      keywords: blogCopy[locale].keywords,
      url: blogIndexUrl(locale),
    })),
    articles: posts.flatMap((post) =>
      postEntries(post).map(({ locale, article }) => ({
        type: "article",
        key: post.key,
        locale,
        title: article.title,
        description: article.description,
        category: article.category,
        keywords: article.keywords,
        url: postUrl(locale, post),
        published: post.date,
        updated: post.updated,
        readingTimeMinutes: post.readingTime,
      })),
    ),
  };

  return Response.json(body);
}
