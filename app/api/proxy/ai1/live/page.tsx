"use client";

import { useEffect, useState } from "react";

export default function LivePage() {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLink() {
      // Call backend to get one-time token
      const res = await fetch("/api/auth/link?target=ai1");
      const data = await res.json();

      if (data?.url) {
        setUrl(`${data.url}/live`);
      }
    }
    fetchLink();
  }, []);

  if (!url) {
    return <div className="p-4">Loading Live View...</div>;
  }

  return (
    <iframe
      src={url}
      className="w-full h-screen border-0"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    />
  );
}
