import Image from "next/image";
import React from "react";

const WhiteButton = ({
  text,
  onClick,
  rounded,
  bgColor,
  img,
}: {
  text: string;
  onClick?: () => void;
  rounded?: string;
  bgColor?: boolean;
  img?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex size-full items-center justify-center font-normal ${rounded ? `${rounded}` : "rounded-full"} ${bgColor ? `bg-primary` : "bg-white"} ${bgColor ? `text-white` : "text-black"} `}
    >
      {text}
      {img &&
        (bgColor ? (
          <Image
            alt=""
            src="/arrow-bottom.svg"
            className="ml-4 size-4 -rotate-90"
            width={12}
            height={12}
          />
        ) : (
          <Image
            alt=""
            src="/arrow-left.svg"
            className="ml-4 size-4"
            width={12}
            height={12}
          />
        ))}
    </button>
  );
};

export default WhiteButton;
