import React from "react";
import gift from "@/public/home/gift.svg";
import Image from "next/image";
const Gift = () => {
  return (
    <div className="bg-white rounded-full gap-x-2 flex items-center justify-center w-[10.2rem] px-3 py-2.5 font-lora">
      <Image src={gift} alt="gift" />
      <div className="text-zinc-800 text-sm font-medium font-plus-jakarta-sans">
        Our gift to you
      </div>
    </div>
  );
};

export default Gift;
