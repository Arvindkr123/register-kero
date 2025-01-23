import React from "react";
import Image from "next/image";

const FaqQuestions = () => {
  return (
    <div className="bg-white p-5 sm:p-16">
      <main className="flex flex-col items-center justify-center gap-7">
        <header>
          <h1 className="text-center text-[#EB8D15]">FAQ</h1>
          <h1 className="text-2xl text-black font-bold  tracking-wider my-4">
            Frequent Ask Questions{" "}
          </h1>
        </header>

        <div className="card flex items-center justify-between  gap-16 text-black w-auto xl:w-[1272px] h-[70px] border-2 p-5 relative overflow-hidden rounded-l-md">
          <Image
            src="/faq/letBar.png"
            width={10}
            height={0}
            alt="left bar"
            className="absolute -top-[1px] -left-[4px]"
          />
          <h1 className="bg-white z-30">
            Can I recover deleted files from desktop with this software?
          </h1>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9 8L9.90002 7L2.90002 0H1.90002L0.900024 1V3L6.90002 8L0.900024 14V15L1.90002 16H2.90002L9.90002 9L10.9 8Z"
              fill="#555555"
            />
          </svg>
        </div>

        <div className="card flex items-center justify-between  gap-16 text-black w-auto xl:w-[1272px] h-[70px] border-2 p-5 relative overflow-hidden rounded-l-md">
          <Image
            src="/faq/letBar.png"
            width={10}
            height={0}
            alt="left bar"
            className="absolute -top-[1px] -left-[4px]"
          />
          <h1 className="bg-white z-30">
            Can I recover deleted files from desktop with this software?
          </h1>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9 8L9.90002 7L2.90002 0H1.90002L0.900024 1V3L6.90002 8L0.900024 14V15L1.90002 16H2.90002L9.90002 9L10.9 8Z"
              fill="#555555"
            />
          </svg>
        </div>

        <div className="card flex items-center justify-between  gap-16 text-black w-auto xl:w-[1272px] h-[70px] border-2 p-5 relative overflow-hidden rounded-l-md">
          <Image
            src="/faq/letBar.png"
            width={10}
            height={0}
            alt="left bar"
            className="absolute -top-[1px] -left-[4px]"
          />
          <h1 className="bg-white z-30">
            Can I recover deleted files from desktop with this software?
          </h1>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9 8L9.90002 7L2.90002 0H1.90002L0.900024 1V3L6.90002 8L0.900024 14V15L1.90002 16H2.90002L9.90002 9L10.9 8Z"
              fill="#555555"
            />
          </svg>
        </div>
        <div className="card flex items-center justify-between  gap-16 text-black w-auto xl:w-[1272px] h-[70px] border-2 p-5 relative overflow-hidden rounded-l-md">
          <Image
            src="/faq/letBar.png"
            width={10}
            height={0}
            alt="left bar"
            className="absolute -top-[1px] -left-[4px]"
          />
          <h1 className="bg-white z-30">
            Can I recover deleted files from desktop with this software?
          </h1>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9 8L9.90002 7L2.90002 0H1.90002L0.900024 1V3L6.90002 8L0.900024 14V15L1.90002 16H2.90002L9.90002 9L10.9 8Z"
              fill="#555555"
            />
          </svg>
        </div>

        <div className="card flex items-center justify-between  gap-16 text-black w-auto xl:w-[1272px] h-[70px] border-2 p-5 relative overflow-hidden rounded-l-md">
          <Image
            src="/faq/letBar.png"
            width={10}
            height={0}
            alt="left bar"
            className="absolute -top-[1px] -left-[4px]"
          />
          <h1 className="bg-white z-30">
            Can I recover deleted files from desktop with this software?
          </h1>
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9 8L9.90002 7L2.90002 0H1.90002L0.900024 1V3L6.90002 8L0.900024 14V15L1.90002 16H2.90002L9.90002 9L10.9 8Z"
              fill="#555555"
            />
          </svg>
        </div>

        <button className="bg-[#1C4670] p-2 flex justify-center items-center gap-3">
          Show more{" "}
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66667 6H12.5M8.33333 1L12.7441 5.41074C13.0695 5.73618 13.0695 6.26382 12.7441 6.58926L8.33333 11"
              stroke="white"
              stroke-width="1.67"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </main>
    </div>
  );
};

export default FaqQuestions;
