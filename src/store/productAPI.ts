import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductQuery } from "../types";

const productAPI = createApi({
  tagTypes: ["Product"],
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/p",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductQuery>({
      query: ({
        products = "products",
        page = 0,
        limit = 15,
        sort = undefined,
        order = undefined,
        priceMax = 999,
        playerMin = 1,
        playerMax = 99,
        tags = undefined,
        categories = undefined,
        difficulty = undefined,
        duration = undefined,
        search = undefined,
      }) => {
        return {
          url: `/${products}`,
          method: "GET",
          params: {
            page,
            limit,
            sort,
            order,
            priceMax,
            playerMin,
            playerMax,
            tags,
            categories,
            difficulty,
            duration,
            search,
          },
        };
      },
      providesTags: ["Product"],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export default productAPI;

export const { useGetProductsQuery } = productAPI;

/*
`products?${`page=${page}&`}${`limit=${limit}&`}${
          sort ? `sort=${sort}&` : ""
        }${order ? `order=${order}&` : ""}${
          priceMax ? `priceMax=${priceMax}&` : ""
        }${playerMin ? `playerMin=${playerMin}&` : ""}${
          playerMax ? `playerMax=${playerMax}&` : ""
        }${tags.length > 0 ? `tags=${tags.join(",")}&` : ""}${
          categories.length > 0 ? `categories=${categories}&` : ""
        }${difficulty ? `difficulty=${difficulty}&` : ""}${
          duration ? `duration=${duration}` : ""
        }`,
*/
