"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title";
import WhiteButton from "../buttons/WhiteButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

const Services = () => {
  const [services, setServices] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/service/");
        setServices(response?.data?.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  return (
    <div className="container my-[120px] max-md:my-16" data-aos="fade-down">
      <div className="mb-10">
        <Title text="НАШИ УСЛУГИ" center={false} />
      </div>
      <div className="h-auto gap-[30px] max-md:mb-4 max-md:flex max-md:overflow-x-scroll md:grid md:grid-cols-3">
        {services?.slice(0, 4).map((service: any) => (
          <div
            key={service.id}
            onClick={() => router.push(`/services/${service?.id}`)}
            className="relative  flex w-[90%] flex-col justify-between rounded-[20px] border  border-[#FFFFFF33] p-6 max-md:shrink-0 max-md:px-6 max-md:py-4"
          >
            <h3 className="mt-2 text-2xl text-white max-md:mb-2 max-md:text-[24px] md:mb-6">
              {service?.title}
            </h3>
            <p className="mb-6 text-xl max-md:mt-2 max-md:grow max-md:text-base">
              {service?.short_description}
            </p>
            <div className="h-12 w-[176px]">
              <WhiteButton text="ПОДРОБНЕЕ" bgColor img />
            </div>
            <img
              src={service?.icon}
              alt={service?.title}
              className="absolute right-6 w-[48px] h-[48px] top-6 max-md:top-4"
            />
          </div>
        ))}

        <div className="relative col-span-2 rounded-[20px]  bg-gradient-primary px-8 py-6 max-md:hidden">
          <Title text="ВСЕ УСЛУГИ" />
          <p className="text-xl max-md:mt-2 max-md:grow max-md:text-base">
            Ознакомьтесь с полным спектром услуг нашего агенства. Мы можем
            предоставить полную поддержку для диджитал бизнеса на всех стадиях.
            Оказываем услуги в кратчайшие сроки и с соблюдением качества.
          </p>

          <div
            onClick={() => router.push("/services")}
            className="absolute bottom-8 right-8 h-12 w-[180px]"
          >
            <WhiteButton text="СМОТРЕТЬ" bgColor={false} img />
          </div>
        </div>
      </div>
      <div className="relative rounded-[20px]  bg-gradient-primary px-8 py-6 md:hidden ">
        <Title text="ВСЕ УСЛУГИ" />
        <p className="mt-4 line-clamp-2 text-xl max-md:text-[16px]">
          Ознакомьтесь с полным спектром услуг нашего агенства. Мы можем
          предоставить полную поддержку для диджитал бизнеса на всех стадиях.
          Оказываем услуги в кратчайшие сроки и с соблюдением качества.
        </p>
        <div
          onClick={() => router.push("/services")}
          className="mt-6 h-12 w-[180px]"
        >
          <WhiteButton text="СМОТРЕТЬ" bgColor={false} img />
        </div>
      </div>
    </div>
  );
};

export default Services;
