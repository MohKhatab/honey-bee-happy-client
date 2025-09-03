import axios from "axios";
import { backendURL } from "../config";

export const fetchCategories = async () => {
  const res = await axios.get(`${backendURL}/categories`);
  return res.data.data;
};

export type Category = {
  name: string;
  _id: string;
};
