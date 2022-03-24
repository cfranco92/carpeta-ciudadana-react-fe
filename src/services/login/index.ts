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
  baseQuery: apiBaseQuery(`http://localhost/authentication/api/v1/user`),
  tagTypes: ["Login"],
  endpoints(builder) {
    return {
      login: builder.mutation<any, QueryParams>({
        query: (queryParams) => ({
          url: `/login`,
          method: "POST",
          data: queryParams,
        }),
        // invalidatesTags: ["Login"],
      }),
      createNewKeycloakUser: builder.mutation<any, User>({
        query: (queryParams) => ({
          url: ``,
          method: "POST",
          data: queryParams,
        }),
        // invalidatesTags: ["Login"],
      }),
    };
  },
});

export const { useCreateNewKeycloakUserMutation, useLoginMutation } = loginApi;
