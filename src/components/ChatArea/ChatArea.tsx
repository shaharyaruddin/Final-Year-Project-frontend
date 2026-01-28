"use client";

import React, { useState } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageBubble from "../MessageBubble/MessageBubble";
import { useSearchParams } from "next/navigation";
import { apiService } from "@/services/api.service";

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
};

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
  const searchParams = useSearchParams();
  const companyId = searchParams.get("companyId") || "";

  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "system", text: companyId ? "Conversation started" : "Error: No companyId provided in URL. Please add ?companyId=YOUR_ID to the URL." },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    if (!companyId) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "system",
        text: "Error: companyId is missing. Please add ?companyId=YOUR_ID to the URL.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: inputText.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await apiService.askQuestion(companyId, userMessage.text);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: response.answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "system",
        text: `Error: ${error.message || "Could not connect to the AI assistant."}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <main className="flex-1 flex flex-col h-full bg-white relative">
      {/* Header */}
      <ChatHeader />

      {/* Messages Area */}
      <div className="flex-1 overflow-auto px-6 py-8 space-y-6 scrollbar-hide">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}

        {isLoading && (
          <div className="flex justify-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-gradient-to-t from-white via-white to-transparent">
        <div className="max-w-3xl mx-auto flex gap-2 items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-300 transition-all duration-200 shadow-sm">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 resize-none bg-transparent text-gray-800 rounded-md py-2 px-1 min-h-[44px] max-h-32 placeholder:text-gray-400 focus:outline-none text-sm"
            disabled={isLoading}
          />

          <button
            onClick={handleSend}
            disabled={isLoading || !inputText.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 p-2.5 rounded-xl text-white shadow-md disabled:shadow-none transition-all duration-200 shrink-0"
            title="Send Message"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <IconSend />
            )}
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-3 font-medium">
          Final Year Project — Powerd by Hugging Face AI
        </p>
      </div>
    </main>
  );
}
