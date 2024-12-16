import React from "react";
import Title from "../Title";
import Image from "next/image";

const Conditions = ({ data }: any) => {
  return (
    <div className="container py-[120px] max-md:py-16">
      <div className="mb-10">
        <Title text="НАШИ УСЛОВИЯ" center />
      </div>
      <div className="flex flex-col">
        {data?.serivce?.out_terms.map((item: any) => (
          <div
            key={item.id}
            className="flex justify-between border-b border-primary px-4 py-10 max-md:flex-col max-md:py-6"
          >
            <div className="flex" data-aos="fade-right">
              <Image
                src="/icons/star.svg"
                alt=""
                width={32}
                height={32}
                className="max-md:size-6"
              />
              <p className="ml-6 text-[32px] uppercase max-md:mb-4 max-md:text-xl">
                {item.title}
              </p>
            </div>
            <p className="text-2xl max-md:text-base" data-aos="fade-left">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conditions;
