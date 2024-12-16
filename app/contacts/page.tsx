"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="bg-cover bg-bottom bg-no-repeat pb-[300px] pt-[96px] max-md:container max-md:pt-14"
      style={{
        backgroundImage: "url(/images/form-bg.png)",
      }}
      data-aos="fade-down"
    >
      <div className="mx-auto max-w-[1112px]">
        <div className="mt-[80px] flex items-center gap-4">
          <Image
            src="/icons/star.svg"
            width={32}
            height={32}
            alt=""
            className="max-md:size-6"
          />
          <h1 className="text-[40px] font-[500] uppercase max-md:text-3xl">
            КОНТАКТЫ
          </h1>
        </div>
        <div className="mt-[56px] flex flex-wrap gap-x-20 gap-y-[56px] max-md:gap-x-10">
          <div className="flex w-[280px] flex-col gap-4">
            <h2 className="text-[32px] font-medium uppercase max-md:text-2xl">
              Директор:
            </h2>
            <h3 className="text-[18px] max-md:text-base">John Doe</h3>
            <p className="text-[18px] max-md:text-base">
              <a href="tel:+73519533890">+7 (3519) 533-890</a> <br />
              faject@studio.pro
            </p>
          </div>
          <div className="flex w-[280px] flex-col gap-4">
            <h2 className="text-[32px] font-medium uppercase max-md:text-2xl">
              Техподдержка:
            </h2>
            <p className="text-[18px] max-md:text-base">
              <a href="tel:+73519533890">+7 (3519) 533-890</a> <br />
              faject@studio.pro
            </p>
          </div>
          <div className="flex w-[280px] flex-col gap-4">
            <h2 className="text-[32px] font-medium uppercase max-md:text-2xl">
              Web-отдел:
            </h2>
            <p className="text-[18px] max-md:text-base">
              <a href="tel:+73519533890">+7 (3519) 533-890</a> <br />
              faject@studio.pro
            </p>
          </div>
          <div className="flex w-[285px] flex-col gap-4">
            <h2 className="text-[32px] font-medium uppercase max-md:text-2xl">
              График работы:
            </h2>
            <p className="text-[18px] max-md:text-base">
              Пн-Чт: с 9:00 до 18:00 <br /> Пт: с 9:00 до 17:00 <br /> Сб-Вс:
              Выходной
            </p>
          </div>
          <div className="flex w-[280px] flex-col gap-4">
            <h2 className="text-[32px] font-medium uppercase max-md:text-2xl">
              Реквизиты:
            </h2>

            <p className="text-[18px] max-md:text-base">
              ИНН 1234123412 <br /> КПП 123412345 <br /> ОГРН 1234123412341
              <br /> P/c 12341234123412341234
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
