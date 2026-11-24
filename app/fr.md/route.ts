import { homeMarkdown } from "../home-markdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(homeMarkdown("fr"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
