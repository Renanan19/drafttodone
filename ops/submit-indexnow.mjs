const siteUrl = process.env.SITE_URL ?? "https://drafttodone.io";
const endpoint = process.env.INDEXNOW_ENDPOINT ?? "https://www.bing.com/indexnow";
const key = process.env.INDEXNOW_KEY ?? "a4b7e2c9d1f03a6b8c5d9e7f102345ab";
const keyFile = `${key}.txt`;

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function main() {
  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  const sitemapResponse = await fetch(sitemapUrl, { cache: "no-store" });

  if (!sitemapResponse.ok) {
    throw new Error(`Could not fetch ${sitemapUrl}: HTTP ${sitemapResponse.status}`);
  }

  const sitemap = await sitemapResponse.text();
  const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
    decodeXml(match[1].trim()),
  );

  if (urlList.length === 0) {
    throw new Error(`No URLs found in ${sitemapUrl}.`);
  }

  const payload = {
    host: new URL(siteUrl).host,
    key,
    keyLocation: `${siteUrl}/${keyFile}`,
    urlList,
  };

  const { response, responseText, attempts } = await submitWithRetry(payload);

  const accepted = response.status === 200 || response.status === 202;
  const message = [
    `IndexNow endpoint: ${endpoint}`,
    `Submitted URLs: ${urlList.length}`,
    `Attempts: ${attempts}`,
    `Response: HTTP ${response.status}`,
    // The body is the only thing that distinguishes a throttle from a rejected
    // key, and the August 2026 403 was never diagnosed because it was dropped.
    responseText.trim() ? `Body: ${responseText.trim()}` : "Body: (empty)",
  ].join("\n");

  if (!accepted) {
    console.warn(message);
    console.warn("IndexNow notification failed, but deploy remains successful.");
    return;
  }

  console.log(message);
}

/**
 * IndexNow answers 403 both for a key it cannot verify and for a caller it is
 * throttling, and a shared GitHub Actions egress IP hits the second far more
 * often than the first. Retrying separates them: a key problem fails three
 * times identically, a throttle usually clears.
 */
async function submitWithRetry(payload, maxAttempts = 3) {
  let last;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const responseText = await response.text();
    last = { response, responseText, attempts: attempt };

    if (response.status === 200 || response.status === 202) return last;
    if (attempt === maxAttempts) break;

    const waitMs = 5000 * 2 ** (attempt - 1);
    console.warn(`IndexNow HTTP ${response.status}, retrying in ${waitMs / 1000}s.`);
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  return last;
}

main().catch((error) => {
  console.warn(error instanceof Error ? error.message : error);
  console.warn("IndexNow notification failed, but deploy remains successful.");
});
