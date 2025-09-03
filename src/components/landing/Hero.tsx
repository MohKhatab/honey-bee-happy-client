import { useTranslation } from "react-i18next";
import Button from "../common/Button";

export default function Hero() {
  const { t } = useTranslation("home");

  return (
    <div className="relative w-full h-[80dvh] md:h-[100dvh] flex items-center">
      <img
        src="hero.jpg"
        className="w-full h-full absolute object-cover -z-10"
        draggable="false"
        alt=""
      />
      <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-black/70 to-black/10 absolute -z-10"></div>

      {/* CTA */}
      <div className="flex flex-col mx-5 md:mx-20 xl:mx-40 gap-10 md:gap-15">
        <h1 className="text-primary-50  max-w-[640px] leading-[56px] text-4xl text-center md:text-left md:leading-[88px] md:text-7xl xl:text-8xl xl:leading-[115px] font-semibold">
          {/* <span className="bg-gradient-to-r from-primary-400 to-secondary-400 inline-block text-transparent bg-clip-text">
            Harvested
          </span>{" "}
          By Happy Bees, Far From The{" "}
          <span className="bg-gradient-to-r from-secondary-400 to-primary-400 inline-block text-transparent bg-clip-text">
            Noise
          </span> */}
          {t("hero.slogan")}
        </h1>

        <Button classes="max-w-96 mx-auto md:mx-0 px-6 py-4 md:py-6 text-xl md:text-3xl">
          CONTACT ME!
        </Button>
      </div>
    </div>
  );
}
