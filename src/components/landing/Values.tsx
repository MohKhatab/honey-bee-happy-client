import { PiHandsClapping, PiHeart, PiLeaf } from "react-icons/pi";
import ValueCard from "../common/ValueCard";

export default function Values() {
  return (
    <div className="relative overflow-hidden">
      <img
        src="images/side_garden.png"
        className="absolute -z-10 h-full -right-32 object-cover"
        alt=""
      />
      <img
        src="images/side_garden.png"
        className="absolute -z-10 h-full object-cover -left-32 transform scale-x-[-1]"
        alt=""
      />
      <div className="default-margin py-24 flex gap-6 flex-wrap">
        <div className="text-center w-full mb-8">
          <h2 className="text-5xl font-semibold text-primary-500">
            Our Values
          </h2>
          <p className="mt-6 text-lg text-grayscale-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odit dolor ratione dolore animi. Assumenda culpa natus nisi tempora
            ut?
          </p>
        </div>
        <div className="flex flex-wrap gap-12 gap-y-10 justify-center">
          <ValueCard
            icon={<PiHandsClapping />}
            iconColor="bg-primary-400"
            valueTitle="Handcrafted"
            valueDescription="Every product is made by human hands, not machines."
          />
          <ValueCard
            icon={<PiLeaf />}
            iconColor="bg-secondary-400"
            valueTitle="100% Natural"
            valueDescription="Only Ingredients provided by nature, nothing synthetic."
          />
          <ValueCard
            icon={<PiHeart />}
            iconColor="bg-red-300"
            valueTitle="Made with Love"
            valueDescription="Every product is made with care and attention."
          />
          <ValueCard
            icon={<PiHandsClapping />}
            iconColor="bg-accent-300"
            valueTitle="Handcrafted"
            valueDescription="Every product is made by human hands, not machines."
          />
          <ValueCard
            icon={<PiHandsClapping />}
            iconColor="bg-blue-300"
            valueTitle="Handcrafted"
            valueDescription="Every product is made by human hands, not machines."
          />
          <ValueCard
            icon={<PiHandsClapping />}
            iconColor="bg-blue-300"
            valueTitle="Handcrafted"
            valueDescription="Every product is made by human hands, not machines."
          />
        </div>
      </div>
    </div>
  );
}
