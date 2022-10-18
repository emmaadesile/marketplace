import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./product.styles.scss";
import { ProductCardProps } from "./product.props";

export const Product: React.FC<ProductCardProps> = ({
  product,
  handleAddToCart,
}) => {
  return (
    <Card className="product-card" data-testid="product-card">
      <CardMedia
        component="img"
        height="100"
        image={product.metadata.blockThumbnailUrl || ""}
        alt="product-thumbnail"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          data-testid="name"
        >
          {product.name.slice(0, 20)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: 40 }}
          data-testid="description"
        >
          {product.description.slice(0, 70)}
        </Typography>
        <Typography
          variant="body2"
          mt={2}
          sx={{ fontWeight: "bold" }}
          data-testid="credits"
        >
          {product.metadata.blockPricingStrategy.credits} Credits
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => handleAddToCart(product)}
          fullWidth
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
