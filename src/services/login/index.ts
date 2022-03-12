import { User } from "../../models/user";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";

interface QueryParams {
  email: string;
  password: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: apiBaseQuery("/login/api/v1"),
  tagTypes: ["Login"],
  endpoints(builder) {
    return {
      resetPassword: builder.mutation<User, QueryParams>({
        query: (queryParams) => ({
          url: `/token`,
          method: "post",
          data: { email: queryParams.email, password: queryParams.password },
        }),
        invalidatesTags: ["Login"],
      }),
    };
  },
});

export const { useResetPasswordMutation } = loginApi;
