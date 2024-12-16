import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative flex h-[171px] items-center">
      <div
        style={{
          background: "radial-gradient(#9128FA40, #9128FA00 70%)",
        }}
        className=" absolute left-[-200px] -z-10 size-[505px] max-md:left-[-100px] max-md:size-[283px]"
        data-aos="fade-right"
      ></div>
      <div className="container flex items-start gap-4" data-aos="fade-left">
        <Image
          src={"/icons/star.svg"}
          alt="services"
          width={32}
          height={32}
          className="mt-[15px] object-contain max-md:mt-2 max-md:size-6"
        />
        <h1 className="w-[700px] text-[40px] uppercase max-md:text-3xl">
          БЛОГ
        </h1>
      </div>
    </div>
  );
}
