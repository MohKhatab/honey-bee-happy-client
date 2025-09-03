import {
  PiCopyrightBold,
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiXLogoBold,
} from "react-icons/pi";
import Button from "../common/Button";
import { Link } from "react-router";

export default function AskQuestion() {
  return (
    <div className="relative">
      <img
        src="hero.jpg"
        className="absolute w-full h-full object-cover select-none -z-10"
        draggable="false"
      />
      <div className="absolute w-full h-full bg-secondary-950/80 -z-10"></div>
      <div className="default-margin pt-16 pb-6 text-center">
        <h2 className="text-6xl font-semibold text-primary-400 mb-8">
          Got Any Questions?
        </h2>
        <p className="text-2xl text-grayscale-50 font-light">
          Don't feel shy ask right away!
        </p>
        <Link to="/contact">
          <Button classes="p-4 px-12 text-xl mt-8">CONTACT ME!</Button>
        </Link>

        <div className="p-2 border-2 border-primary-500 border-dashed mt-16 rounded-2xl">
          <div className="bg-linear-to-t from-secondary-800/90 to-secondary-900/60 pt-12 pb-6 relative rounded-2xl shadow-lg px-2">
            <div className="">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 text-grayscale-100">
                <img
                  src="Logo.svg"
                  className="w-xs xl:w-md shrink-0 mx-auto"
                ></img>

                <div className="flex flex-col sm:flex-row w-full gap-12 justify-center items-center sm:items-baseline text-center sm:text-left sm:justify-evenly">
                  <div>
                    <h4 className="text-3xl">Quick Links</h4>
                    <ul className="flex flex-col gap-3 mt-3">
                      <li>
                        <a
                          href=""
                          className="cursor-pointer text-primary-50/80 hover:text-primary-400 transition-colors"
                        >
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="cursor-pointer text-primary-50/80 hover:text-primary-400 transition-colors"
                        >
                          From The Hive
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="cursor-pointer text-primary-50/80 hover:text-primary-400 transition-colors"
                        >
                          Our Values
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="cursor-pointer text-primary-50/80 hover:text-primary-400 transition-colors"
                        >
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="cursor-pointer text-primary-50/80 hover:text-primary-400 transition-colors"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <Link
                          to="contact"
                          className="cursor-pointer text-primary-50/80 hover:text-primary-400 transition-colors"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-3xl">Contact Details</h4>
                    <ul className="flex flex-col gap-4 my-4 text-lg md:text-xl">
                      <li>someonesmail@email.com</li>
                      <li>+99 000 555 66 22</li>
                    </ul>
                    <div className="flex gap-4 text-primary-400 justify-center md:justify-normal">
                      <a
                        href=""
                        className="hover:text-primary-500 transition-colors"
                      >
                        <PiFacebookLogoBold size={40} />
                      </a>
                      <a
                        href=""
                        className="hover:text-primary-500 transition-colors"
                      >
                        <PiInstagramLogoBold size={40} />
                      </a>
                      <a
                        href=""
                        className="hover:text-primary-500 transition-colors"
                      >
                        <PiXLogoBold size={40} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="text-primary-500/50 mb-6 mt-12" />

              <p className="text-grayscale-50 flex flex-col sm:flex-row gap-2 text-lg mx-auto items-center justify-center">
                <span className="text-primary-400 flex items-center gap-1 w-fit">
                  <PiCopyrightBold /> Honey Bee Happy
                </span>
                All Rights Reserved 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
