// src/components/ChatHeader/ChatHeader.tsx
import React from "react";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
      <div>
        <div className="text-base font-bold text-gray-900">
          AI Assistant
        </div>
        <div className="text-[11px] text-green-500 font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          Online & Ready
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-semibold uppercase tracking-wider">
          FYP Project
        </div>
      </div>
    </div>
  );
}
