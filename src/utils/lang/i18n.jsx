import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {home_translate} from "@/utils/lang/translates/home_translate.jsx";
import {about_translate} from "@/utils/lang/translates/about_translate.jsx";
import {faqs_translate} from "@/utils/lang/translates/faqs_translate.jsx";
import {contact_translate} from "@/utils/lang/translates/contact_translate.jsx";

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
                translation: {
                    home: home_translate.ru,
                    about: about_translate.ru,
                    faqs: faqs_translate.ru,
                    contact: contact_translate.ru,
                    navbar: {
                        home: "Главная",
                        faqs: "Вопросы",
                        about: "О нас",
                        contact: "Контакты"
                    },


                    footer: {
                        item_1: {
                            text: "Будь вы трендсеттером, поклонником минимализма или искателем приключений, в Akyus найдется стиль для каждого. Наш широкий ассортимент подчеркнет вашу уникальность."
                        }
                    }
                }
            },
            en: {
                translation: {
                    home: home_translate.en,
                    about: about_translate.en,
                    faqs: faqs_translate.en,
                    contact: contact_translate.en,
                    navbar: {
                        home: "Home",
                        faqs: "FAQs",
                        about: "About us",
                        contact: "Contact us"
                    },

                    footer: {
                        item_1: {
                            text: "Будь вы трендсеттером, поклонником минимализма или искателем приключений, в Akyus найдется стиль для каждого. Наш широкий ассортимент подчеркнет вашу уникальность."
                        }
                    }
                }
            },
        },
    });

export default i18n;
