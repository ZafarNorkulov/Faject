"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tag from "@/components/Tag";
import WhiteButton from "../buttons/WhiteButton";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import api from "@/lib/api";

const Header = () => {
  const { t } = useTranslation();

  const [category, setCategory] = useState<any[]>([]);
  const [activeId, setActiveId] = useState(category[0]?.id || null);
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/main/category/");
        setCategory(response?.data);
        setActiveId(response?.data[0]?.id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  return (
    <div className="flex w-screen overflow-x-hidden max-md:pb-16 max-md:pt-12 md:h-[900px]">
      <div className="container relative ">
        <div className="flex size-full  max-md:flex max-md:flex-col-reverse max-md:items-center">
          <div
            className="flex w-[763px] flex-col gap-10 max-md:w-full md:pt-[150px]"
            data-aos="fade-right"
          >
            <div className="flex gap-4 max-md:overflow-x-scroll">
              {category?.map((item) => (
                <Tag
                  text={item?.name}
                  key={item?.id}
                  active={item?.id === activeId}
                  onClick={() => setActiveId(item?.id)}
                />
              ))}
            </div>
            <div>
              <h1 className="text-[56px] uppercase max-md:text-[32px]">
                САЙТЫ ПОД КЛЮЧ{" "}
                <p className="text-primary"> Приносящие прибыль</p>
                Вашему бизнесу
              </h1>
              <p className="text-[20px] text-white max-md:text-[16px]">
                {t("title")}
              </p>
            </div>
            <Link href="#contact" className="h-[61px] w-[312px] max-md:w-full">
              <WhiteButton
                text="ОСТАВИТЬ ЗАЯВКУ"
                rounded="rounded-[16px]"
                bgColor={true}
              />
            </Link>
          </div>
          <div
            className="md:absolute md:right-[-330px] md:top-0 md:h-full  md:w-[878px]"
            data-aos="fade-left"
          >
            <Image
              src="/images/motion.png"
              width={1000}
              height={900}
              alt="header"
              className="w-[900px] object-contain max-md:size-[300px] md:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
