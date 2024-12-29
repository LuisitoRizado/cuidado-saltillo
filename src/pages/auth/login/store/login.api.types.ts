import { baseApi } from "@/api/baseApi";

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.query<unknown, unknown>({
      query: () => ({ url: "/login", method: "GET" }),
    }),
  }),
});

export const { useLoginUserQuery } = loginApi;
