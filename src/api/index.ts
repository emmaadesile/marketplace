import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://api.up42.com",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    mode: "cors",
  }),
  endpoints: () => ({}),
  tagTypes: ["Product"],
});
