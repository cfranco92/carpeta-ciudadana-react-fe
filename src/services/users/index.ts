import { User } from "../../models/user";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";

interface QueryParams {
  uid: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: apiBaseQuery("https://carpetaciudadana.com/users/api/v1"),
  tagTypes: ["Users"],
  endpoints(builder) {
    return {
      fetchUser: builder.query<User, QueryParams>({
        query: (queryParams) => ({
          url: `/${queryParams.uid}`,
          method: "GET",
          data: {},
        }),
        providesTags: ["Users"],
      }),
    };
  },
});

export const { useFetchUserQuery } = usersApi;
