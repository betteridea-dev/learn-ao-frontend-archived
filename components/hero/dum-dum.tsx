import React from "react";
import dumdum from "@/public/home/dumdum-gun.svg";
import Image from "next/image";

const DumDum = () => {
  return (
    <div className="flex justify-center absolute bottom-0 w-full">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg px-8 md:px-16 lg:px-24 pt-20 md:pt-24 lg:pt-32 bg-[#CFF0C5] rounded-tl-full rounded-tr-full rounded-bl-2xl rounded-br-2xl flex justify-center items-center">
        <Image src={dumdum} alt="dumdum" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default DumDum;