// src/app/page.tsx
import ChatArea from "@/components/ChatArea/ChatArea";
import RightColumn from "@/components/RightColumn/RightColumn";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default function ChatGPTPage() {
  return (
    <div className="min-h-screen h-screen flex bg-[#0b1220] text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full">
        <ChatArea />
      </div>
      <RightColumn />
    </div>
  );
}
