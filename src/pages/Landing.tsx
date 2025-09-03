// import AskQuestion from "../components/landing/AskQuestion";
import FAQ from "../components/landing/FAQ";
import FeaturedProducts from "../components/landing/FeaturedProducts";
import Hero from "../components/landing/Hero";
import HiveGallery from "../components/landing/HiveGallery";
import Story from "../components/landing/Story";
import Values from "../components/landing/Values";

export default function Landing() {
  return (
    <>
      <Hero></Hero>
      <Story></Story>
      <HiveGallery></HiveGallery>
      <Values></Values>
      <FeaturedProducts />
      <FAQ />
      {/* <AskQuestion /> */}
    </>
  );
}
