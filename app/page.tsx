"use client";
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
      {/* <Header />
      <Projects number={5} />
      <Services />
      <Tools />
      <ContactForm />
      <Faqs />
      <News />
      <Result />
      <CookiePopUp /> */}
    </div>
  );
}
