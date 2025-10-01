"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function STTLivePage() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadSTTLive() {
      try {
        const res = await fetch("/api/auth/link?target=ai1");
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const data = await res.json();

        if (data.url) {
          setUrl(data.url);
        } else {
          setError("No valid URL found.");
          setTimeout(() => router.push("/"), 2000);
        }
      } catch (err: any) {
        console.error("Error loading STT Live:", err);
        setError("Failed to load STT Live.");
        setTimeout(() => router.push("/"), 2000);
      } finally {
        setLoading(false);
      }
    }

    loadSTTLive();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="animate-pulse text-xl font-semibold text-gray-700">
          Loading STT Live...
        </div>
      </div>
    );
  }

  if (error || !url) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-red-600">Error</h1>
          <p className="text-gray-700">{error ?? "Unknown error occurred."}</p>
          <p className="text-sm text-gray-500">Redirecting you back...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src={url}
        className="w-full h-full border-0"
        sandbox="allow-same-origin allow-scripts allow-forms allow-downloads allow-scripts"
        loading="eager"
      />
    </div>
  );
}
