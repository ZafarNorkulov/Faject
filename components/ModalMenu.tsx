import Image from "next/image";
import WhiteButton from "./buttons/WhiteButton";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";

interface TeamMember {
  id: number;
  name: string;
  categorys: {
    id: number;
    short_title: string;
    icon: string;
  }[];
}

const ModalMenu = ({
  isOpen,
  setIsOpen,
  setIsRotated,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsRotated: (isOpen: boolean) => void;
}) => {
  const router = useRouter();
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(true);
      setIsRotated(true);
    }
  };

  const [data, setData] = useState<TeamMember[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/category");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <div
      className={`${!isOpen && "top-[100px] md:absolute md:left-0 md:h-screen md:w-screen "}`}
      onClick={handleContainerClick}
    >
      <div
        className={` absolute flex items-start justify-center px-10 py-6 transition-all duration-500 max-md:w-full max-md:bg-none max-md:p-0 md:left-[64px] md:w-[1112px] md:rounded-[24px] md:border md:border-[#FFFFFF33] md:bg-[#0D0D0D] ${
          !isOpen ? "max-md:top-[430px] md:top-[10px]" : "top-[-1000px]"
        }`}
        onClick={handleContainerClick}
      >
        <div className="w-full max-md:mt-6 max-md:flex max-md:flex-col max-md:px-4 md:grid md:grid-cols-3">
          {data.map((category) => (
            <div key={category.id} className="flex flex-col">
              <h3 className="mb-8 bg-gradient-to-l from-[#9855FF] to-[#E336FF] bg-clip-text text-2xl text-transparent">
                {category.name}
              </h3>
              {category.categorys &&
                category.categorys.map((subCategory) => (
                  <Link
                    key={subCategory.id}
                    href={`services/${subCategory.id}`}
                  >
                    <div
                      // key={subCategory.id}
                      className="mb-8 flex items-center"
                    >
                      <Image
                        src={subCategory.icon || "/icons/favicon.svg"}
                        alt=""
                        height={48}
                        width={48}
                        className=""
                      />
                      <p className="mx-2 text-xl uppercase">
                        {subCategory.short_title}
                      </p>
                      <Image
                        src="/arrow-bottom.svg"
                        width={14}
                        height={14}
                        alt="arrow"
                        className="-rotate-90"
                      />
                    </div>
                  </Link>
                ))}
            </div>
          ))}
          <div className="col-span-3">
            <div
              onClick={() => router.push("/services")}
              className="mx-auto h-12 w-[240px]"
            >
              <WhiteButton text="Смотреть все услуги" bgColor img />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
