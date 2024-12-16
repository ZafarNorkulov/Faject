"use client";
import React, { useState, useEffect } from "react";
import Title from "./Title";
import Image from "next/image";
import WhiteButton from "./buttons/WhiteButton";
import api from "@/lib/api";

const ContactForm = () => {
  const [services, setServices] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    service_category: "",
    description: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/service/");
        const data = response?.data?.results;
        setServices(response?.data?.results);

        if (data?.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            service_category: data[0]?.category?.id || "",
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: any = await api.post("/application/", formData);
      if (response?.message === "success send") {
        setFormData({
          full_name: "",
          phone: "",
          email: "",
          service_category:
            services?.length > 0 ? services[0]?.category?.id : "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };
  return (
    <div
      id="contact"
      className="bg-contain bg-bottom bg-no-repeat pt-[120px] max-md:py-16"
      style={{ backgroundImage: "url(/images/form-bg.png)" }}
    >
      <Title text="ДАВАЙТЕ ОБСУДИМ ВАШ ПРОЕКТ" center />
      <div className="h-[752px] w-full  max-md:h-full">
        <div
          style={{ gridTemplateColumns: "428px 1fr" }}
          className="container mt-10 max-md:flex max-md:flex-col  md:grid md:h-[520px] md:gap-[29px]"
        >
          <div
            data-aos="fade-right"
            className="flex size-full max-w-[428px] flex-col justify-between rounded-[20px] border border-[#FFFFFF33] bg-glass px-[40px] py-[30px] max-md:mb-6 max-md:px-4 max-md:py-6"
          >
            <h2 className="text-[32px] font-[500] uppercase max-md:mb-6 max-md:text-2xl">
              Наши контакты
            </h2>
            <div
              className="grid items-center gap-6"
              style={{ gridTemplateColumns: "26px 1fr" }}
            >
              <Image
                className="object-contain"
                src="/icons/mail.svg"
                width={26}
                height={26}
                alt="mail"
              />
              <a
                href="tel:+1 111 111-11-11"
                className="text-[24px] max-md:text-base"
              >
                +1 111 111-11-11
              </a>
              <Image
                className="object-contain"
                src="/icons/phone-call.svg"
                width={26}
                height={26}
                alt="mail"
              />
              <a
                href="mailto:mail@faject.com"
                className="text-[24px] max-md:text-base"
              >
                mail@faject.com
              </a>
              <Image
                className="object-contain"
                src="/icons/telegram.svg"
                width={26}
                height={26}
                alt="mail"
              />
              <a
                href="https://t.me/FajectSup"
                className="text-[24px] max-md:text-base"
              >
                @FajectSup
              </a>
              <Image
                className="object-contain"
                src="/icons/whatsapp.svg"
                width={26}
                height={26}
                alt="mail"
              />
              <a
                href="watsapp:+1 111 111-11-11"
                className="text-[24px] max-md:text-base"
              >
                +1 111 111-11-11
              </a>
            </div>
            <a
              download
              href="/pravki.docx"
              className="h-[48px] w-[199px] max-md:hidden"
            >
              <WhiteButton text="ПОЛУЧИТЬ БРИФ" />
            </a>
          </div>
          <div
            data-aos="fade-left"
            className="size-full w-full rounded-[20px] border border-[#FFFFFF33] bg-glass px-6 py-[30px] max-md:px-4 max-md:py-6"
          >
            <h2 className="mb-[24px] text-[32px] font-[500] uppercase max-md:text-2xl ">
              ОСТАВЬТЕ ЗАЯВКУ
            </h2>
            <div>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    name="full_name"
                    className="w-full rounded-[16px] bg-[#FFFFFF1A] p-4 outline-none"
                    type="text"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Имя"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-[16px]  bg-[#FFFFFF1A] p-4 outline-none"
                    type="number"
                    placeholder="Телефон"
                  />
                </div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[16px]  bg-[#FFFFFF1A] p-4 outline-none"
                  type="text"
                  placeholder="E-mail"
                />
                {/* <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      
                    </SelectGroup>
                  </SelectContent>
                </Select> */}
                <select
                  className="block w-full rounded-[16px] border bg-[#FFFFFF1A] p-4 text-gray outline-none  focus:ring-blue-500"
                  name="service_category"
                  value={formData.service_category}
                  onChange={handleChange}
                  id=""
                >
                  {services?.map((item: any, index: number) => (
                    <option value={item?.category?.id} key={index}>
                      {item?.category?.name}
                    </option>
                  ))}
                </select>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="size-full  rounded-[16px] bg-[#FFFFFF1A]  p-4 outline-none"
                  placeholder="Опишите свой проект"
                />
                <div className="h-[60px]">
                  <WhiteButton
                    text="ОТПРАВИТЬ ЗАЯВКУ"
                    bgColor={true}
                    rounded="rounded-[16px]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
