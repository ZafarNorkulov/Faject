"use client";
// import api from "@/lib/api";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";

// interface TeamMember {
//   id: number;
//   title: string;
//   short_title: string;
//   short_description: string;
//   image: string;
// }
export default function ServiceHero({ data }: any) {
  return (
    <div
      className="h-[750px] bg-contain bg-center bg-no-repeat pt-[120px] max-md:h-max max-md:bg-cover max-md:bg-bottom max-md:pb-6"
      style={{ backgroundImage: "url(/images/serviceIdBg.png)" }}
    >
      <div className="container h-full">
        <div className="flex h-full items-center justify-between max-md:flex-col-reverse">
          <div className="flex items-start max-md:mt-6" data-aos="fade-right">
            <Image
              src="/icons/star.svg"
              width={32}
              height={32}
              alt=""
              className="mr-4 mt-6 max-md:mt-2 max-md:size-6"
            />
            <div className="flex flex-col ">
              <h1 className="text-[56px] text-primary max-md:text-3xl">
                {data?.serivce && data.serivce.title}
              </h1>
              <h2 className="mb-6 text-[56px] text-[#FFFFFF] max-md:text-3xl">
                {data?.serivce && data.serivce.short_title}
              </h2>
              <p className="max-w-[600px] text-xl max-md:text-base">
                {data?.serivce && data.serivce.short_description}
              </p>
            </div>
          </div>
          <Image
            src={data.serivce && data.serivce.image}
            alt=""
            width={440}
            height={308}
            className="shrink-0"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
}
