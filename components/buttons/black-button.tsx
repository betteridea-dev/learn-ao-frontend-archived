import React from "react";

interface BlackProps {
  text: string;
}

const Black: React.FC<BlackProps> = ({ text }) => {
  return (
    <button className="w-32 h-11 rounded-full border border-zinc-100 justify-center items-center gap-2.5 inline-flex">
      <div className="w-5 h-5 bg-zinc-100 rounded-full" />
      <div className="text-zinc-100 font-normal font-plus-jakarta-sans leading-normal">
        {text}
      </div>
    </button>
  );
};

export default Black;
