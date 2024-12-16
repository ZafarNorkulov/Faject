"use client";
import TransparentButton from "@/components/buttons/TransparentButton";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import api from "@/lib/api";
import Link from "next/link";

interface TeamMember {
  id: number;
  title: string;
  short_description: string;
  image: string;
  descriptions: {
    id: number;
    title: string;
  }[];
}

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [data, setData] = useState<TeamMember[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/service`);
        setData(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <div className="pt-[96px]">
      <div className="relative flex h-[326px] items-center max-md:h-[233px]">
        <div
          style={{
            background: "radial-gradient(#9128FA5A, #9128FA00 80%)",
          }}
          className=" absolute left-[-200px] -z-10 size-[505px]"
        ></div>
        <div
          className="container flex items-start gap-4 max-md:gap-2"
          data-aos="fade-down"
        >
          <Image
            src={"/icons/star.svg"}
            alt="services"
            width={32}
            height={32}
            className="object-contain max-md:mt-[10px] max-md:size-6 md:mt-[15px]"
          />
          <h2 className="w-[700px] text-[40px] uppercase max-md:w-full max-md:text-[32px]">
            ПРЕДОСТАВЛЯЕМ ПОЛНЫЙ КОМПЛЕКС УСЛУГ
          </h2>
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-x-[155px] gap-y-[105px] py-[120px] max-md:grid-cols-1 max-md:gap-y-16 max-md:py-16">
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between gap-6"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={"/icons/star.svg"}
                  width={32}
                  height={32}
                  className="max-md:size-6"
                  alt="star"
                />
                <h1 className="text-[32px] uppercase max-md:text-2xl">
                  {item.title}
                </h1>
              </div>
              <p className="text-[20px] max-md:text-base">
                {item.short_description}
              </p>
              <ul className="grid list-disc grid-cols-1 gap-x-6 pl-8 text-[20px] marker:size-1 marker:text-white max-md:grid-cols-1 max-md:text-base">
                {item.descriptions &&
                  item.descriptions.map((desc) => (
                    <li key={desc.id}>{desc.title}</li>
                  ))}
              </ul>
              <Link href={`/services/${item.id}`}>
                <div className="h-[48px] w-[184px]">
                  <TransparentButton text={"ПОДРОБНЕЕ"} />
                </div>
              </Link>
            </div>
          ))}
      </div>
      <ContactForm />
    </div>
  );
}
