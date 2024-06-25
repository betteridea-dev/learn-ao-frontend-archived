import React from "react";
import Gift from "../banners/gift";
import Black from "../buttons/black-button";
import Nav from "./nav";

const Hero = () => {
  return (
    <div className="relative w-full h-full">
      <div className="text-right absolute right-8 top-8">
        <span className="text-neutral-400 text-base font-normal font-plus-jakarta-sans leading-tight">
          Dumdum wants help
          <br />
          building groundbreaking
          <br />
          applications with LearnAO,
          <br />
          your one-stop shop for
          <br />
          mastering AO development.
        </span>
      </div>
      <div className="flex flex-col gap-y-6 justify-center items-center">
        <div className="2xl:mt-10 mt-32">
          <Gift />
        </div>
        <div className="font-lora text-[46px] 2xl:text-[56px] text-white flex flex-col leading-[60px] text-center">
          <div>Dumdum wants you.</div>
          <div>
            to help him <span className="italic">LearnAO</span>
          </div>
        </div>
        <div className="flex-col flex justify-center items-center gap-3 text-center">
          <div className="text-right text-neutral-400 text-xs 2xl:text-md font-normal font-plus-jakarta-sans leading-tight">
            Don’t worry if you don’t have a wallet. Simply sign in with Google.
          </div>
          <div>
            <Black text="Sign up" />
          </div>
        </div>
      </div>
      <div className="absolute left-8 bottom-10">
        <Nav />
      </div>
    </div>
  );
};

export default Hero;