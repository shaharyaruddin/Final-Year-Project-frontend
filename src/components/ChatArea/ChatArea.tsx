// src/components/ChatArea.tsx
import React from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageBubble from "../MessageBubble/MessageBubble";

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
};

const mockMessages: Message[] = [
  { id: "1", role: "user", text: "Hello!" },
  { id: "2", role: "assistant", text: "Hi there!" },
  { id: "3", role: "system", text: "Conversation started" },
];

const IconSend = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7-7 7M5 5l7 7-7 7"
    />
  </svg>
);

export default function ChatArea() {
  return (
    <main className="flex-1 flex flex-col h-full bg-white text-black">
      {/* Header */}
      <ChatHeader />

      {/* Messages Area */}
      <div className="flex-1 overflow-auto p-6 space-y-5 bg-white">
        {mockMessages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}

        <div className="text-center text-xs text-gray-500 italic">
          — End of conversation —
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex gap-3 items-end bg-gray-50 border border-gray-200 rounded-lg p-2">
          <textarea
            placeholder="Type your message..."
            className="flex-1 resize-none bg-transparent text-black rounded-md p-2 min-h-[48px] placeholder:opacity-60 focus:outline-none"
          />

          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-md flex items-center gap-2 text-white shadow-sm transition">
            <IconSend />
            <span className="text-sm font-medium">Send</span>
          </button>
        </div>

        <div className="mt-2 text-xs text-gray-600 text-center">
          Tip: Press{" "}
          <kbd className="px-1 py-0.5 bg-gray-200 rounded border">Shift</kbd> +{" "}
          <kbd className="px-1 py-0.5 bg-gray-200 rounded border">Enter</kbd> for newline.
        </div>
      </div>
    </main>
  );
}
