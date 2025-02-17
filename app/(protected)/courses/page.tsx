import React from "react";
import Fundamentals from "@/components/cards/fundamentals";
import Projects from "@/components/cards/projects";
import Image from "next/image";
import dumdum from "@/public/home/dumdum-gun.svg";
import Ideas from "@/components/cards/ideas";

const Courses = () => {

  return (
    <main className="min-h-screen bg-black p-0 text-white relative">
      <div className="bg-black h-full lg:rounded-[4rem] flex  flex-col w-full p-2">
        <div className="absolute bottom-0 -left-4 hidden lg:flex">
          <Image src={dumdum} alt="dumdum" width={80} height={80} />
        </div>
        <div className="text-center text-white text-[20px] lg:text-[34px] font-medium mt-20 font-lora leading-[34px]">
          Take your pick
        </div>
        <div className="flex flex-col p-4 lg:p-10 gap-10">
          <div>
            <Fundamentals />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <Ideas />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Courses;
