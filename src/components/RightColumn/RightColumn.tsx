// src/components/RightColumn.tsx
import React from "react";

export default function RightColumn() {
  return (
    <aside className="w-80 min-w-[20rem] bg-white text-black p-5 hidden lg:flex flex-col gap-6 border-l border-gray-200 shadow-sm">
      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold tracking-wide">Conversation Settings</h2>
        <p className="text-xs text-gray-600 mt-1">
          Customize how the assistant responds
        </p>
      </div>

      {/* Tone */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
        <p className="text-xs text-gray-600">Tone</p>
        <p className="text-sm font-medium mt-1">Helpful</p>
      </div>

      {/* System message preview */}
      <div>
        <p className="text-xs text-gray-600 mb-2">System message (preview)</p>
        <div className="text-sm bg-gray-50 border border-gray-200 p-3 rounded-md leading-relaxed">
          You are a helpful assistant. Keep responses concise.
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto text-xs text-gray-500 text-center pt-3 border-t border-gray-200">
        Made with ❤️ — UI only
      </div>
    </aside>
  );
}
