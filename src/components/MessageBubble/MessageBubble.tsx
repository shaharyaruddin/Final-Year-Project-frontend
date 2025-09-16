
// src/components/MessageBubble.tsx
import React from "react";

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
};

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">AI</div>
      )}
      <div className={`${isUser ? "bg-blue-600 text-white ml-12" : "bg-gray-800 text-gray-100 mr-12"} rounded-lg px-4 py-3 max-w-[70%]`}>{message.text}</div>
      {isUser && <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">U</div>}
    </div>
  );
}
