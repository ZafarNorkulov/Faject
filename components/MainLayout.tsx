"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import i18n from "@/i18n";
import { I18nextProvider } from "react-i18next";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") || "uz"; // Default to 'uz' if no language is stored
      i18n.changeLanguage(storedLanguage);
    }
  }, []);
  return (
    <>
      <Navbar />
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      <Footer />
    </>
  );
};

export default MainLayout;
