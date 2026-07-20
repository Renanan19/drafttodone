import { SITE_NAME } from "./blog-content";

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function trimAtWord(value: string, limit: number) {
  const characters = Array.from(clean(value));
  if (characters.length <= limit) return characters.join("");

  const clipped = characters.slice(0, limit + 1).join("");
  const boundary = clipped.lastIndexOf(" ");
  const result = boundary >= Math.floor(limit * 0.72) ? clipped.slice(0, boundary) : clipped.slice(0, limit);

  return result.replace(/[,:;\-–—]+$/u, "").trim();
}

export function seoTitle(value: string) {
  const escapedSiteName = SITE_NAME.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const normalized = clean(value).replace(new RegExp(`\\s*\\|\\s*${escapedSiteName}$`, "i"), "");
  if (Array.from(normalized).length <= TITLE_LIMIT) return normalized;

  const separators = [": ", "? ", " — ", " – "];
  const candidates = separators
    .map((separator) => {
      const index = normalized.indexOf(separator);
      if (index < 0) return "";
      return normalized.slice(0, index + (separator.startsWith("?") ? 1 : 0));
    })
    .filter((candidate) => Array.from(candidate).length >= 24 && Array.from(candidate).length <= TITLE_LIMIT);

  return candidates[0] || trimAtWord(normalized, TITLE_LIMIT);
}

export function seoDescription(value: string) {
  return trimAtWord(value, DESCRIPTION_LIMIT);
}
