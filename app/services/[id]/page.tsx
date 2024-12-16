"use client";
import ContactForm from "@/components/ContactForm";
import Result from "@/components/Result";
import Advantages from "@/components/servicepage/Advantages";
import Conditions from "@/components/servicepage/Conditions";
import DoWork from "@/components/servicepage/DoWork";
import ServiceHero from "@/components/servicepage/ServiceHero";
import ServiceProjects from "@/components/servicepage/serviceProject";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import api from "@/lib/api";
import { usePathname } from "next/navigation";

interface TeamMember {
  id: number;
  title: string;
  short_title: string;
  short_description: string;
  icon: string;
  image: string;
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
  descriptions: {
    id: number;
    title: string;
  }[];
  out_terms: {
    id: number;
    title: string;
    description: string;
  };
  advantages: {
    id: number;
    description: string;
  }[];
}
export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [data, setData] = useState<TeamMember[]>([]);
  const pathname = usePathname();
  const idPathname = pathname.split("/").pop();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/service/${idPathname}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [idPathname]);

  return (
    <div>
      <ServiceHero data={data} />
      <Result />
      <ServiceProjects data={data} />
      {/* <Projects number={6} seeAll /> */}
      <Advantages data={data} />
      <DoWork data={data} />
      <Conditions data={data} />
      <ContactForm />
    </div>
  );
}
