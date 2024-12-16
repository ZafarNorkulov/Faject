import React from "react";
import Title from "../Title";
import Image from "next/image";

export default function Advantages({ data }: any) {
  if (!data?.serivce?.advantages) return null;

  return (
    <div
      className="max-mb:pb-0 h-max bg-contain bg-left-top bg-no-repeat pb-[50px] pt-[120px] max-md:h-max max-md:bg-cover max-md:pt-16"
      style={{
        backgroundImage: "url(/images/serviceIdBg2.png)",
        backgroundPosition: "left calc(0px) top calc(-120px)",
      }}
      data-aos="fade-down"
    >
      <div className="container">
        <div className="mb-10">
          <Title text="ПРЕИМУЩЕСТВА" />
        </div>
        <div className="grid grid-cols-3 gap-x-[100px] max-md:grid-cols-1 max-md:gap-x-0">
          {data?.serivce?.advantages &&
            data.serivce.advantages.map((advantage: any) => (
              <div
                key={advantage.id}
                className="mb-[70px] flex items-start max-md:mb-10"
              >
                <Image
                  src="/icons/star.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="max-md:mt-1"
                />
                <p className="ml-8 text-xl max-md:ml-2 max-md:text-base">
                  {advantage.description}asd
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
