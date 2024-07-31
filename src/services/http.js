import axios from "axios";
import { BASE_URL, USER_API_URL } from "./api";
const http = axios.create({
  baseURL: BASE_URL,
});

export const getUserService = async () => {
  try {
    const response = await http.get(USER_API_URLsadasd);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
