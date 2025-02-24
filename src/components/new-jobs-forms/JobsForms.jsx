"use client";

import Image from "next/image";
import { useState } from "react";
import { JobsFormData } from "./JobsFormData";

const JobsForms = () => {
  const [showMoreJobs, setShowMoreJobs] = useState(10);
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
        <div className="content text-black text-sm p-2 h-[28rem] overflow-y-auto">
          {JobsFormData?.slice(0, showMoreJobs).map((item, index) => (
            <div
              key={index}
              className="jobscard text-red-700 hover:bg-slate-400"
            >
              <span className="text-xl mx-2">🆕</span> {item?.second}
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowMoreJobs((prev) => prev + 10)}
          className="bg-blue-600 text-white w-full my-3 rounded-md"
        >
          show more
        </button>
      </div>

      <footer className="bg-green-600 text-center p-3 text-sm sm:text-xl cursor-pointer">
        Contact Us to fill forms By click on whatsApp Icon
      </footer>
      <div
        className="w-7 h-7 sm:w-10 sm:h-10 animate-bounce rounded-full border bg-black border-black fixed bottom-10 right-10 cursor-pointer"
        onClick={handleClick}
      >
        {" "}
        <Image
          src="/220px-WhatsApp.svg.webp"
          className="w-full h-full"
          width={20}
          height={20}
          alt="whatsapp logo"
        />
      </div>
    </div>
  );
};
export default JobsForms;
