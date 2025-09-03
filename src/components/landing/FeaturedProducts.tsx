import { Link } from "react-router";
import Button from "../common/Button";
import ProductCard from "../products/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./../../assets/swiper-css-override.css";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "../../pages/Products";
import i18next from "i18next";
import Loading from "../common/Loading";

export default function FeaturedProducts() {
  const lang = i18next.language;
  const { data, isFetched } = useProducts({
    page: 1,
    limit: 4,
  });
  return (
    <div className="bg-linear-to-b from-secondary-50 to-secondary-50 via-secondary-200/60">
      <div className="default-margin flex gap-6 flex-wrap">
        <div className="text-center w-full mb-4 md:mb-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary-500">
            Featured Products
          </h2>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={26}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1028: { slidesPerView: 3, spaceBetween: 26 },
            1240: { slidesPerView: 4, spaceBetween: 26 },
          }}
          className="overflow-auto"
        >
          {isFetched ? (
            data.data!.length > 0 &&
            data.data!.map((prod: Product) => (
              <SwiperSlide key={prod._id + "featured"} className="pb-8">
                <ProductCard
                  key={prod._id}
                  product={{
                    _id: prod._id,
                    title: prod.translationId?.content?.[lang]?.title || "",
                    description:
                      prod.translationId?.content?.[lang]?.description || "",
                    price: prod.price,
                    thumbnail: prod.thumbnail,
                    inStock: prod.inStock,
                    category: prod.category.name,
                  }}
                />
              </SwiperSlide>
            ))
          ) : (
            <div className="h-80 flex items-center justify-center w-full">
              <Loading />
            </div>
          )}
        </Swiper>

        <div className="mx-auto flex items-center mt-2 mb-6 gap-8 bg-primary-50/50 p-6 px-8 text-grayscale-600 rounded-xl shadow-lg">
          <h3 className="text-2xl">We've got more products for you to see!</h3>
          <Link to="/products">
            <Button classes="px-8 py-3 text-lg">Check our catalog</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
