"use client";
import "./globals.css";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import i18n from "@/i18n";
import { I18nextProvider } from "react-i18next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") || "uz"; // Default to 'uz' if no language is stored
      i18n.changeLanguage(storedLanguage);
    }
  }, []);
  return (
    <html lang="ru">
      <head>
        <title>FAJECT</title>
        <meta name="author" content="Faject Team" />

        <meta
          name="description"
          content="Мы помогаем компаниям создавать сервисы и сайты для людей. Делаем бизнес комфортным и удобным в общении с клиентами так, чтобы это было выгодно."
        />
        <meta
          name="keywords"
          content="Faject, SMM, Sites, Site making, Seo, СММ, Сайты, Сайт под ключ, Сайт мейкинг СЭО, Таргет"
        />
        <meta property="og:title" content="FAJECT" />
        <meta
          property="og:description"
          content="Мы помогаем компаниям создавать сервисы и сайты для людей. Делаем бизнес комфортным и удобным в общении с клиентами так, чтобы это было выгодно."
        />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/favicon.svg" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://faject.vercel.app/icons/favicon.svg"
        />
        <link rel="icon" href="/icons/favicon.svg" />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        <Footer />
      </body>
    </html>
  );
}
