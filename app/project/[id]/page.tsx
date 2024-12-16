"use client";
import TransparentButton from "@/components/buttons/TransparentButton";
import WhiteButton from "@/components/buttons/WhiteButton";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { usePathname, useRouter } from "next/navigation";
import api from "@/lib/api";
import Tag from "@/components/Tag";

interface categoryItem {
  id: number;
  name: string;
}

interface ProjectInfo {
  id: number;
  title: string;
  image: string;
  description: string;
  short_description: string;
  category: categoryItem;
  create_at: string;
}

export default function Case() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const pathname = usePathname();
  const router = useRouter();
  const [infoProject, setIndoProject] = useState<ProjectInfo>();
  useEffect(() => {
    (async () => {
      try {
        const respone = await api.get(pathname);
        setIndoProject(respone.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    })();
  }, [pathname]);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("ru", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);

    return formattedDate;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(#040D1299, #040D1299), url(${infoProject && infoProject.image})`,
        }}
        className="flex h-[620px] bg-cover bg-center bg-no-repeat pl-[164px] pt-[216px] max-md:px-4"
        data-aos="fade-down"
      >
        <div className="max-w-[770px] max-md:w-full">
          <div className="mb-[40px] flex items-center gap-4 max-md:mb-8 max-md:gap-2">
            <Tag text={infoProject && infoProject.category.name} />
            {/* <div className="max-md:hidden">
              <Tag text="ВЕБ РАЗРАБОТКА" />
            </div> */}
            <p className="text-[14px]">
              {infoProject && formatDate(infoProject.create_at)}
            </p>
          </div>
          <div className="flex items-center gap-4 max-md:items-start max-md:gap-2">
            <Image
              src="/icons/star.svg"
              alt=""
              width={32}
              height={32}
              className="max-md:size-6"
            />
            <h1 className="text-[40px] uppercase max-md:text-3xl">
              {infoProject && infoProject.title}
            </h1>
          </div>
          {infoProject && (
            <div
              dangerouslySetInnerHTML={{
                __html: infoProject.short_description,
              }}
              className=" mt-4 text-[20px] max-md:text-base"
            ></div>
          )}
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat max-md:bg-cover  max-md:bg-top md:bg-center"
          style={{
            backgroundImage: "url(/images/gradientBg.png)",
            backgroundPosition: "center calc(-500px)",
            opacity: 0.6,
            zIndex: -1,
          }}
        />
        <div className="container">
          <div className=" px-[30px] py-[120px] max-md:px-0 max-md:py-16">
            {/* <div className="grid grid-cols-2 gap-x-[100px] gap-y-8 max-md:grid-cols-1">
              <div className="flex flex-col" data-aos="fade-right">
                <h2 className="mb-[18px] text-[32px] max-md:text-2xl">
                  ЗАКАЗЧИК
                </h2>
                <p className="leading-8">
                  Portshop – поставщик корабельного оборудования с 1995 года.
                  Компания работает по всей территории СНГ и предоставляет
                  аппаратуру «под ключ».
                </p>
              </div>
              <div className="flex flex-col" data-aos="fade-left">
                <h2 className="mb-[18px] text-[32px] max-md:text-2xl">
                  ЦЕЛЬ ПРОЕКТА
                </h2>
                <p className="leading-8">
                  Разработка веб-сайта для магазина кораблей началась с анализа
                  потребностей потенциальных клиентов и конкурентов. На основе
                  полученных данных был создан удобный интерфейс, позволяющий
                  пользователям легко находить нужную информацию о кораблях, их
                  характеристиках, ценах и условиях покупки.
                </p>
              </div>
              <div className="flex flex-col" data-aos="fade-right">
                <h2 className="mb-[18px] text-[32px] max-md:text-2xl">
                  РЕШЕНИЯ
                </h2>
                <p className="leading-8">
                  Компания является официальным представителем оборудования из
                  Китая, России, Европы. Именно на этом сделан акцент на главном
                  экране сайта. Также предусмотрен быстрый вход в каталог, чтобы
                  подробно изучить продукцию.
                </p>
              </div>
            </div>
            <div className="my-8 flex gap-[60px] max-md:flex-col-reverse">
              <div
                className="flex flex-col justify-center md:w-full"
                data-aos="fade-right"
              >
                <h2 className="mb-[18px] text-[32px] max-md:text-2xl">
                  КОНЦЕПЦИЯ
                </h2>
                <p className="leading-8">
                  Сайт-каталог или сайт-витрина похож на интернет-магазин.
                  Основной упор сделан на карточки товара с фотографиями
                  продукции и характеристиками. Иконки, изображающие позицию в
                  каталоге нарисованы нашим дизайнером.
                </p>
              </div>
              <div
                className="h-[288px] max-w-[510px] rounded-[26px] bg-primary max-md:h-[200px] md:w-full "
                data-aos="fade-left"
              ></div>
            </div>
            <div className="flex gap-[60px] max-md:flex-col">
              <div
                className="flex h-[288px]  max-w-[480px] gap-[60px] max-md:flex-col max-md:gap-10 md:w-full"
                data-aos="fade-right"
              >
                <div className="h-full w-[210px] rounded-[26px] bg-primary max-md:h-[200px] max-md:w-full"></div>
                <div className="h-full w-[210px] rounded-[26px] bg-primary max-md:h-[200px] max-md:w-full"></div>
              </div>
              <div
                className="flex flex-col justify-center md:w-full"
                data-aos="fade-left"
              >
                <p className="leading-8">
                  Заказчик выполняет проекты с нуля, поэтому на сайте важно
                  описать, как проходит процесс работы. Это снимает лишние
                  вопросы у потенциальных клиентов. На сайте процесс изображен в
                  виде карточек с отрисованными нашим дизайнером иконками.
                </p>
              </div>
            </div> */}
            {infoProject && (
              <div
                dangerouslySetInnerHTML={{ __html: infoProject.description }}
              ></div>
            )}

            <div
              className="mt-[64px] flex justify-center gap-10 max-md:hidden max-md:flex-col"
              data-aos="fade-down"
            >
              <div className="h-[48px] w-[270px] ">
                <TransparentButton text="ПЕРЕЙТИ НА САЙТ КЛИЕНТА" img />
              </div>
              <div
                onClick={() => router.push("/project")}
                className="h-[48px] w-[220px]"
              >
                <WhiteButton text="ДРУГИЕ ПРОЕКТЫ" bgColor img />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
