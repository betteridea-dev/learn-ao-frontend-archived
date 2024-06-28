import Image from "next/image";
import React from "react";

interface MiniButtonProps {
    bg: string;
    image: string;
}

const MiniButton: React.FC<MiniButtonProps> = ({ bg, image }) => {
  return (
    <div>
      <div className={`w-[66.50px] h-10 p-2.5 ${bg} rounded-md justify-center items-center gap-[13.12px] inline-flex`}>
        <Image src={image} alt={image} />
      </div>
    </div>
  );
};

export default MiniButton;