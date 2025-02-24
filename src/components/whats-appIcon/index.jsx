"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/+919086269401", "_blank"); // Replace with your phone number
  };

  return (
    <div
      className="w-10 sm:w-20 h-10 sm:h-20 animate-bounce rounded-full border bg-black border-black fixed bottom-10 right-10 cursor-pointer"
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
  );
}
