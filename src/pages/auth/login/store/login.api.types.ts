import { baseApi } from "@/api/baseApi";
import { API_CONSTANTS } from "@/services/RtkQueryConstants";
import { LoginUserRequest, LoginUserResponse } from "./login.api";

const urlLogin = API_CONSTANTS.AUTH.LOGIN;

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginUserResponse, LoginUserRequest>({
      query: (data: LoginUserRequest) => ({
        url: urlLogin,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginApi;
