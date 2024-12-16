import React from "react";
import Title from "../Title";
import DoWorkItem from "./DoWorkItem";

export default function DoWork({ data }: any) {
  return (
    <div className="container mb-[30px] pt-[120px]">
      <div className="mb-10">
        <Title text="Как мы работаем" center />
      </div>
      <div
        className="mx-auto flex flex-wrap justify-center gap-x-[66px]"
        data-aos="fade-down"
      >
        {data?.serivce?.service &&
          data.serivce.service.map((work: any) => (
            <DoWorkItem
              key={work.id}
              img={`${work.image}`}
              title={work.title}
              text={work.description}
              className="max-w-[321px]"
            />
          ))}
      </div>
    </div>
  );
}
