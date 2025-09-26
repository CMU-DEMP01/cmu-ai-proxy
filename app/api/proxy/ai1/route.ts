import { NextRequest, NextResponse } from "next/server";

const CMU_BASE_URL = process.env.CMU_BASE_URL || "http://192.168.2.120:7173";

// Define valid endpoints and their mappings
const ENDPOINT_MAPPING: Record<string, string> = {
  "/stt/live": "/stt/live", // Map external path to internal path
  "/live": "/stt/live",     // Alternative path
  "/": "/stt/live",         // Default path
  "": "/stt/live",          // Empty path
  "/flasher": "/flasher",   // Flasher endpoint
  "/flashers": "/flasher"   // Alternative flasher endpoint
};



// Common handler
async function handleRequest(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const requestedPath = requestUrl.pathname.replace("/api/proxy/ai1", "");
  console.log("Requested path:", requestedPath);

  // Get the target path from the mapping
  const targetPath = ENDPOINT_MAPPING[requestedPath] || ENDPOINT_MAPPING[""];
  
  // Build the complete target URL
  const targetUrl = new URL(targetPath, CMU_BASE_URL).toString();
  console.log("Redirecting to:", targetUrl);

  // Return immediate redirect response
  return NextResponse.redirect(targetUrl, {
    status: 307,  // Temporary redirect that preserves the HTTP method
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
}

// Export handlers
export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const DELETE = handleRequest;
export const PATCH = handleRequest;
