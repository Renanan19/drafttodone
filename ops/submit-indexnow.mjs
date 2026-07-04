import { readFileSync, readdirSync } from "node:fs";

const siteUrl = process.env.SITE_URL ?? "https://drafttodone.io";
const endpoint = process.env.INDEXNOW_ENDPOINT ?? "https://www.bing.com/indexnow";
const publicDir = new URL("../public/", import.meta.url);

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

function findIndexNowKeyFile() {
  const keyFile = readdirSync(publicDir).find((name) =>
    /^[a-zA-Z0-9-]{8,128}\.txt$/.test(name),
  );
  if (!keyFile) {
    throw new Error("No IndexNow key file found in public/.");
  }
  return keyFile;
}

async function main() {
  const keyFile = findIndexNowKeyFile();
  const key = readFileSync(new URL(keyFile, publicDir), "utf8").trim();
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
