import { User } from "../../models/user";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";

interface FetchUserQueryParams {
  uid: string;
}
interface PostUserQueryParams {
  user: User;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: apiBaseQuery("https://carpetaciudadana.com/users/api/v1"),
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
