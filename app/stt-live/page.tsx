"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function STTLivePage() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function loadSTTLive() {
      try {
        const res = await fetch("/api/auth/link?target=ai1");
        const data = await res.json();
        if (data.url) {
          setUrl(data.url);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error loading STT Live:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    }
    loadSTTLive();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg">Loading STT Live...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src={url}
        className="w-full h-full border-0"
        sandbox="allow-same-origin allow-scripts allow-forms allow-downloads"
        loading="eager"
      />
    </div>
  );
}