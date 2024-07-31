import axios from 'axios';
import { BASE_URL, USER_API_URL } from './api';
const http = axios.create({
  baseURL: BASE_URL,
});

export const getUserService = async () => {
  try {
    const response = await http.get(USER_API_URL);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const createUserService = async (data) => {
  try {
    const response = await http.post(USER_API_URL, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUserService = async (id) => {
  try {
    const response = await http.delete(`${USER_API_URL}/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
