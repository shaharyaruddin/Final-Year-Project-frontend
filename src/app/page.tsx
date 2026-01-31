<<<<<<< HEAD
import React from 'react'
=======
import ChatArea from "@/components/ChatArea/ChatArea";
import React, { Suspense } from "react";
>>>>>>> ad7f474daa8cbb681e4078bde6c1cabf773edec9

const page = () => {


  
  return (
<<<<<<< HEAD
    <div>page</div>
  )
=======
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col">
        <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading Chat...</div>}>
          <ChatArea />
        </Suspense>
      </div>
    </div>
  );
>>>>>>> ad7f474daa8cbb681e4078bde6c1cabf773edec9
}

export default page