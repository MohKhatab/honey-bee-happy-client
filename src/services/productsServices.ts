import { backendURL } from "../config";
import axios from "axios";

export const fetchProduct = async (productId: string) => {
  const response = await fetch(`${backendURL}/products/${productId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID ${productId}`);
  }

  return response.json();
};

export const fetchProducts = async ({
  page,
  limit,
  filters = {},
}: {
  page: number;
  limit: number;
  filters?: Record<string, string | string[]>;
}) => {
  const params = {
    page,
    limit,
    ...filters,
  };

  const { data } = await axios.get(`${backendURL}/products`, {
    params,
  });
  return data;
};
