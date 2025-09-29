import { NextRequest, NextResponse } from "next/server";

const CMU_BASE_URL = process.env.CMU_BASE_URL || "http://localhost:7173";

const ENDPOINT_MAPPING: Record<string, string> = {
  "/stt/live": "/stt/live",
  "/live": "/stt/live",
  "/": "/stt/live",
  "": "/stt/live",
  "/flasher": "/flasher",
  "/flashers": "/flasher",
};

async function handleRequest(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
    const requestedPath = requestUrl.pathname.replace("/api/proxy/ai2", "");
    console.log("Requested path:", requestedPath);

    const targetPath = ENDPOINT_MAPPING[requestedPath] || ENDPOINT_MAPPING[""];
    const targetUrl = new URL(targetPath, CMU_BASE_URL).toString();
    console.log("Proxying to backend:", targetUrl);

    const backendResponse = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
    });

    return new NextResponse(backendResponse.body, {
      status: backendResponse.status,
      headers: backendResponse.headers,
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return NextResponse.json({ error: "Proxy request failed" }, { status: 500 });
  }
}

export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const DELETE = handleRequest;
export const PATCH = handleRequest;
