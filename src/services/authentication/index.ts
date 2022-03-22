import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
import { gatewayPort } from "../../constants";
import qs from "qs";

//

interface QueryParams {
  uid: string;
}

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: apiBaseQuery(
    `http://localhost:31002/auth/realms/master/protocol/openid-connect`
  ),
  tagTypes: ["Files"],
  endpoints(builder) {
    const myData = {
      grant_type: "client_credentials",
      client_id: "carpeta-ciudadana",
      client_secret: "a2b5144a-a39e-4d8b-af98-7c0caca2e05c",
    };
    return {
      getToken: builder.mutation<
        { data: { access_token: string } },
        QueryParams
      >({
        query: () => ({
          url: `/token`,
          method: "POST",
          data: qs.stringify(myData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        }),
        invalidatesTags: ["Files"],
      }),
    };
  },
});

export const { useGetTokenMutation } = authenticationApi;
