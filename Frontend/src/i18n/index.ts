import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const LANGUAGES = [
    { label: "French", code: "fr" },
    { label: "English", code: "en" },
  ];

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next).init({
    fallbackLng: "en",
    lng: "en",
    // debug: true,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;