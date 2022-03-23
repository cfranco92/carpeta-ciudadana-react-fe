import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
import { gatewayPort } from "../../constants";

interface QueryParams {
  email: string;
  password: string;
}

interface createNewKeycloakUserParams {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  address: string;
  numIdentificacion: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: apiBaseQuery(
    `http://localhost:${gatewayPort}/authentication/api/v1/user`
  ),
  tagTypes: ["Login"],
  endpoints(builder) {
    return {
      login: builder.mutation<any, QueryParams>({
        query: (queryParams) => ({
          url: `/login`,
          method: "POST",
          data: { queryParams },
        }),
        // invalidatesTags: ["Login"],
      }),
      createNewKeycloakUser: builder.mutation<any, createNewKeycloakUserParams>(
        {
          query: (queryParams) => ({
            url: `/`,
            method: "POST",
            data: { queryParams },
          }),
          // invalidatesTags: ["Login"],
        }
      ),
    };
  },
});

export const { useCreateNewKeycloakUserMutation, useLoginMutation } = loginApi;
