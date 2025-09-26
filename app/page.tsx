"use client";

export default function HomePage() {
  function openSTTLive() {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/stt-live`;
  }

  function openFlashers() {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/flashers`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6 flex flex-col items-center justify-center">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            CMU Module
          </h1>
          <p className="text-gray-600 mt-2">Speech Recognition & Flasher Tools</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={openSTTLive}
            className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-3 group"
          >
            <svg 
              className="w-6 h-6 group-hover:scale-110 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <span className="font-semibold text-lg">STT Live</span>
          </button>
          
          <button
            onClick={openFlashers}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-3 group"
          >
            <svg 
              className="w-6 h-6 group-hover:scale-110 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-semibold text-lg">Flashers</span>
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Powered by CMU-Formax Platform
        </div>
      </div>
    </div>
  );
