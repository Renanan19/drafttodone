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

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  const accepted = response.status === 200 || response.status === 202;
  const message = [
    `IndexNow endpoint: ${endpoint}`,
    `Submitted URLs: ${urlList.length}`,
    `Response: HTTP ${response.status}`,
    responseText.trim() ? `Body: ${responseText.trim()}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  if (!accepted) {
    console.warn(message);
    console.warn("IndexNow notification failed, but deploy remains successful.");
    return;
  }

  console.log(message);
}

main().catch((error) => {
  console.warn(error instanceof Error ? error.message : error);
  console.warn("IndexNow notification failed, but deploy remains successful.");
});
