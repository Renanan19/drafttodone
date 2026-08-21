import { describe, expect, it } from "vitest";
import { ALLOWED_TAGS, tagsIn, toKdpHtml } from "./kdp-description-html";

const allowed = new Set<string>(ALLOWED_TAGS);

describe("toKdpHtml", () => {
  it("wraps blank-line-separated blocks in paragraphs", () => {
    expect(toKdpHtml("One.\n\nTwo.")).toBe("<p>One.</p><p>Two.</p>");
  });

  it("joins wrapped lines into a single paragraph", () => {
    expect(toKdpHtml("A sentence\nsplit over lines.")).toBe("<p>A sentence split over lines.</p>");
  });

  it("marks bold and italic", () => {
    expect(toKdpHtml("**loud** and *quiet*")).toBe("<p><b>loud</b> and <i>quiet</i></p>");
  });

  it("builds bullet and numbered lists", () => {
    expect(toKdpHtml("- one\n- two")).toBe("<ul><li>one</li><li>two</li></ul>");
    expect(toKdpHtml("1. one\n2. two")).toBe("<ol><li>one</li><li>two</li></ol>");
  });

  it("closes a list before the paragraph that follows it", () => {
    expect(toKdpHtml("- one\nAfter.")).toBe("<ul><li>one</li></ul><p>After.</p>");
  });

  it("renders any heading level as h4, the largest KDP shows", () => {
    expect(toKdpHtml("## Title")).toBe("<h4>Title</h4>");
    expect(toKdpHtml("###### Title")).toBe("<h4>Title</h4>");
  });

  /**
   * The page tells the reader that everything outside the eleven allowed tags
   * is stripped. That is a published claim, so it is held by a test rather
   * than by the converter's good intentions.
   */
  it("never emits a tag outside the KDP subset", () => {
    const hostile = [
      "<script>alert(1)</script>",
      '<img src=x onerror="alert(1)">',
      "<div class='x'>block</div>",
      "<a href='https://example.com'>link</a>",
      "<h1>too big</h1>",
      "- <span>inside a list</span>",
      "**<iframe src='x'></iframe>**",
    ].join("\n\n");

    const html = toKdpHtml(hostile);
    for (const tag of tagsIn(html)) {
      expect(allowed.has(tag), `unexpected tag <${tag}>`).toBe(true);
    }
  });

  it("escapes angle brackets and ampersands so markup cannot be injected", () => {
    const html = toKdpHtml("<script>alert(1)</script>");
    expect(html).not.toContain("<script");
    expect(html).toContain("&lt;script&gt;");
    expect(toKdpHtml("Tom & Jerry")).toBe("<p>Tom &amp; Jerry</p>");
  });

  it("returns an empty string for empty input", () => {
    expect(toKdpHtml("")).toBe("");
    expect(toKdpHtml("\n\n  \n")).toBe("");
  });
});
