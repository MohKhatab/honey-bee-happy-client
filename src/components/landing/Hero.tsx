import { useTranslation } from "react-i18next";
import Button from "../common/Button";
import { Link } from "react-router";

export default function Hero() {
  const { t } = useTranslation("home");

  return (
    <div className="relative w-full pb-16 lg:pb-0 lg:h-[100vh] flex">
      <img
        src="hero.jpg"
        className="w-full h-full absolute object-cover -z-10"
        draggable="false"
        alt=""
      />
      <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-black/70 to-black/10 absolute -z-10"></div>

      {/* CTA */}
      <div className="flex lg:flex-col flex-wrap mx-5 md:mx-20 xl:mx-40 gap-6 md:gap-15 mt-40">
        <h1 className="text-primary-50  max-w-[640px] text-center md:text-left text-5xl leading-14 md:text-[clamp(2rem,16vh,6rem)] md:leading-[clamp(2.2rem,17vh,6.6rem)] font-semibold">
          {t("hero.slogan")}
        </h1>

        <Link to="/contact" className="max-w-96 mx-auto md:mx-0">
          <Button classes="max-w-96 mx-auto md:mx-0 px-6 py-4 lg:py-6 text-xl lg:text-3xl">
            CONTACT ME!
          </Button>
        </Link>
      </div>
    </div>
  );
}
