"use client";
import CompanyHeader from "@/components/company/CompanyHeader";
import CompanyItem from "@/components/company/CompanyItem";
import OurTeam from "@/components/company/OurTeam";
import Trust from "@/components/company/Trust";
import ContactForm from "@/components/ContactForm";
import Services from "@/components/homepage/Services";
import Result from "@/components/Result";
import React, { useEffect } from "react";
import AOS from "aos";

export default function Company() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <CompanyHeader />
      <CompanyItem />
      <Trust />
      <Result />
      <OurTeam />
      <Services />
      <ContactForm />
    </div>
  );
}
