// src/components/MessageBubble/MessageBubble.tsx
import React from "react";

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
};

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const isSystem = message.role === "system";

  if (isSystem) {
    return (
      <div className="text-center text-xs text-gray-400 my-2 italic">
        {message.text}
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${isUser ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}>
        {isUser ? "ME" : "AI"}
      </div>
      <div className={`${isUser ? "bg-blue-600 text-white rounded-tr-none" : "bg-gray-100 text-gray-800 rounded-tl-none"} rounded-2xl px-4 py-2.5 max-w-[80%] text-sm shadow-sm`}>
        {message.text}
      </div>
    </div>
  );
}
