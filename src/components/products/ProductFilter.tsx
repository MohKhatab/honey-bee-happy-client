import { PiFunnelBold, PiMagnifyingGlassBold, PiXBold } from "react-icons/pi";
import Button from "../common/Button";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useCategories } from "../../hooks/useCategories";
import type { Category } from "../../services/categoryService";
import MultiRangeSlider from "../common/MultiRangeSlider";
import axios from "axios";
import { backendURL } from "../../config";
import { useQuery } from "react-query";

const getPriceRange = async () => {
  const res = await axios.get(backendURL + "/products/price");
  return res.data;
};

export default function ProductFilter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setMinVal(Number(searchParams.get("price[gte]")) || 0);
    setMaxVal(Number(searchParams.get("price[lte]")) || 999);
  }, [searchParams]);

  const { data: priceRange, isFetched } = useQuery({
    queryKey: ["priceRange"],
    queryFn: getPriceRange,
    onSuccess(data) {
      console.log(data);
    },
  });

  const [minVal, setMinVal] = useState(
    Number(searchParams.get("price[gte]")) || 0
  );
  const [maxVal, setMaxVal] = useState(
    Number(searchParams.get("price[lte]")) || 999
  );
  const { data } = useCategories();

  const handleQueryChange = (
    key: string,
    value: string,
    options?: { multi?: boolean }
  ) => {
    const nextParams = new URLSearchParams(searchParams);

    if (options?.multi) {
      const values = nextParams.getAll(key);

      if (values.includes(value)) {
        const filtered = values.filter((v) => v !== value);
        nextParams.delete(key);
        filtered.forEach((v) => nextParams.append(key, v));
      } else {
        nextParams.append(key, value);
      }
    } else {
      nextParams.set(key, value);
    }

    setSearchParams(nextParams);
  };

  const handlePriceChange = (min: number, max: number) => {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.set("price[gte]", String(min));
    nextParams.set("price[lte]", String(max));

    setSearchParams(nextParams);
  };

  return (
    <div className="flex mb-2 sm:mb-6 gap-4 justify-between">
      <div className="relative lg:min-w-xl lg:w-fit w-full">
        <PiMagnifyingGlassBold className="absolute top-4.5 left-0  text-grayscale-500 text-xl" />
        <input
          placeholder="Enter product name"
          className={`h-14 w-full pl-7 text-xl border-b-1 outline-none transition-colors placeholder:text-grayscale-300 focus:border-primary-500 border-grayscale-200
        `}
        />
        <label
          className={`
          absolute left-0 transition-all text-base -top-4.5 font-semibold text-primary-600
        `}
        >
          Search Products
        </label>
      </div>

      <Button
        handler={() => setMenuOpen(true)}
        variant="secondary"
        classes="text-xl text-primary-500 hover:text-primary-500/80"
      >
        <span className="flex items-center gap-2">
          <PiFunnelBold className="text-4xl md:text-2xl" />
          <span className="hidden md:inline">Filters</span>
        </span>
      </Button>

      <div
        onClick={() => setMenuOpen(false)}
        className={`h-screen w-full fixed top-0 left-0 z-50 transition-opacity duration-200 ${
          menuOpen
            ? "opacity-100 no-doc-scroll pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-grayscale-950/70`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-xs sm:w-sm min-h-[100dvh] ml-auto bg-primary-50 overflow-y-auto transform transition-transform duration-200 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-6 mt-6 flex flex-col gap-6">
            <div className="flex mb-2 justify-between items-center">
              <h2 className="text-2xl text-grayscale-700 font-bold">Filters</h2>
              <Button
                variant="secondary"
                classes="pr-0"
                handler={() => setMenuOpen(false)}
              >
                <PiXBold className="text-3xl text-grayscale-700" />
              </Button>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-grayscale-500">Sort by</label>
              <select
                className="bg-primary-100 shadow-sm px-2 py-4 rounded-lg text-grayscale-800 font-semibold cursor-pointer hover:bg-primary-200/75 transition-colors
                focus:outline-none"
                name="sort-by"
                id="sort-by"
                value={searchParams.get("sort") || "createdAt"}
                onChange={(e) => handleQueryChange("sort", e.target.value)}
              >
                <option value="-createdAt">Newest Products</option>
                <option value="createdAt">Oldest Products</option>
                <option value="-price">Price High to Low</option>
                <option value="price">Price Low to High</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-grayscale-500">Category</label>
              <select
                className="bg-primary-100 shadow-sm px-2 py-4 rounded-lg text-grayscale-800 font-semibold cursor-pointer hover:bg-primary-200/75 transition-colors
                focus:outline-none"
                name="category"
                id="category"
                onChange={(e) => handleQueryChange("category", e.target.value)}
                value={searchParams.get("category") || "all"}
              >
                <option value="all">All Categories</option>;
                {data &&
                  data.map((c: Category) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-grayscale-500">Price</label>
              {isFetched && (
                <MultiRangeSlider
                  max={isFetched ? priceRange.max : 999}
                  min={isFetched ? priceRange.min : 0}
                  maxVal={maxVal}
                  minVal={minVal}
                  setMaxVal={setMaxVal}
                  setMinVal={setMinVal}
                  handlePriceChange={handlePriceChange}
                />
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-grayscale-500">Availability</label>
              <div className="checkbox-wrapper-13 flex items-center">
                <input
                  checked={searchParams.getAll("inStock").includes("true")}
                  onChange={() =>
                    handleQueryChange("inStock", "true", { multi: true })
                  }
                  id="c1-13"
                  type="checkbox"
                />
                <label htmlFor="c1-13">In Stock</label>
              </div>

              <div className="checkbox-wrapper-13 flex items-center">
                <input
                  checked={searchParams.getAll("inStock").includes("false")}
                  onChange={() =>
                    handleQueryChange("inStock", "false", { multi: true })
                  }
                  id="c1-14"
                  type="checkbox"
                />
                <label htmlFor="c1-14">Out Of Stock</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
