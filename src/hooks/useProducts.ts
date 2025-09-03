import { useQuery } from "react-query";
import { fetchProducts } from "../services/productsServices";

export const useProducts = ({
  page,
  limit,
  filters,
}: {
  page: number;
  limit: number;
  filters?: Record<string, string | string[]>;
}) => {
  return useQuery({
    queryKey: ["products", page, limit, filters],
    queryFn: () => fetchProducts({ page, limit, filters }),
    keepPreviousData: true,
    staleTime: 1000 * 60,
  });
};
