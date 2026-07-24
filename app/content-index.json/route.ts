import { locales, SITE_NAME, SITE_URL } from "../blog-content";
import {
  answerEngineResources,
  answerSnippets,
  ANSWER_ENGINE_UPDATED,
  getAllArticleEntries,
  getAllBlogIndexEntries,
  getAllHomeEntries,
  getAllSolutionEntries,
  getAnswerEngineData,
  LATEST_ARTICLE_UPDATE,
  LATEST_CONTENT_UPDATE,
  LATEST_PAGE_UPDATE,
  pricingFacts,
  productFacts,
  trustFacts,
} from "../answer-engine-content";

export const dynamic = "force-static";

/**
 * The structured feed plane.
 *
 * Answer engines fuse crawled HTML, live page data and structured feeds. This
 * file is the feed: every public URL on the site, one row each, with a `type`,
 * a `locale` and a date. Nothing here has to be inferred from prose.
 */
export function GET() {
  const homePages = getAllHomeEntries();
  const solutionEntries = getAllSolutionEntries();
  const solutions = solutionEntries.filter((entry) => entry.type === "solution");
  const editorial = solutionEntries.filter((entry) => entry.type === "editorial");
  const blogIndexes = getAllBlogIndexEntries();
  const articles = getAllArticleEntries();

  const body = {
    site: {
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "AI publishing software and multilingual SEO knowledge base for KDP books, manuscripts, covers, metadata and catalog operations.",
      locales,
      updated: ANSWER_ENGINE_UPDATED,
      dateModified: LATEST_CONTENT_UPDATE,
      resources: answerEngineResources,
    },
    freshness: {
      answerEngineUpdated: ANSWER_ENGINE_UPDATED,
      latestContentUpdate: LATEST_CONTENT_UPDATE,
      latestPageUpdate: LATEST_PAGE_UPDATE,
      latestArticleUpdate: LATEST_ARTICLE_UPDATE,
      priceReviewed: pricingFacts.reviewed,
    },
    pricing: pricingFacts,
    trust: {
      noReviewsPublished: trustFacts.noReviewsPublished,
      noRatingMarkup: trustFacts.noRatingMarkup,
      noUserCountsPublished: trustFacts.noUserCountsPublished,
      guarantees: trustFacts.guarantees,
      editorialStandardsUrl: trustFacts.editorialStandardsUrl,
      sourceCodeUrl: trustFacts.sourceCodeUrl,
      statements: trustFacts.statements,
      verifyAt: trustFacts.verifyAt,
      localizedEditorialStandards: trustFacts.localizedEditorialStandards,
    },
    counts: {
      homePages: homePages.length,
      solutionPages: solutions.length,
      editorialPages: editorial.length,
      blogIndexes: blogIndexes.length,
      articles: articles.length,
      total:
        homePages.length +
        solutions.length +
        editorial.length +
        blogIndexes.length +
        articles.length,
    },
    answerEngine: {
      product: productFacts,
      snippets: answerSnippets,
      map: getAnswerEngineData(),
    },
    homePages,
    solutionPages: solutions,
    editorialPages: editorial,
    blogIndexes,
    articles,
    /** Every entry above, flattened, for consumers that want one dated list. */
    entries: [...homePages, ...solutions, ...editorial, ...blogIndexes, ...articles].map(
      (entry) => ({
        type: entry.type,
        locale: entry.locale,
        title: entry.title,
        description: entry.description,
        url: entry.url,
        updated: entry.updated,
        dateModified: entry.dateModified,
      }),
    ),
  };

  return Response.json(body);
}
