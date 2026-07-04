export const dynamic = "force-static";

const indexNowKey = "a4b7e2c9d1f03a6b8c5d9e7f102345ab";

export function GET() {
  return new Response(indexNowKey, {
    headers: {
      "Cache-Control": "public, max-age=600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
