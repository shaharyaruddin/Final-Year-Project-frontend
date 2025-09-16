// src/components/Sidebar.tsx
import React from "react";

const IconNew = () => (
  <svg
    className="w-4 h-4 inline-block"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

export default function Sidebar() {
  return (
    <aside className="w-72 min-w-[18rem] bg-white text-black p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-gray-300 hover:bg-gray-100">
          <IconNew />
          <span className="text-sm">New chat</span>
        </button>
        <div className="ml-auto text-xs opacity-60">v1</div>
      </div>

      <div className="flex-1 overflow-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer truncate"
          >
            <div className="text-sm font-medium">Conversation {i + 1}</div>
            <div className="text-xs opacity-60 truncate">
              Recent message preview goes here...
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs opacity-80">
        <div className="mb-1">Model</div>
        <div className="flex items-center gap-2">
          <select className="bg-white border border-gray-300 p-2 rounded-md text-sm w-full">
            <option>GPT-4o</option>
            <option>GPT-4</option>
            <option>GPT-3.5</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
