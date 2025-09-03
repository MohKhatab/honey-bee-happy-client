import {
  PiCopyrightBold,
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiXLogoBold,
} from "react-icons/pi";

export default function Footer() {
  return (
    <div className="bg-linear-to-t from-secondary-950 to-secondary-800 pt-12 pb-6 relative">
      <div className="default-margin">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 text-grayscale-100">
          <img src="Logo.svg" className="w-md shrink-0 mx-auto"></img>

          <div className="flex flex-col sm:flex-row w-full gap-12 justify-center items-center sm:items-baseline text-center sm:text-left">
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
                  <a
                    href=""
                    className="cursor-pointer text-primary-50/80 hover:text-primary-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-3xl">Contact Details</h4>
              <ul className="flex flex-col gap-4 my-4 text-lg md:text-xl">
                <li>someonesmail@email.com</li>
                <li>+99 000 555 66 22</li>
              </ul>
              <div className="flex gap-4 text-primary-400">
                <a href="" className="hover:text-primary-500 transition-colors">
                  <PiFacebookLogoBold size={40} />
                </a>
                <a href="" className="hover:text-primary-500 transition-colors">
                  <PiInstagramLogoBold size={40} />
                </a>
                <a href="" className="hover:text-primary-500 transition-colors">
                  <PiXLogoBold size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="text-primary-500/50 mb-6 mt-12" />

        <p className="text-grayscale-50 flex gap-2 text-lg mx-auto justify-center">
          <span className="text-primary-400 flex items-center gap-1">
            <PiCopyrightBold /> Honey Bee Happy
          </span>
          All Rights Reserved 2025.
        </p>
      </div>
    </div>
  );
}
