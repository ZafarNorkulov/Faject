import Image from "next/image";
import React from "react";

export default function DoWorkItem({
  img,
  text,
  title,
  className,
}: {
  img: string;
  text: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`mb-[90px] flex flex-col items-center justify-center max-md:mb-10 ${className}`}
    >
      <Image src={img} alt="" width={144} height={144} />
      <h3 className="mb-2 text-center text-2xl">{title}</h3>
      <p className="text-xl text-[#BCBCBC] max-md:text-center max-md:text-base">
        {text}
      </p>
    </div>
  );
}
