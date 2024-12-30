import { AxiosRequestConfig, AxiosError, default as axios } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query";

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: unknown;
      params?: unknown;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url,
        method,
        data,
        params,
        baseURL: "http://localhost:3030/api",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Respuesta del servidor:", result);
      return { data: result.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Error en la solicitud:", axiosError.response);
      return {
        error: {
          status: axiosError.response?.status || 500,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };
