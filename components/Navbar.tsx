"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WhiteButton from "./buttons/WhiteButton";
import ModalMenu from "./ModalMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import LanguageSelector from "./SelectLanguage";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  const pathname = usePathname();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
    setIsRotated(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setIsOpen(true);
    setIsRotated(false);
  }, [pathname]);

  return (
    <div
      className={`fixed z-10 h-[96px] w-full bg-glass px-[50px] py-[24px] max-md:h-14 max-md:px-0 max-md:py-3 md:backdrop-blur `}
      data-aos="fade-down"
    >
      <div className="container m-auto flex items-center justify-between gap-5 ">
        <Link href={"/"} className="max-md:z-[100] ">
          <Image
            src={"/logo.svg"}
            width={144}
            height={48}
            alt="logo"
            className="h-12 w-[144px] max-md:h-8 max-md:w-[94px] "
          />
        </Link>
        <div
          className={`flex w-[660px] gap-5 transition-all duration-500 max-md:absolute max-md:left-0 max-md:mb-10  max-md:h-screen max-md:w-full max-md:flex-col max-md:gap-4 max-md:overflow-y-scroll max-md:bg-glass max-md:py-8 max-md:backdrop-blur ${isMenuOpen ? "max-md:top-14" : "max-md:top-[-830px] "}`}
        >
          <Link
            href={"/project"}
            className="max-md:mb-8 max-md:flex max-md:px-4 max-md:text-2xl max-md:uppercase md:mr-14"
          >
            Проекты
            <Image
              src={"/arrow-bottom.svg"}
              width={14}
              height={14}
              alt="arrow"
              className={`ml-1 -rotate-90 md:hidden`}
            />
          </Link>
          <p
            className="flex cursor-pointer items-center gap-2 max-md:order-last max-md:px-4 max-md:text-2xl max-md:uppercase md:mr-14"
            onClick={handleToggle}
          >
            Услуги
            <Image
              src={"/arrow-bottom.svg"}
              width={14}
              height={14}
              alt="arrow"
              className={`transition-transform duration-500 ${
                isRotated ? "rotate-0" : "rotate-180"
              }`}
            />
          </p>
          <Link
            href={"/company"}
            className="max-md:mb-8 max-md:flex max-md:px-4 max-md:text-2xl max-md:uppercase md:mr-14"
          >
            Компания
            <Image
              src={"/arrow-bottom.svg"}
              width={14}
              height={14}
              alt="arrow"
              className={`ml-1 -rotate-90 md:hidden`}
            />
          </Link>
          <Link
            href={"/blog"}
            className="max-md:mb-8 max-md:flex max-md:px-4 max-md:text-2xl max-md:uppercase md:mr-14"
          >
            Блог
            <Image
              src={"/arrow-bottom.svg"}
              width={14}
              height={14}
              alt="arrow"
              className={`ml-1 -rotate-90 md:hidden`}
            />
          </Link>
          <Link
            href={"/contacts"}
            className="max-md:mb-8 max-md:flex max-md:px-4 max-md:text-2xl max-md:uppercase md:mr-14"
          >
            Контакты
            <Image
              src={"/arrow-bottom.svg"}
              width={14}
              height={14}
              alt="arrow"
              className={`ml-1 -rotate-90 md:hidden`}
            />
          </Link>
          <ModalMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsRotated={setIsRotated}
          />
        </div>
        <div className="flex gap-3 max-md:z-[100]">
          <LanguageSelector />
          {!isMenuOpen ? (
            <RxHamburgerMenu
              className="cursor-pointer text-2xl text-white max-md:mt-2 max-md:block md:hidden"
              onClick={handleToggleMenu}
            />
          ) : (
            <IoClose
              className="cursor-pointer text-2xl text-white max-md:mt-2 max-md:block md:hidden"
              onClick={handleToggleMenu}
            />
          )}

          <a
            download
            href="/pravki.docx"
            className="h-12 w-[199px] max-md:hidden"
          >
            <WhiteButton text="ПОЛУЧИТЬ БРИФ" />
          </a>
        </div>
      </div>
      {/* <ModalMenu isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
    </div>
  );
};

export default Navbar;
