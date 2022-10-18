import { ProductProps } from "../components/product/product.props";

export const product: ProductProps = {
  id: "sample-product-id",
  name: "tiling",
  description: "product description",
  metadata: {
    blockThumbnailUrl: "https://product.com",
    blockPricingStrategy: {
      name: "simple",
      credits: 3,
    },
  },
};
