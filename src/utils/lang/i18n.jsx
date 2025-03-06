import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ru: {
                translation:{}
            },
            en: {
                translation:{}
            },
        },
    });

export default i18n;
