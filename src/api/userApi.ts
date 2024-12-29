import { User, CreateUserRequest } from "./types/User.types";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({ url: "/users", method: "GET" }),
    }),
    getUserById: builder.query<User, number>({
      query: (id) => ({ url: `/users/${id}`, method: "GET" }),
    }),
    createUser: builder.mutation<User, CreateUserRequest>({
      query: (newUser) => ({ url: "/users", method: "POST", data: newUser }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({ url: `/users/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = userApi;
