import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { hideLoader, showLoader } from "../components/loading/LoaderFunctions";

i18next
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: "http://localhost:8200/api/translations/{{ns}}/{{lng}}",

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parse: function (data: any) {
        const parsedData = JSON.parse(data);
        return parsedData.sections;
      },
    },
    defaultNS: "home",
    ns: ["home"],
  });

i18next.on("loading", () => {
  showLoader();
});

i18next.on("loaded", () => {
  hideLoader();
});

i18next.on("failedLoading", () => {
  hideLoader();
});

export default i18next;
