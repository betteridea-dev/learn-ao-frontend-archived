import React from "react";
import { courses, Course } from "@/data/dummyData";
import clock from "@/public/courses/clock.svg";
import Image from "next/image";

const FundamentalCard: React.FC = () => {
  return (
    <div className="rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-4 items-center">
      {courses.map((course: Course) => (
        <div className="bg-[#353535] h-16 rounded-md flex items-center justify-between px-4">
          <div className="flex gap-3 items-center">
            <div className="text-white text-lg lg:text-xl font-semibold font-plus-jakarta-sans leading-normal">
              {course.name}
            </div>{" "}
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="text-white text-xs lg:text-sm font-normal font-plus-jakarta-sans leading-[14px]">
              {course.exercises} exercises
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="font-plus-jakarta-sans text-white">
              {course.completedExercises}
            </div>
            <div>
              <Image src={clock} alt="Clock" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Fundamentals = () => {
  return (
    <div>
      <div className="text-zinc-500 text-sm font-normal flex flex-col gap-y-4 font-plus-jakarta-sans leading-[14px]">
        Fundamentals
        <FundamentalCard />
      </div>
    </div>
  );
};

export default Fundamentals;
