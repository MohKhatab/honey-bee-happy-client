import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router";
import { LanguageDropdown } from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import { PiArrowRightBold, PiXBold } from "react-icons/pi";
import Button from "./Button";

export default function Navbar() {
  const { t } = useTranslation("navbar");

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const lastScrollYRef = useRef(0);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 352) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    const throttledScrollHandler = () => {
      if (throttleTimeout) {
        return;
      }

      throttleTimeout = setTimeout(() => {
        handleScroll();
        throttleTimeout = null;
      }, 100);
    };

    window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`px-5 md:px-20 xl:px-40 py-6 flex gap-4 lg:gap-8 justify-between items-center absolute w-full z-40 bg-gradient-to-b from-grayscale-950/80`}
      >
        <div>
          <img
            src="Logo.svg"
            className="-z-10 w-full lg:w-3xs xl:w-full"
            alt=""
          />
        </div>

        <ul className="hidden lg:flex text-xl xl:text-2xl leading-7 font-semibold gap-16 xl:gap-24 text-primary-50">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? "text-primary-400" : ""}>
                  {t("navItems.homeLink")}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              {({ isActive }) => (
                <span className={isActive ? "text-primary-400" : ""}>
                  {t("navItems.productsLink")}
                </span>
              )}
            </NavLink>
          </li>
          <NavLink to="/contact">
            {({ isActive }) => (
              <span className={isActive ? "text-primary-400" : ""}>
                {t("navItems.contactLink")}
              </span>
            )}
          </NavLink>
        </ul>

        <div className="hidden lg:block">
          <LanguageDropdown textClass="text-primary-50 text-lg lg:text-2xl" />
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="flex lg:hidden p-4"
        >
          <FaBars className="text-primary-400 text-3xl" />
        </button>
      </div>

      <div
        onClick={() => setMenuOpen(false)}
        className={`h-screen w-full fixed top-0 left-0 z-50 transition-opacity duration-200 ${
          menuOpen
            ? "opacity-100 pointer-events-auto no-doc-scroll"
            : "opacity-0 pointer-events-none"
        } bg-grayscale-950/70`}
      >
        {/* Mobile Menu */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-2xs min-h-[100dvh] ml-auto bg-primary-50 overflow-y-auto transform transition-transform duration-200 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-4 flex flex-col gap-2">
            <Button
              variant="secondary"
              classes="pr-0 my-6 ml-auto"
              handler={() => setMenuOpen(false)}
            >
              <PiXBold className="text-3xl text-grayscale-700" />
            </Button>
            <img
              src="logo_dark.png"
              alt="Honey Bee Happy"
              className="px-2 mb-6"
            />
            <ul className="text-xl flex flex-col leading-7 font-semibold gap-6 text-grayscale-800">
              <li
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <PiArrowRightBold />
                <NavLink to="/">
                  {({ isActive }) => (
                    <span className={isActive ? "text-primary-600" : ""}>
                      {t("navItems.homeLink")}
                    </span>
                  )}
                </NavLink>
              </li>
              <li
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <PiArrowRightBold />
                <NavLink to="/products">
                  {({ isActive }) => (
                    <span className={isActive ? "text-primary-600" : ""}>
                      {t("navItems.productsLink")}
                    </span>
                  )}
                </NavLink>
              </li>
              <li
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <PiArrowRightBold />
                <NavLink to="/contact">
                  {({ isActive }) => (
                    <span className={isActive ? "text-primary-600" : ""}>
                      {t("navItems.contactLink")}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`
          fixed z-40
          w-full py-4 bg-linear-to-b from-grayscale-950/90 to-grayscale-950/50 shadow-xl px-5 md:px-20 xl:px-40 flex gap-4 lg:gap-8 justify-between items-center
          transition-all duration-300 ${
            isScrolled ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <img src="bee.png" alt="Honey Bee Happy" className="size-16" />

        <ul className="hidden lg:flex text-xl leading-7 font-semibold gap-16 xl:gap-24 text-primary-50">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? "text-primary-400" : ""}>
                  {t("navItems.homeLink")}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              {({ isActive }) => (
                <span className={isActive ? "text-primary-400" : ""}>
                  {t("navItems.productsLink")}
                </span>
              )}
            </NavLink>
          </li>
          <NavLink to="/contact">
            {({ isActive }) => (
              <span className={isActive ? "text-primary-400" : ""}>
                {t("navItems.contactLink")}
              </span>
            )}
          </NavLink>
        </ul>

        <LanguageDropdown textClass="text-primary-50 text-xl" />

        <button
          onClick={() => setMenuOpen(true)}
          className="flex lg:hidden p-4"
        >
          <FaBars className="text-primary-400 text-3xl" />
        </button>
      </div>
    </>
  );
}
