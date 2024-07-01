import React, { useState } from "react";
import gift from "@/public/home/gift.svg";
import small from "@/public/home/small-gift.svg"
import cross from "@/public/home/cross.svg"
import Image from "next/image";

const Gift = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <div
        onClick={togglePopup}
        className="bg-white rounded-full gap-x-2 flex items-center justify-center w-[10.2rem] px-3 py-2.5 font-lora cursor-pointer"
      >
        <Image src={small} alt="gift" />
        <div className="text-zinc-800 text-sm font-medium font-plus-jakarta-sans">
          Our gift to you
        </div>
      </div>

      {isPopupVisible && (
        <>
          <div className="inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-40 fixed"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#101010] border border-[#282828] relative p-6 rounded-lg shadow-lg w-3/4 lg:w-[30vw]">
              <p className="text-white mb-4 p-0 lg:p-10 text-center">
                Win 1AR for completing all the live courses here. Rush! Only for
                the first 5 people to finish all courses.
              </p>
              <button onClick={togglePopup} className="absolute top-3 right-3">
                <Image src={cross} alt="close" />
              </button>
              <div className="absolute bottom-0 left-0 hidden lg:flex">
                <Image src={gift} alt="gift" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Gift;