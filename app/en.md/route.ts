import { homeMarkdown } from "../home-markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(homeMarkdown("en"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
