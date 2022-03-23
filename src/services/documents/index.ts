import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
import { gatewayPort } from "../../constants";

interface FetchDocumentsQueryParams {
  uid: string;
}
interface PostDocumentsQueryParams {
  idUser: string;
  url: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  date: string;
}

interface PostValidateDocumentsQueryParams {
  uId: string;
  documentId: string;
  fileUrl: string;
  fileName: string;
}

export const documentsApi = createApi({
  reducerPath: "documentsApi",
  baseQuery: apiBaseQuery(
    `http://localhost:${gatewayPort}/documents/api/v1/documents`
  ),
  tagTypes: ["Document"],
  endpoints(builder) {
    return {
      fetchDocumentsByUserId: builder.query<any, FetchDocumentsQueryParams>({
        query: (queryParams) => ({
          url: `/${queryParams.uid}`,
          method: "GET",
          data: {},
        }),
        providesTags: ["Document"],
      }),
      postDocuments: builder.mutation<any, PostDocumentsQueryParams>({
        query: (queryParams) => ({
          url: `/`,
          method: "POST",
          data: queryParams,
        }),
        invalidatesTags: ["Document"],
      }),
      validateDocuments: builder.mutation<
        any,
        PostValidateDocumentsQueryParams[]
      >({
        query: (queryParams) => ({
          url: `/validateDocuments`,
          method: "POST",
          data: queryParams,
        }),
        invalidatesTags: ["Document"],
      }),
    };
  },
});

export const {
  useFetchDocumentsByUserIdQuery,
  usePostDocumentsMutation,
  useValidateDocumentsMutation,
} = documentsApi;
