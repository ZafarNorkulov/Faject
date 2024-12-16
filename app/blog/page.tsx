"use client";
import Hero from "@/components/blog/Hero";
import CardNews from "@/components/CardNews";
import Title from "@/components/Title";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import api from "@/lib/api";
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

export default function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/blog/");
        setBlogs(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
    (async () => {
      try {
        const response = await api.get("/blog/category");
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  const fetchAll = async () => {
    try {
      const response = await api.get("/blog/");
      setBlogs(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchByCategory = async (id: number) => {
    try {
      const response = await api.get(`/blog/category/${id}`);
      setBlogs(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchBySubCategory = async (id: number) => {
    try {
      const response = await api.get(`/blog/sub/category/${id}`);
      setBlogs(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="pb-[120px] pt-[96px] max-md:pt-[56px]">
      <Hero />
      <div
        className="container max-md:flex max-md:flex-col md:grid md:gap-x-[30px] md:gap-y-10"
        style={{ gridTemplateColumns: "330px 1fr" }}
      >
        <div></div>
        <div className="max-md:hidden">
          <Title text="Все темы" />
        </div>
        <div data-aos="fade-right">
          <div
            onClick={() => fetchAll()}
            className="flex items-center gap-4 border-b-2 border-primary px-4 pb-4 hover:cursor-pointer"
          >
            <Image src={"/icons/star.svg"} width={24} height={24} alt="" />
            <h2 className="text-[20px] text-primary">ВСЕ ТЕМЫ</h2>
          </div>
          {category.map(
            (item: {
              id: number;
              name: string;
              blog_categor: { id: number; name: string }[];
            }) => (
              <div
                className=" flex flex-col gap-4 border-b-2 border-primary p-4"
                key={item.id}
              >
                <h2
                  onClick={() => fetchByCategory(item.id)}
                  className="cursor-pointer text-[20px]"
                >
                  {item.name}
                </h2>
                {item.blog_categor.map((categor) => (
                  <p
                    onClick={() => fetchBySubCategory(categor.id)}
                    key={categor.id}
                    className="cursor-pointer text-[16px] text-gray"
                  >
                    {categor.name}
                  </p>
                ))}
              </div>
            )
          )}
        </div>
        <div
          className="grid grid-cols-3 gap-x-[30px] gap-y-10 max-md:grid-cols-1 max-md:gap-y-6"
          data-aos="fade-left"
        >
          <div className="max-md:mt-16 md:hidden">
            <Title text="Все темы" />
          </div>
          {blogs.length > 0 &&
            blogs.map((blog: blog, index) => (
              <CardNews
                key={index}
                title={blog.title}
                img={blog.image}
                date={blog.create_at}
                id={blog.id}
                category={blog.category.category.name}
                desc={blog.short_description}
              />
            ))}
          {blogs.length === 0 && <p>Нет данных</p>}
        </div>
      </div>
    </div>
  );
}
