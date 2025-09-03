import axios from "axios";
import type { IFormInput } from "../pages/Contact";
import { backendURL } from "../config";

export const postContact = async (contactData: IFormInput) => {
  const { data } = await axios.post(`${backendURL}/mails`, contactData, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};
