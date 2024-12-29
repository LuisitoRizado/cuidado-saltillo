import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./baseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    testQuery: builder.query<unknown, void>({
      query: () => ({ url: "/test", method: "GET" }),
    }),
  }),
});

export const { useLazyTestQueryQuery, useTestQueryQuery } = baseApi;
