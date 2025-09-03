import { useState } from "react";
import GalleryItem from "./GalleryItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PiXBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./../../assets/swiper-css-override.css";

export default function HiveGallery() {
  const [parent] = useAutoAnimate(/* optional config */);
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="bg-linear-to-t from-secondary-700/90 to-secondary-800/90 absolute w-full h-full -z-10"></div>
      <img
        src="images/view.webp"
        className="absolute w-full h-full object-cover -z-20"
        alt=""
      />
      <div className=" default-margin py-24">
        <h2 className="text-primary-300 text-5xl w-full mb-6 font-semibold">
          From The Hive
        </h2>
        <p className="text-grayscale-50 font-light text-2xl mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          eaque.
        </p>

        <Swiper
          slidesPerView={4}
          spaceBetween={26}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1028: { slidesPerView: 3, spaceBetween: 26 },
            1240: { slidesPerView: 4, spaceBetween: 26 },
          }}
        >
          <SwiperSlide>
            <GalleryItem
              setOpenImage={setOpenImage}
              imagePath="images/view.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryItem
              setOpenImage={setOpenImage}
              imagePath="images/story.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryItem
              setOpenImage={setOpenImage}
              imagePath="images/story2.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryItem
              setOpenImage={setOpenImage}
              imagePath="images/view.webp"
            />
          </SwiperSlide>
        </Swiper>

        <div ref={parent}>
          {openImage && (
            <div
              className={`fixed top-0 left-0 w-full h-[100dvh] bg-grayscale-950/50 
          backdrop-blur-lg items-center justify-center cursor-pointer flex-col gap-4 px-6
          transition-opacity flex no-doc-scroll opacity-100 z-50`}
              onClick={() => setOpenImage(null)}
            >
              <img src={openImage} className="max-h-2/3 rounded-xl shadow-xl" />
              <PiXBold size={56} className="text-primary-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
