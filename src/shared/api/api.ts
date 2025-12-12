import axios from 'axios';

export const baseService = axios.create({
  withCredentials: true,
  baseURL: process.env.PUBLIC_BACK_PROD,
});

