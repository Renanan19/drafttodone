import type { ReactElement } from "react";

/**
 * Shared Open Graph / Twitter card renderer.
 *
 * Used by the file-based `opengraph-image.tsx` routes (root, blog article,
 * solution page). Rendered to a 1200×630 PNG at build time by `next/og`'s
 * `ImageResponse`, which works under `output: "export"`.
 *
 * No external font fetch on purpose — keeps the static export deterministic and
 * offline-safe. The layout leans on the Venice "California Light" palette
 * (paper white, ink, mint pedestal glow) so an imageless share never happens.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#0b0b0c";
const MUTED = "#6b6b73";
const MINT = "#10b58a";
const MINT_DEEP = "#0a8f6c";
const PAPER = "#ffffff";

export function OgCard({
  eyebrow,
  title,
  footer,
  titleFontSize = 72,
}: {
  eyebrow: string;
  title: string;
  footer: string;
  titleFontSize?: number;
}): ReactElement {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: PAPER,
        padding: "72px 80px",
        position: "relative",
      }}
    >
      {/* mint pedestal glow — opaque stops only (satori darkens gradients that
          fade to `transparent`, so we fade to the white canvas color instead) */}
      <div
        style={{
          position: "absolute",
          top: -220,
          left: 360,
          width: 640,
          height: 640,
          borderRadius: 9999,
          background: "radial-gradient(circle at 50% 50%, #c4f3e1, #ffffff 70%)",
        }}
      />

      {/* wordmark */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: 12,
            backgroundColor: INK,
          }}
        >
          {/* CSS-drawn check (no glyph font fetch) */}
          <div
            style={{
              width: 13,
              height: 22,
              borderColor: "#a9f0d6",
              borderStyle: "solid",
              borderWidth: "0 4px 4px 0",
              transform: "rotate(45deg)",
              marginTop: -4,
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: INK }}>
          DraftToDone<span style={{ color: MINT }}>.io</span>
        </div>
      </div>

      {/* headline block */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 920 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: MINT_DEEP,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 9999, backgroundColor: MINT }} />
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: titleFontSize,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            color: INK,
          }}
        >
          {title}
        </div>
      </div>

      {/* footer */}
      <div style={{ display: "flex", fontSize: 26, color: MUTED, maxWidth: 980 }}>{footer}</div>
    </div>
  );
}
