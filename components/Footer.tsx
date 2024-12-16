import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="container flex h-[128px] max-md:h-max max-md:flex-col  md:items-center md:justify-between"
      data-aos="fade-down"
    >
      <div className="flex max-md:flex-col md:items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={144}
            height={48}
            alt="logo"
            className="mr-6 max-md:mb-8"
          />
        </Link>
        <Link
          href={"/documents"}
          className="text-lg text-gray max-md:mb-4 md:ml-14"
        >
          Условия & Положения
        </Link>
        <Link
          href={"/documents"}
          className="text-lg text-gray max-md:mb-4 md:ml-14"
        >
          Политика конфиденциальности
        </Link>
        <p className="text-lg text-gray max-md:mb-8 md:ml-14">
          ©2018—2024 Faject
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src={"/Instagram_logo.svg"}
          width={24}
          height={24}
          alt="facebook"
          className="max-md:mr-4 md:ml-4"
        />
        <Image
          src={"/Telegram_logo.svg"}
          width={24}
          height={24}
          alt="instagram"
          className="max-md:mr-4 md:ml-4"
        />
        <Image
          src={"/whatsapp_logo.svg"}
          width={24}
          height={24}
          alt="twitter"
          className="max-md:mr-4 md:ml-4"
        />
      </div>
    </div>
  );
}
