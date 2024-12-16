"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; // Import Swiper's navigation CSS

import "./news.css";

import { FreeMode, Navigation } from "swiper/modules"; // Import Navigation

import Title from "../Title";
import WhiteButton from "../buttons/WhiteButton";
import CardNews from "../CardNews";
import Image from "next/image";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
type category = {
  category: { id: number; name: string };
  name: string;
};
type blog = {
  category: category;
  title: string;
  short_description: string;
  create_at: string;
  image: string;
  id: number;
};
const News = ({ title }: { title?: string }) => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/blog/");
        setBlogs(response?.data?.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  return (
    <>
      <div
        className="container relative my-[120px] max-md:my-16"
        data-aos="fade-down"
      >
        <div className="mb-10">
          <Title text={title || "НОВОСТИ И СТАТЬИ"} center={false} />
        </div>
        <div className="relative max-md:hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }} // Enable custom navigation
            modules={[FreeMode, Navigation]} // Include Navigation module
            // eslint-disable-next-line
            className="mySwiper"
          >
            {blogs &&
              blogs.length > 0 &&
              blogs
                .slice(0, 6)
                .map((blog: blog) => (
                  <SwiperSlide key={blog.id}>
                    {blog && (
                      <CardNews
                        key={blog.id}
                        title={blog.title}
                        img={blog.image}
                        date={blog.create_at}
                        id={blog.id}
                        category={blog.category.category.name}
                        desc={blog.short_description}
                      />
                    )}
                  </SwiperSlide>
                ))}
          </Swiper>
          {/* eslint-disable-next-line */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2">
            <button className="flex size-[56px] items-center justify-center rounded-full bg-primary">
              <Image
                alt=""
                src="/arrow-bottom.svg"
                className="size-4 rotate-90"
                width={12}
                height={12}
              />
            </button>{" "}
          </div>
          {/* eslint-disable-next-line */}
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2">
            <button className="flex size-[56px] items-center justify-center rounded-full bg-primary">
              <Image
                alt=""
                src="/arrow-bottom.svg"
                className="size-4 -rotate-90"
                width={12}
                height={12}
              />
            </button>{" "}
            {/* Adjust positioning */}
          </div>
        </div>
        <div className="hidden w-full flex-col items-center justify-center gap-y-6 max-md:flex">
          {blogs &&
            blogs.map((blog: blog) => (
              <SwiperSlide key={blog.id}>
                {blog && (
                  <CardNews
                    key={blog.id}
                    title={blog.title}
                    img={blog.image}
                    date={blog.create_at}
                    id={blog.id}
                    category={blog.category.category.name}
                    desc={blog.short_description}
                  />
                )}
              </SwiperSlide>
            ))}
        </div>
        <div
          onClick={() => router.push("/blog")}
          className="mx-auto mt-16 h-12 w-[190px]"
        >
          <WhiteButton text="ВСЕ НОВОСТИ" bgColor img />
        </div>
      </div>
    </>
  );
};

export default News;
