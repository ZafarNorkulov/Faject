"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

// Define the type for each language
interface Language {
  code: string;
  name: string;
}

// Define the languages array with the appropriate type
const languages: Language[] = [
  { code: "uz", name: "O’zbek tili" },
  { code: "ru", name: "Русский язык" },
  { code: "en", name: "English" },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      const lang = languages.find(
        (language) => language.code === savedLanguage
      );
      if (lang) {
        setSelectedLanguage(lang);
        i18n.changeLanguage(savedLanguage);
      }
    }
  }, [i18n]);
  const pathname = usePathname();
  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  useEffect(() => {
    setIsLanguageOpen(false);
  }, [pathname]);

  const handleLanguageChange = (lang: string) => {
    const selectedLang = languages.find((language) => language.code === lang);
    if (selectedLang) {
      setSelectedLanguage(selectedLang);
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
    }
    setIsLanguageOpen(false);
  };

  return (
    <div className="relative mr-[10px] flex flex-col">
      <div className="flex flex-col">
        <div
          className="flex h-10 cursor-pointer items-center justify-between p-[10px]"
          onClick={toggleLanguage}
        >
          <p className={`overflow-hidden text-nowrap pr-4 uppercase`}>
            {selectedLanguage.code}
          </p>
          <FaChevronLeft
            className={`z-10 transition-transform ${
              isLanguageOpen ? "rotate-90" : "-rotate-90"
            }`}
          />
        </div>
        {isLanguageOpen && (
          <div className="absolute top-[40px] z-10 mt-2 flex w-[125px] flex-col rounded-[10px] bg-glass p-[2px] shadow-lg">
            {languages.map((language, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center"
                htmlFor={language.code}
              >
                <input
                  type="radio"
                  id={language.code}
                  name="language"
                  value={language.code}
                  className="hidden"
                  checked={selectedLanguage.code === language.code}
                  onChange={() => handleLanguageChange(language.code)}
                />
                <p
                  className={`flex w-full items-center justify-between rounded-md p-2 text-xs `}
                >
                  {language.name}
                </p>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
