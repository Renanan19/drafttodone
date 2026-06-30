import { getAnswerEngineData } from "../answer-engine-content";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getAnswerEngineData(), {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}

