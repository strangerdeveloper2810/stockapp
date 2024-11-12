import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';

const API_URL: string = 'https://protrade.finsc.vn/api';
export const ACCESS_TOKEN: string = 'accessToken';

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export const httpNextServer = axios.create({
  timeout: 5000,
});

httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers || new axios.AxiosHeaders();

    config.headers.set('Authorization', `Bearer ${ACCESS_TOKEN}`);
    config.headers.set('Accept', 'application/json');

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      redirect('/login'); // Thay thế window.location.href bằng redirect
    }
    return Promise.reject(error);
  },
);
