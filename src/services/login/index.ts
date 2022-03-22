import { User } from "../../models/user";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
import { gatewayPort } from "../../constants";

interface QueryParams {
  email: string;
  password: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: apiBaseQuery(
    `http://localhost:${gatewayPort}/authentication/api/v1/user`
  ),
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
