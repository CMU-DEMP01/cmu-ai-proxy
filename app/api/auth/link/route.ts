import { NextRequest, NextResponse } from "next/server";

const AI1_URL = process.env.AI1_URL || "http://192.168.2.120:7173/stt/live";
const AI2_URL = process.env.AI2_URL || "http://192.168.2.120:7173/flashers";

// Example: GET /api/auth/link?target=ai1
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("target");

  if (!target || !["ai1", "ai2"].includes(target)) {
    return NextResponse.json({ error: "Invalid target" }, { status: 400 });
  }

  // Return the direct CMU Formax URL based on target
  const url = target === "ai1" ? AI1_URL : AI2_URL;
  return NextResponse.json({
    url,
  });
}
