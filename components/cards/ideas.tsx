import React from "react";
import { ideas, Idea } from "@/data/dummyData";
import Link from "next/link";

const IdeasCard = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-4 items-center">
      {ideas.map((idea: Idea) => (
        <Link href={`/courses/ideas/${idea.id}`}>
          <div className="flex bg-[#282828] p-4 items-center justify-between rounded-lg">
            <div className="text-center text-zinc-100 text-base font-medium font-plus-jakarta-sans leading-tight">
              {idea.name}
            </div>
            <button className="bg-[#353535] text-zinc-100 text-base font-light font-plus-jakarta-sans p-2 rounded-md leading-tight">
              <a href="">Talk to us</a>
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

const Ideas = () => {
  return (
    <div>
      <div className="text-zinc-500 text-sm font-normal flex flex-col gap-y-4 font-plus-jakarta-sans leading-[14px]">
        Ideas
        <IdeasCard />
      </div>
    </div>
  );
};

export default Ideas;