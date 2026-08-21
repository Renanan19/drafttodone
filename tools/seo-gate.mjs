#!/usr/bin/env node
/**
 * The SEO regression gate. Run it after `npm run build`, before any commit.
 *
 *   node tools/seo-gate.mjs
 *
 * It reads the built HTML in `out/` rather than the TypeScript data files,
 * because the thing that has to be correct is what ships: `seoTitle()` clamps
 * at 60 characters, but a title that reads badly still clamps cleanly, and
 * only the rendered `<title>` shows what a searcher sees.
 *
 * Exits non-zero on any violation.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const OUT = join(ROOT, "out");

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

/**
 * Entities have to be decoded before anything is measured. A French title full
 * of `&#x27;` is three characters longer per apostrophe in the raw HTML than on
 * the SERP, which is enough to fail a title that is actually fine.
 */
function unescapeHtml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function htmlFiles(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      // `_next` is build output, not pages.
      if (entry === "_next") continue;
      found.push(...htmlFiles(full));
    } else if (entry.endsWith(".html")) {
      found.push(full);
    }
  }
  return found;
}

/** Which page template produced this file, inferred from its path. */
function classify(relPath) {
  const path = relPath.split(sep).join("/").replace(/\.html$/, "");
  if (path === "404") return "notFound";
  if (path === "index") return "home";
  if (/^(fr|it|de)$/.test(path)) return "home";
  if (/^(en|fr|it|de)\/blog$/.test(path)) return "blogIndex";
  if (/^(en|fr|it|de)\/blog\//.test(path)) return "article";
  if (path === "site-map") return "siteMap";
  if (/^(en|fr|it|de)\//.test(path)) return "solution";
  return "other";
}

/**
 * The nodes each template must emit. Kept to what the template guarantees for
 * every instance — the editorial page has no SoftwareApplication, so `solution`
 * cannot require one, and that case is checked separately below.
 */
const REQUIRED_NODES = {
  home: ["WebPage", "FAQPage", "ItemList", "Organization", "WebSite", "SoftwareApplication"],
  solution: ["WebPage", "FAQPage", "ItemList", "BreadcrumbList", "Organization", "WebSite"],
  article: ["Article", "WebPage", "FAQPage", "ItemList", "BreadcrumbList"],
  blogIndex: ["CollectionPage", "ItemList", "BreadcrumbList"],
  siteMap: ["CollectionPage", "ItemList", "BreadcrumbList"],
};

/** Markup the site has publicly committed to never emitting. */
const FORBIDDEN_NODES = ["AggregateRating", "Review"];

function collectTypes(value, into) {
  if (Array.isArray(value)) {
    for (const item of value) collectTypes(item, into);
    return into;
  }
  if (value && typeof value === "object") {
    const type = value["@type"];
    if (typeof type === "string") into.add(type);
    else if (Array.isArray(type)) for (const t of type) into.add(t);
    for (const key of Object.keys(value)) collectTypes(value[key], into);
  }
  return into;
}

const failures = [];
const titles = new Map();
let checked = 0;

for (const file of htmlFiles(OUT)) {
  const rel = relative(OUT, file);
  const kind = classify(rel);
  if (kind === "notFound" || kind === "other") continue;
  checked += 1;

  const html = readFileSync(file, "utf8");
  const fail = (message) => failures.push(`${rel}: ${message}`);

  // --- title ---
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  if (!titleMatch) {
    fail("no <title>");
  } else {
    const title = unescapeHtml(titleMatch[1]).trim();
    const length = Array.from(title).length;
    if (length === 0) fail("empty <title>");
    if (length > TITLE_LIMIT) fail(`title ${length} chars (limit ${TITLE_LIMIT}): ${title}`);
    // A title clamped mid-phrase reads as broken on the SERP even when it fits.
    // The trailing word must be matched after whitespace, not after a word
    // boundary: `\b` sits between "é" and "e" in "expliquée", which flagged a
    // perfectly good French title as truncated.
    if (/[,:;–—-]$/.test(title) || /\s(and|or|not|the|a|de|et|und|e|di|per|con)$/i.test(title)) {
      fail(`title ends mid-phrase: ${title}`);
    }
    const seen = titles.get(title);
    if (seen) fail(`duplicate title, also on ${seen}`);
    else titles.set(title, rel);
  }

  // --- description ---
  const descMatch = html.match(/<meta name="description" content="([\s\S]*?)"\s*\/?>/);
  if (!descMatch) {
    fail("no meta description");
  } else {
    const description = unescapeHtml(descMatch[1]).trim();
    const length = Array.from(description).length;
    if (length === 0) fail("empty meta description");
    if (length > DESCRIPTION_LIMIT) {
      fail(`description ${length} chars (limit ${DESCRIPTION_LIMIT})`);
    }
  }

  // --- canonical ---
  if (!/<link rel="canonical" href="https:\/\/drafttodone\.io/.test(html)) {
    fail("no absolute canonical");
  }

  // --- JSON-LD ---
  const blocks = [...html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  )];
  if (blocks.length === 0) {
    fail("no JSON-LD");
  }

  const types = new Set();
  for (const [, raw] of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(unescapeHtml(raw));
    } catch (error) {
      fail(`JSON-LD does not parse: ${error.message}`);
      continue;
    }
    collectTypes(parsed, types);
  }

  for (const forbidden of FORBIDDEN_NODES) {
    if (types.has(forbidden)) {
      fail(`emits ${forbidden} — the editorial standards page rules this out in 4 locales`);
    }
  }

  for (const required of REQUIRED_NODES[kind] ?? []) {
    // The editorial page is a solution route without the commercial nodes.
    if (kind === "solution" && types.has("AboutPage") && required === "Organization") continue;
    if (!types.has(required)) fail(`missing ${required} node (${kind} page)`);
  }

  // --- answer-first block ---
  if (kind !== "siteMap" && !html.includes("data-speakable")) {
    fail("no [data-speakable] answer-first block");
  }
}

if (checked === 0) {
  console.error("seo-gate: no pages found in out/ — run `npm run build` first.");
  process.exit(1);
}

if (failures.length > 0) {
  console.error(`seo-gate: ${failures.length} failure(s) across ${checked} pages\n`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log(`seo-gate: ${checked} pages, all checks green.`);
