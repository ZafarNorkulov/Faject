"use client"
import React, { useEffect, useState } from "react";
import Title from "../Title";
import Image from "next/image";
import api from "@/lib/api";

interface ToolsItem {
  id: number;
  name: string;
}
interface ALlTool {
  id: number;
  name: string;
  image: string;
}
export default function Tools() {
  const [tools, setTool] = useState<ToolsItem[]>([]);
  const [allTools, setAllTools] = useState<ALlTool[]>([]);
  const [activeToolId, setActiveToolId] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/tools/category/");
        setTool(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        let url = "/tools/";
        if (activeToolId) url = `/tool/${activeToolId}`;
        const response = await api.get(url);
        setAllTools(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [activeToolId]);
  const handleTagClick = (id: number) => {
    setActiveToolId(id);
  };

  return (
    <div className="relative">
      <div
        style={{
          background: "radial-gradient(#9128FA40, #9128FA00 70%)",
        }}
        className=" absolute left-[-200px] -z-10 size-[505px] max-md:left-[-100px] max-md:size-[283px]"
      ></div>
      <div className="container" data-aos="fade-down">
        <div className="mb-10">
          <Title text="наши ИНСТРУМЕНТЫ" center={false} />
        </div>
        <div className="mb-10 flex flex-wrap gap-4">
          {tools.map((tool) => (
            <p
              key={tool.id}
              onClick={() => handleTagClick(tool.id)}
              className={`cursor-pointer rounded-full border px-6 py-2 text-sm uppercase text-white hover:border-primary hover:bg-primary hover:opacity-80 max-md:text-sm ${
                activeToolId === tool.id
                  ? "border-primary bg-primary"
                  : "border-[#FFFFFF33] bg-transparent"
              }`}
            >
              {tool.name}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 max-md:justify-center">
          {allTools.map((tool) => (
            <div
              key={tool.id}
              className="flex h-[90px] w-[87px] flex-col items-center justify-center rounded-[5px] border border-[#FFFFFF12] bg-glass max-md:h-[54px] max-md:w-[50px] "
            >
              <Image
                src={tool.image}
                alt=""
                width={24}
                height={24}
                className="max-md:size-[15px]"
              />
              <h3 className="mt-[15px] text-xs text-white max-md:mt-1 max-md:text-[9px]">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
