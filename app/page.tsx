"use client";
import CookiePopUp from "@/components/CookiePopUp";
import Faqs from "@/components/homepage/Faqs";
import Header from "@/components/homepage/Header";
import News from "@/components/homepage/News";
import Projects from "@/components/homepage/Projects";
import Tools from "@/components/homepage/Tools";
import Result from "@/components/Result";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="size-full overflow-x-hidden">
      <Header />
      <Projects number={5} />
      {/* <Services /> */}
      <Tools />
      {/* <ContactForm /> */}
      <Faqs />
      <News />
      <Result />
      <CookiePopUp />
    </div>
  );
}
