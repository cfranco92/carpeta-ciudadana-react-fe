import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";

interface QueryParams {
  uid: string;
  file: File;
}

export const filesApi = createApi({
  reducerPath: "filesApi",
  baseQuery: apiBaseQuery("/documents/api/v1"),
  tagTypes: ["Files"],
  endpoints(builder) {
    return {
      postFile: builder.mutation<string, QueryParams>({
        query: (queryParams) => ({
          url: `/${queryParams.uid}`,
          method: "POST",
          data: {
            file: queryParams.file,
          },
        }),
        invalidatesTags: ["Files"],
      }),
    };
  },
});

export const { usePostFileMutation } = filesApi;
