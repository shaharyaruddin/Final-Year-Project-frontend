import ChatArea from "@/components/ChatArea/ChatArea";
import React, { Suspense } from "react";

export default function SimpleChatPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col">
        <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading Chat...</div>}>
          <ChatArea />
        </Suspense>
      </div>
    </div>
  );
}



