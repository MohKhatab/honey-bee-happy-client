import { truncateText } from "../../utils/truncateText";

type ProductCardProps = {
  product: {
    _id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    inStock: boolean;
    category: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div
        className={`rounded-lg relative mb-18 aspect-3/4 sm:max-w-none mx-auto sm:mx-0 w-[80%] sm:w-full group shadow-lg hover:shadow-xl transition-shadow duration-300`}
      >
        <img
          src={product.thumbnail}
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
        <div className="bg-primary-50 absolute -bottom-20 p-4 shadow-lg w-[90%] left-1/2 -translate-x-1/2 rounded-lg text-center text-xl">
          <p className="truncate">{product.title}</p>
          <p className="text-sm mt-2 text-grayscale-500">
            {truncateText(60, product.description)}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-yellow-600 font-bold text-md">
              {product.price.toFixed(2)}€
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold 
                ${
                  product.category === "Edible"
                    ? "bg-secondary-200 text-secondary-800"
                    : "bg-accent-200 text-accent-800"
                }`}
            >
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
