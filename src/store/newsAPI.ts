import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { NewsFeed } from "../types";

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/news",
  }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsFeed, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});
