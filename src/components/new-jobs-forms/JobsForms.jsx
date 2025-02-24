"use client";

import Image from "next/image";
import { useState } from "react";

const JobsForms = () => {
  const [showJobsForm, setShowJobsForms] = useState(true);
  const handleClick = () => {
    window.open("https://wa.me/+919086269401", "_blank"); // Replace with your phone number
  };
  return (
    <div
      className={
        showJobsForm
          ? "bg-white max-w-prose max-h-auto fixed z-40 inset-3 mx-auto top-20 shadow-lg drop-shadow-xl flex flex-col justify-between rounded-md shadow-cyan-700"
          : "hidden"
      }
    >
      <div className="px-5 pt-4">
        <div className="close button flex justify-between border-b-2">
          <h3 className="text-sm sm:text-xl text-red-500 animate-pulse text-center">
            New Jobs Form Available
          </h3>
          <button
            onClick={() => setShowJobsForms(false)}
            className="bg-black text-white px-2 py-1 rounded-full hover:bg-red-400 hover:text-black transition-all"
          >
            X
          </button>
        </div>
        <div className="content text-black text-sm sm:text-xl p-2 h-[28rem] overflow-y-auto">
          {Array.from({ length: 333 }).map((item) => (
            <div
              key={item}
              className="jobscard text-red-700 hover:bg-slate-400"
            >
              <span className="text-xl mx-2">🆕</span> it forms and others
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-green-600 text-center p-3 text-sm sm:text-xl cursor-pointer">
        Contact Us to fill forms By click on whatsApp Icon
        <div
          className="w-7 h-7 sm:w-20 sm:h-20 animate-bounce rounded-full border bg-black border-black fixed bottom-10 right-10 cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src="/220px-WhatsApp.svg.webp"
            className="w-full h-full"
            width={20}
            height={20}
            alt="whatsapp logo"
          />
        </div>
      </footer>
    </div>
  );
};
export default JobsForms;
