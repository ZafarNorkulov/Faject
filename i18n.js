// i18n.js
"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    uz: {
      translation: uz,
    },
    ru: {
      translation: ru,
    },
  },
  lng: "uz", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
