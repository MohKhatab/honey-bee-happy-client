import axios from "axios";
import { navigate } from "../utils/navigation";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("fired");
    if (!error.response) {
      navigate("/down");
    } else if (error.response.status >= 500) {
      navigate("/down");
    }
    return Promise.reject(error);
  }
);
