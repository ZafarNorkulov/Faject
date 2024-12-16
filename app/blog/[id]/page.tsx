"use client";
import News from "@/components/homepage/News";
import Tag from "@/components/Tag";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
interface blogType {
  id: number;
  title: string;
  short_description: string;
  image: string;
  description: string;
  create_at: string;
  category: {
    id: number;
    name: string;
    category: {
      id: number;
      name: string;
    };
  };
}
export default function Page({ params: { id } }: any) {
  const [blog, setBlog] = useState<blogType>();
  const router = useRouter();
  let formattedDate = "dd.mm.yyyy";
  if (blog) {
    const date = new Date(blog.create_at);
    formattedDate = date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/blog/" + id);
        setBlog(response.data.product[0]);
      } catch (error) {
        router.back();
        console.error("Error fetching data:", error);
      }
    })();
  }, [id, router]);
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `linear-gradient(#040D1299, #040D1299), url(${blog?.image})`,
        }}
        className="flex h-[620px] bg-cover bg-center bg-no-repeat pl-[164px] pt-[216px] max-md:px-4"
        data-aos="fade-down"
      >
        <div className="max-w-[770px]  max-md:w-full">
          <div className="mb-[40px] flex items-center gap-4 max-md:mb-8 max-md:gap-2">
            <Tag text={blog?.category?.category?.name} />
            <Tag text={blog?.category?.name} />
            <p className="text-[14px]">{formattedDate}</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/icons/star.svg"
              alt=""
              width={32}
              height={32}
              className="max-md:size-6"
            />
            <h1 className="text-[40px] uppercase  max-md:text-3xl">
              {blog?.title}
            </h1>
          </div>
          <p
            className=" mt-4 text-[20px]  max-md:text-base"
            dangerouslySetInnerHTML={{ __html: blog?.short_description || "" }}
          />
        </div>
      </div>
      <Image
        className="absolute left-0 top-[420px] -z-10 w-full opacity-50"
        src="/images/gradientBg.png"
        alt=""
        width={1600}
        height={500}
      />
      <div
        className="container overflow-hidden  py-[80px]"
        data-aos="fade-down"
      >
        <p dangerouslySetInnerHTML={{ __html: blog?.description || "" }}></p>
        {/* <h2 className="text-[32px] uppercase max-md:text-2xl ">
          Содержание статьи
        </h2>
        <ol className="mt-4 list-decimal pl-8 text-[20px] marker:size-1 marker:text-white max-md:text-base">
          <li>Зачем нужен бот?</li>
          <li>Этапы разработки</li>
          <li>Перспективы и возможности</li>
        </ol>
        <h2 className="mt-10 text-[32px] uppercase max-md:text-2xl">
          ЗАЧЕМ НУЖЕН БОТ?
        </h2>
        <ol className="mt-4 list-decimal pl-8 text-[20px] marker:size-1 marker:text-white max-md:text-base">
          <li>
            Автоматизация процессов: Чат-боты могут автоматизировать рутинные
            задачи, такие как ответы на часто задаваемые вопросы, помощь в
            оформлении заказов, предоставление информации о продуктах или
            услугах.
          </li>
          <li>
            Экономия времени и ресурсов: Вместо того чтобы отвечать на
            однотипные вопросы клиентов, чат-бот может быстро и эффективно
            обрабатывать эти запросы, освобождая время сотрудников для более
            сложных и важных задач.
          </li>
          <li>
            Улучшение обслуживания клиентов: Чат-бот обеспечивает круглосуточную
            поддержку, что позволяет клиентам получать необходимую помощь в
            любое время и в любом месте.
          </li>
          <li>
            Увеличение продаж: Чат-бот может использоваться для продвижения
            товаров и услуг, предлагая рекомендации, акции и специальные
            предложения, побуждая клиентов к покупке.
          </li>
          <li>
            Сбор обратной связи: Чат-бот позволяет собирать отзывы и мнения
            клиентов о продуктах и услугах компании, что помогает улучшать
            качество и удовлетворенность клиентов.
          </li>
          <li>
            Анализ данных: Чат-бот собирает и анализирует данные о поведении и
            предпочтениях пользователей, что может быть использовано для
            оптимизации маркетинговых кампаний и улучшения продуктов и услуг.
          </li>
        </ol>
        <h2 className="mt-10 text-[32px] uppercase max-md:text-2xl">
          ЭТАПЫ РАЗРАБОТКИ
        </h2>
        <p className="mt-4 pl-6 max-md:text-base">
          Определение целей и задач чат-бота: На этом этапе необходимо
          определить, какие функции и возможности должен предоставлять чат-бот,
          а также его целевую аудиторию и основные сценарии
          использования.Разработка технического задания: На основе поставленных
          задач составляется техническое задание, которое включает требования к
          функциональности чат-бота, его интерфейсу, интеграции с другими
          системами и т. д.Выбор технологии и платформы для разработки: На
          данном этапе выбирается платформа для создания чат-бота (например,
          Яндекс.Диалоги, Microsoft Bot Framework, Alexa Skills Kit и др.) и
          язык программирования для реализации логики чат-бота.
        </p>
        <p className="mt-4 pl-6 max-md:text-base">
          Создание прототипа чат-бота и тестирование: Разрабатывается прототип
          чат-бота с использованием выбранной платформы и языка
          программирования, после чего проводится тестирование и отладка работы
          бота.Внедрение и интеграция с другими системами: После успешного
          тестирования осуществляется внедрение чат-бота в рабочую среду, а
          также интеграция с другими необходимыми системами (CRM, ERP,
          социальными сетями и т.д.).Обучение и поддержка пользователей:
          Разрабатываются инструкции и обучающие материалы для пользователей
          чат-бота, проводятся обучающие сессии и консультации по использованию
          чат-бота.
        </p>
        <h2 className="mt-10 text-[32px] uppercase max-md:text-2xl">
          ПЕРСПЕКТИВЫ И ВОЗМОЖНОСТИ
        </h2>
        <p className="mt-4 pl-6 max-md:text-base">
          Наша веб-студия предлагает новую услугу - разработку бота для вашего
          бизнеса. Мы создадим интеллектуального помощника, который будет
          автоматизировать рутинные процессы, обрабатывать большие объемы данных
          и улучшать клиентский опыт. С нашим ботом вы сможете оптимизировать
          работу компании и сэкономить время сотрудников. Обращайтесь к нам для
          создания эффективного и надежного бота!
        </p> */}
      </div>
      <News title="ДРУГИЕ СТАТЬИ" />
    </div>
  );
}
