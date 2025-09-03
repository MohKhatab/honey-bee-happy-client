import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../hooks/useProducts";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { AppPagination } from "../components/common/AppPagination";
import EmptyProductCard from "../components/products/EmptyProductCard";
import { useMediaQuery } from "@mantine/hooks";
import { Link, useSearchParams } from "react-router";
import Loading from "../components/common/Loading";
import Empty from "../components/common/Empty";
import Button from "../components/common/Button";

export type Product = {
  translationId: {
    page: string;
    section: string;
    content: {
      [lang: string]: {
        title: string;
        description: string;
      };
    };
  };
  price: number;
  images: string[];
  thumbnail: string;
  inStock: boolean;
  createdAt: string;
  category: {
    name: string;
  };
  _id: string;
};

export default function Products() {
  const { i18n } = useTranslation();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  const isXl = useMediaQuery("(min-width: 1280px)");
  const isLg = useMediaQuery("(min-width: 1024px)");

  let columns = 2;
  if (isXl) columns = 4;
  else if (isLg) columns = 3;
  else columns = 2;

  const rows = 2;
  const itemsPerPage = columns * rows;

  // Product fetching
  const filters: Record<string, string | string[]> = {};
  for (const [key] of searchParams) {
    const allValues = searchParams.getAll(key);
    filters[key] = allValues.length > 1 ? allValues : allValues[0];
  }

  const { data, isLoading, isError } = useProducts({
    page,
    limit: itemsPerPage,
    filters,
  });

  if (isError) {
    return (
      <div className="col-span-12 flex items-center justify-center mb-24 pt-60">
        <Empty>
          <div className="mt-8 flex flex-col items-center justify-center">
            <span className="text-xl text-center  text-red-500 font-semibold">
              an error occured while loading products
            </span>
            <span className="text-center mt-6">
              You can try to load the page again or contact us about the error
            </span>
            <Link to="/contact" className="block">
              <Button classes="text-lg px-6 py-3 mt-6">Contact us</Button>
            </Link>
          </div>
        </Empty>
      </div>
    );
  }

  const products = data?.data || [];
  const totalItems = data?.totalDocs || 0;
  const lang = i18n.language;

  return (
    <>
      {/* Hero */}
      <div className="w-full relative h-88 flex justify-center shadow-2xl">
        <img
          src="hero.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover -z-30"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-linear-to-t from-grayscale-950/90 to-grayscale-950/30 -z-20"></div>
        <h1 className="text-primary-50 absolute bottom-24 text-5xl font-semibold">
          Our Products
        </h1>
      </div>

      {/* Filter + Products */}
      <div className="grid grid-cols-12 default-margin pt-12">
        <div className="col-span-12 mb-6">
          <ProductFilter />
        </div>
        {isLoading ? (
          <div className="h-80 col-span-12 flex items-center justify-center w-full">
            <Loading />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-16 col-span-12">
            {/* Product Cards */}
            {products.length > 0 &&
              products.map((prod: Product) => (
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
              ))}

            {/* Product Empty Cards */}
            {products.length > 0 &&
              [...Array(itemsPerPage - products.length)].map((_, i) => (
                <EmptyProductCard key={i + "emptyproduct"} />
              ))}
            {products.length === 0 && (
              <div className="col-span-12 flex items-center justify-center mb-24">
                <Empty>
                  <div className="text-center mt-8 text-xl text-grayscale-500 font-semibold">
                    Could not find any products
                    <Link to="/products" className="block">
                      <Button classes="text-lg px-6 py-3 mt-6">
                        Reset Filters
                      </Button>
                    </Link>
                  </div>
                </Empty>
              </div>
            )}
          </div>
        )}

        {/* Pagination */}
        {products.length !== 0 && (
          <div className="col-span-12 flex justify-center mt-12 mb-10">
            <AppPagination
              length={totalItems}
              itemsPerPage={itemsPerPage}
              page={page}
              onChange={(newPage) => setPage(newPage)}
            />
          </div>
        )}
      </div>
    </>
  );
}
