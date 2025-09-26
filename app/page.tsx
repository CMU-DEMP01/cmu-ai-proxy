"use client";

export default function HomePage() {
  function openSTTLive() {
    window.location.href = "/stt-live";
  }

  function openFlashers() {
    window.location.href = "/flashers";
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">AI Proxy App</h1>

      <div className="space-y-4">
        <button
          onClick={openSTTLive}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          STT Live
        </button>

        <button
          onClick={openFlashers}
          className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Flashers
        </button>
      </div>
    </div>
  );
}
