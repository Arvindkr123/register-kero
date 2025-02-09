"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MainHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#ffffff] shadow-md border-b-2 border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-10 py-5">
        {/* Logo Section */}
        <div className="logo flex items-center relative">
          <div className="absolute -top-[12px] -left-[16px]">
            <Image
              src="/chrimishatlogo.png" // Ensure this file is in the "public" folder
              alt="chrimishatlogo.png"
              width={35}
              height={34}
              priority
            />
          </div>
        <p className="text-black text-2xl sm:text-4xl font-bold">RegisterKeroHelp24X7</p>
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <li
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-orange-500 cursor-pointer"
            >
              Home
            </li>

            <li className="hover:text-orange-500 cursor-pointer flex items-center">
              <Link href="#ourServicesId">
                Our Services <span className="ml-1 text-sm">▼</span>
              </Link>
            </li>

            <li className="hover:text-orange-500 cursor-pointer">
              <Link href={"#blogRegisterId"}>Works</Link>
            </li>
            <Link
              href={"#contactUsRegister"}
              className="hover:text-orange-500 cursor-pointer"
            >
              Contact Us
            </Link>
            <li className="hover:text-orange-500 cursor-pointer">
              <Link href={"#aboutIdRegisterKero"}>About Us</Link>
            </li>
          </ul>

          {/* Search Icon */}
          {/* <div className="cursor-pointer">
            <Image
              src="/searchLogo.png" // Ensure this file is in the "public" folder
              alt="Search Icon"
              width={20}
              height={20}
            />
          </div> */}

          {/* CTA Button */}
          {/* <button className="bg-[#FFA229] text-white px-4 py-2 rounded-md hover:bg-[#FFA229]">
            Talk An Expert
          </button> */}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-gray-500 focus:outline-none focus:text-gray-700"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full z-20 bg-black text-white p-10 overflow-x-hidden transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Close Button */}
          <div
            onClick={() => setOpen(false)}
            className="cursor-pointer text-xl mb-8"
          >
            X
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-orange-500 cursor-pointer"
            >
              Home
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <Link href="#ourServicesId">Our Services</Link>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <Link href={"#blogRegisterId"}>Works</Link>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <Link href={"#contactUsRegister"}>Contact Us</Link>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <Link href={"#aboutIdRegisterKero"}>About Us</Link>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
