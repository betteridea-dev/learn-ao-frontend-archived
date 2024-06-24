import React from "react";
import Gift from "../banners/gift";
import Black from "../buttons/black-button";

const Hero = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center">
      <div>
        <Gift />
      </div>
      <div className="font-lora text-[54px] text-white w-[550px]">
        Dumdum wants you. to help him <span className="italic">LearnAO</span>
      </div>
      <div className="text-right text-neutral-400 text-base font-normal font-['Helvetica Neue'] leading-tight">Don’t worry if you don’t have a wallet. Simply sign in with Google.</div>
      <div>
        <Black text="Sign in" />
      </div>
    </div>
  );
};

export default Hero;
