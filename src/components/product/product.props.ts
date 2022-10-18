export type ProductProps = {
  id: string;
  name: string;
  description: string;
  metadata: {
    blockThumbnailUrl?: string;
    blockPricingStrategy: {
      name: string;
      credits: number;
    };
  };
};

export type ProductCardProps = {
  handleAddToCart: (item: ProductProps) => void;
  product: ProductProps;
};
