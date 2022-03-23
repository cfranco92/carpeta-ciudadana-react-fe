import { User } from "../../models/user";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
import { gatewayPort } from "../../constants";

interface FetchUserQueryParams {
  uid: string;
}
interface PostUserQueryParams {
  user: User;
}

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
      postUser: builder.mutation<User, PostUserQueryParams>({
        query: (queryParams) => ({
          url: `/`,
          method: "POST",
          data: queryParams.user,
        }),
        invalidatesTags: ["Users"],
      }),
    };
  },
});

export const { useFetchUserQuery, usePostUserMutation } = usersApi;
