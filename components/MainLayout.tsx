"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
 
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default MainLayout;
