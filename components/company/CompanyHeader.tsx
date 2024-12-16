import Image from "next/image";
import React from "react";

export default function CompanyHeader() {
  return (
    <div className=" relative flex h-[800px] w-screen overflow-x-hidden max-md:h-max max-md:pb-32 max-md:pt-14">
      <div
        style={{
          background: "radial-gradient(#9128FA40, #9128FA00 70%)",
        }}
        className=" absolute left-[-200px] top-1/2 -z-10 size-[505px] -translate-y-1/2 max-md:hidden"
      ></div>
      <div className="container">
        <div className=" flex size-full  max-md:flex-col-reverse">
          <div
            className="flex h-full flex-col  gap-10 max-md:mt-16"
            data-aos="fade-right"
          >
            <div className="flex h-full items-center  max-md:items-start">
              <Image
                src="/icons/star.svg"
                width={32}
                height={32}
                alt=""
                className="mr-4 max-md:mt-2  max-md:size-6  md:mt-[-85px]"
              />
              <div className="flex flex-col  ">
                <h2 className="text-[56px] uppercase text-primary  max-md:text-3xl">
                  мы <span className="text-white">- Faject agency</span>
                </h2>

                <p className="max-w-[600px] text-xl  max-md:mt-4  max-md:w-full  max-md:text-base">
                  Мы помогаем компаниям создавать сервисы и сайты для людей.
                  Делаем бизнес комфортным и удобным в общении с клиентами так,
                  чтобы это было выгодно.
                </p>
              </div>
            </div>
          </div>
          <div
            className="top-0 h-full w-[878px] max-md:w-full  md:absolute  md:right-[-230px]"
            data-aos="fade-left"
          >
            <Image
              src="/images/motion.png"
              width={1000}
              height={900}
              alt="header"
              className=" h-full w-[900px] object-contain  max-md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
