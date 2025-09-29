"use client";

import { Mic, Zap } from "lucide-react";

export default function HomePage() {
  function openSTTLive() {
    window.location.href = "/stt-live";
  }

  function openFlashers() {
    window.location.href = "/flashers";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-md w-full text-center border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          CMU App
        </h1>
        <p className="text-gray-600 mb-8">
          Tools powered by AI for Real-time speech recognition & flashers.
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={openSTTLive}
            className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-3 group"
          >
            <Mic className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-lg">STT Live</span>
          </button>

          <button
            onClick={openFlashers}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-3 group"
          >
            <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-lg">Flashers</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500">
          Powered by <span className="font-semibold">CMU-DEMP</span> Platform
        </div>
      </div>
    </div>
  );
}
