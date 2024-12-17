import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
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
        {children}
      </body>
    </html>
  );
}
