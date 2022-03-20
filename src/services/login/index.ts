import { User } from "../../models/user";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";

interface QueryParams {
  email: string;
  password: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: apiBaseQuery("https://carpetaciudadana.com/login/api/v1"),
  tagTypes: ["Login"],
  endpoints(builder) {
    return {
      login: builder.query<User, QueryParams>({
        query: (queryParams) => ({
          url: `/token`,
          method: "GET",
          data: { email: queryParams.email, password: queryParams.password },
        }),
        providesTags: ["Login"],
      }),
    };
  },
});

export const { useLoginQuery } = loginApi;
