/**
 * Plain text to the HTML subset Amazon's book description field parses.
 *
 * Deliberately a small hand-rolled converter rather than a markdown library:
 * the page promises that nothing outside the eleven allowed tags survives, and
 * a general markdown renderer emits more than eleven tags. `ALLOWED_TAGS` is
 * the contract, and `kdp-description-html.test.ts` holds it.
 */

/** The only tags KDP's description field renders. */
export const ALLOWED_TAGS = [
  "b",
  "i",
  "u",
  "br",
  "p",
  "h4",
  "h5",
  "h6",
  "ol",
  "ul",
  "li",
] as const;

/** Amazon counts the whole field, markup included. */
export const KDP_DESCRIPTION_LIMIT = 4000;

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const inline = (value: string) =>
  escape(value)
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/(^|[^*])\*([^*]+?)\*/g, "$1<i>$2</i>");

export function toKdpHtml(source: string): string {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let paragraph: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    out.push(`<p>${inline(paragraph.join(" ").trim())}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!list) return;
    const items = list.items.map((item) => `<li>${inline(item)}</li>`).join("");
    out.push(`<${list.type}>${items}</${list.type}>`);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (line === "") {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = /^#{2,6}\s+(.*)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      // h4 is the largest heading KDP renders; h1-h3 are stripped by Amazon.
      out.push(`<h4>${inline(heading[1])}</h4>`);
      continue;
    }

    const bullet = /^[-*•]\s+(.*)$/.exec(line);
    if (bullet) {
      flushParagraph();
      if (!list || list.type !== "ul") {
        flushList();
        list = { type: "ul", items: [] };
      }
      list.items.push(bullet[1]);
      continue;
    }

    const numbered = /^\d+[.)]\s+(.*)$/.exec(line);
    if (numbered) {
      flushParagraph();
      if (!list || list.type !== "ol") {
        flushList();
        list = { type: "ol", items: [] };
      }
      list.items.push(numbered[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return out.join("");
}

/** Every tag name the output actually contains, for the contract test. */
export function tagsIn(html: string): string[] {
  return [...html.matchAll(/<\/?([a-z][a-z0-9]*)\b/gi)].map((match) => match[1].toLowerCase());
}
