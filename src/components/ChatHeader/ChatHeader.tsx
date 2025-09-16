// src/components/ChatHeader.tsx
import React from "react";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
      {/* Title + Model Info */}
      <div>
        <div className="text-sm font-semibold text-gray-800">
          Chat with ChatGPT
        </div>
        <div className="text-xs text-gray-500">
          GPT-4o — Sep 16, 2025
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md border border-gray-300 transition">
          Regenerate
        </button>
        <button className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md shadow-sm transition">
          Clear
        </button>
      </div>
    </div>
  );
}
