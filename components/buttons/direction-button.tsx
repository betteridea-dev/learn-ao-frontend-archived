import Image from "next/image";
import React from "react";

interface DirectionProps {
  bgColor?: string;
  textColor?: string;
  text?: string;
  icon?: string;
  onClick?: () => void;
}

const Direction: React.FC<DirectionProps> = ({
  bgColor,
  textColor,
  text,
  icon,
  onClick,
}) => {
  return (
    <button
      className={`w-[38vw] h-[50px] px-2.5 py-[15px] cursor-pointer ${bgColor} ${textColor} text-base font-semibold font-plus-jakarta-sans leading-tight rounded-md justify-center items-center gap-2.5 inline-flex`}
      onClick={onClick}
    >
      {text !== "Next exercise" && icon && (
        <Image src={icon} alt="icon" className="mr-2" width={20} height={20} />
      )}
      {text}
      {text === "Next exercise" && icon && (
        <Image src={icon} alt="icon" className="ml-2" width={20} height={20} />
      )}
    </button>
  );
};

export default Direction;
