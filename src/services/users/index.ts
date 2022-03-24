import { User } from "../../models/user";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
import { gatewayPort } from "../../constants";

interface FetchUserQueryParams {
  uid: string;
}
// interface PostUserQueryParams {
//   email: string;
//   name: string;
//   lastName: string;
//   address: string;
// }

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: apiBaseQuery(`http://localhost:${gatewayPort}/users/api/v1/users`),
  tagTypes: ["Users"],
  endpoints(builder) {
    return {
      fetchUser: builder.query<User, FetchUserQueryParams>({
        query: (queryParams) => ({
          url: `/${queryParams.uid}`,
          method: "GET",
          data: {},
        }),
        providesTags: ["Users"],
      }),
      postUser: builder.mutation<User, User>({
        query: (queryParams) => ({
          url: `/`,
          method: "POST",
          data: queryParams,
        }),
        invalidatesTags: ["Users"],
      }),
      putUser: builder.mutation<User, User>({
        query: (queryParams) => ({
          url: `/`,
          method: "PUT",
          data: queryParams,
        }),
        invalidatesTags: ["Users"],
      }),
    };
  },
});

export const { useFetchUserQuery, usePostUserMutation, usePutUserMutation } =
  usersApi;
