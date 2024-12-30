import { baseApi } from "@/api/baseApi";
import { API_CONSTANTS } from "@/services/RtkQueryConstants";
import {
  CreateUsuarioRequest,
  CreateUsuarioResponse,
} from "./register.api.types";

const urlLogin = API_CONSTANTS.AUTH.REGISTER;

export const createUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUsuario: builder.mutation<
      CreateUsuarioResponse,
      CreateUsuarioRequest
    >({
      query: (data: CreateUsuarioRequest) => ({
        url: urlLogin,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreateUsuarioMutation } = createUserApi;
