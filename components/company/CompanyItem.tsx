import React from "react";
import Image from "next/image";

export default function CompanyItem() {
  return (
    <div
      className="container mb-[200px] pt-0  max-md:mb-16"
      data-aos="fade-down"
    >
      <div className="grid grid-cols-3 gap-x-[66px] max-md:grid-cols-1  max-md:gap-10">
        <div className={`flex flex-col items-center justify-center`}>
          <Image src="/images/company1.png" alt="" width={144} height={144} />
          <h3 className="mb-4 mt-2 text-center text-2xl text-primary  max-md:mb-2">
            Большой опыт
          </h3>
          <p className="text-center text-xl text-[#FFFFFF]  max-md:text-base">
            Почти 3 года в Faject мы занимаемся разработкой и дизайном для
            компаний по всему миру. Мы помогаем компаниям создавать сервисы и
            сайты для людей.
          </p>
        </div>
        <div className={`flex flex-col items-center justify-center`}>
          <Image src="/images/company2.png" alt="" width={144} height={144} />
          <h3 className="mb-4 mt-2 text-center text-2xl text-primary  max-md:mb-2">
            Большой опыт
          </h3>
          <p className="text-center text-xl text-[#FFFFFF]  max-md:text-base">
            Почти 3 года в Faject мы занимаемся разработкой и дизайном для
            компаний по всему миру. Мы помогаем компаниям создавать сервисы и
            сайты для людей.
          </p>
        </div>
        <div className={`flex flex-col items-center justify-center`}>
          <Image src="/images/company3.png" alt="" width={144} height={144} />
          <h3 className="mb-4 mt-2 text-center text-2xl text-primary  max-md:mb-2">
            Большой опыт
          </h3>
          <p className="text-center text-xl text-[#FFFFFF]  max-md:text-base">
            Почти 3 года в Faject мы занимаемся разработкой и дизайном для
            компаний по всему миру. Мы помогаем компаниям создавать сервисы и
            сайты для людей.
          </p>
        </div>
      </div>
    </div>
  );
}
