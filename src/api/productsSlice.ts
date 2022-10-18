import { api } from ".";
import { ProductProps } from "../components/product/product.props";

export const productsSlice = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => {
        return {
          url: "/marketplace/blocks",
          method: "GET",
        };
      },
      providesTags: ["Product"],
      transformResponse: (response: { data: ProductProps[] }) => {
        return response.data.filter(
          (product) => product.metadata.blockPricingStrategy.name === "simple"
        );
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsSlice;
