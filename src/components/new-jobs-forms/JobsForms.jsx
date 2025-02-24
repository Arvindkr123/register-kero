"use client";

import { useState } from "react";

const JobsForms = () => {
  const [showJobsForm, setShowJobsForms] = useState(true);
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
          <h3 className="text-xl text-red-500 animate-pulse text-center">
            New Jobs Form Available
          </h3>
          <button
            onClick={() => setShowJobsForms(false)}
            className="bg-black text-white px-2 py-1 rounded-full hover:bg-red-400 hover:text-black transition-all"
          >
            X
          </button>
        </div>
        <div className="content text-black text-xl p-2 h-[28rem] overflow-y-auto">
          {Array.from({ length: 5 }).map((item) => (
            <div key={item} className="jobscard text-red-700 hover:underline">
              🌟 it forms and others
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-green-600 text-center p-3 text-xl cursor-pointer">
        Contact Us to fill forms
      </footer>
    </div>
  );
};
export default JobsForms;
