import React, { useEffect, useState } from "react";
import WhiteButton from "./buttons/WhiteButton";

export default function CookiePopUp() {
  const [see, setSee] = useState(false);

  const disAbler = () => {
    localStorage.setItem("cookie", "true");
    setSee(true);
  };

  useEffect(() => {
    if (localStorage.getItem("cookie") === "true" || see) {
      setSee(true);
    }
  }, [see]);

  if (see) return null;

  return (
    <div
      className={`fixed bottom-5 z-20 flex w-full justify-center max-md:hidden`}
      data-aos="fade-down"
    >
      <div className="bottom-4 flex items-center  gap-6 rounded-[20px] border-gray bg-glass p-6 backdrop-blur-lg">
        <p className="max-w-[1086px] text-[20px]">
          Наш веб-сайт использует файлы cookie. Продолжая навигацию, мы
          предполагаем, что вы разрешаете использовать файлы cookie, как описано
          в нашей Политике Конфиденциальности.
        </p>
        <div className="h-[48px] w-[182px]" onClick={disAbler}>
          <WhiteButton text="Подтвердить" bgColor img />
        </div>
      </div>
    </div>
  );
}
