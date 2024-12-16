import React from "react";
import Title from "../Title";
import Image from "next/image";

export default function Trust() {
  return (
    <div className="container" data-aos="fade-down">
      <div className="mb-10">
        <Title text="ПОЧЕМУ НАМ ДОВЕРЯЮТ?" center={false} />
      </div>
      <div className="flex gap-[64px] max-md:flex-col max-md:items-center max-md:gap-2">
        <div className="shrink-0">
          <Image width={162} height={184} src="/images/company4.png" alt="" />
        </div>
        <div className="grow pl-6 max-md:pl-0">
          <p className="mb-6 text-lg max-md:text-center max-md:text-base">
            Именно столько <span className="text-primary">лет</span> мы делаем
            мир вокруг лучше, создавая IT-продукты и <br /> уникальные решения.
          </p>
          <p className="mb-2 text-lg max-md:text-center max-md:text-base">
            Наша команда{" "}
            <span className="text-primary">успешно прошла кризисы</span>{" "}
            последних лет и стала только <br /> опытнее и сплоченне, готовясь
            покорять новые высоты!
          </p>
        </div>
      </div>
    </div>
  );
}
