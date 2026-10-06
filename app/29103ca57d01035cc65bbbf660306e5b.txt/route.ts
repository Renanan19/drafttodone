export const dynamic = "force-static";

const indexNowKey = "29103ca57d01035cc65bbbf660306e5b";

export function GET() {
  return new Response(indexNowKey, {
    headers: {
      "Cache-Control": "public, max-age=600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
