"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FlashersPage() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function loadFlashers() {
      try {
        const res = await fetch("/api/auth/link?target=ai2");
        const data = await res.json();
        if (data.url) {
          setUrl(data.url);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error loading Flashers:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    }
    loadFlashers();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg">Loading Flashers...</div>
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