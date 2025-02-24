import Link from "next/link";
import { JobsFormData } from "./JobsFormData";
import { useState } from "react";

const JobsFormComponents = () => {
  const [showMoreJobs, setShowMoreJobs] = useState(10);
  return (
    <div id="jobsFormId" className="bg-white">
      <div className="container mx-auto p-5">
        <h3 className="text-center text-xl text-red-600">
          New Jobs Form Available
        </h3>
        <ul>
          {JobsFormData?.slice(0, showMoreJobs).map((jobform, index) => {
            return (
              <li key={index} className="text-black hover:bg-slate-400 p-3">
                <Link href={jobform?.thirdHref}>{jobform.second}</Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setShowMoreJobs((prev) => prev + 10)}
          className="bg-blue-600 text-white w-1/4 my-3 rounded-md hover:bg-blue-500"
        >
          show more
        </button>
      </div>
    </div>
  );
};
export default JobsFormComponents;
