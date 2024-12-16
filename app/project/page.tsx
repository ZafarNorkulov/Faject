"use client";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/homepage/Projects";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaPhone, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import AOS from "aos";
export default function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="pt-[96px] max-md:overflow-hidden max-md:pt-[120px]">
      <div className="relative flex h-[344px] items-center max-md:h-full ">
        <div
          style={{
            background: "radial-gradient(#9128FA40, #9128FA00 70%)",
          }}
          className=" absolute left-[-200px] -z-10 size-[505px] max-md:left-[-100px] max-md:size-[283px]"
        ></div>
        <div className="container flex items-start justify-between max-md:flex-col">
          <div className="flex gap-4" data-aos="fade-right">
            <Image
              src={"/icons/star.svg"}
              alt="services"
              width={32}
              height={32}
              className="mt-[15px] object-contain max-md:mt-[4px] max-md:size-6"
            />
            <h1 className="w-[700px] text-[40px] uppercase max-md:text-3xl">
              ПРОЕКТЫ
            </h1>
          </div>
          <div
            className="max-md:mt-6 max-md:flex max-md:w-full max-md:justify-between md:grid md:grid-cols-2"
            data-aos="fade-left"
          >
            <div className="flex flex-col">
              <div className="mb-6 ml-10 flex items-center max-md:mb-4 max-md:ml-0">
                <FaTelegramPlane className="text-[26px] text-white" />
                <span className="ml-[6px] text-[18px]">@FajectSup</span>
              </div>
              <div className="mb-6 ml-10 flex items-center max-md:mb-4 max-md:ml-0">
                <FaPhone className="text-[22px] text-white" />
                <span className="ml-[6px] text-[18px]">+1 111 111-11-11</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-6 ml-10 flex items-center max-md:mb-4 max-md:ml-0">
                <FaWhatsapp className="text-[26px] text-white" />
                <span className="ml-[6px] text-[18px]">+1 111 111-11-11</span>
              </div>
              <div className="mb-6 ml-10 flex items-center max-md:mb-4 max-md:ml-0">
                <IoIosMail className="text-[26px] text-white" />
                <span className="ml-[6px] text-[18px]">mail@faject.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects seeAll={true} />
      <ContactForm />
    </div>
  );
}
