import { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Typography from "@mui/material/Typography";

import "./products.styles.scss";
import { useGetProductsQuery } from "../../api/productsSlice";
import { Product, ProductProps } from "../../components/product";
import { addItemToCart } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../hooks/index";
import { SkeletonLoader } from "../../components/skeleton";
import { Input } from "../../components/input";

export const ProductsView: FC<{}> = () => {
  const { data, isLoading, error } = useGetProductsQuery({});
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<ProductProps[] | undefined>(
    data
  );

  useEffect(() => {
    let userFilteredData: ProductProps[] = [];

    if (data && data.length > 0) {
      userFilteredData = data;

      if (inputValue) {
        userFilteredData = data?.filter(
          (product) => product.name.includes(inputValue)
        );
      }
    }
    setFilteredData(userFilteredData);

  }, [inputValue, data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddToCart = (item: ProductProps) => {
    const {
      id,
      name,
      description,
      metadata: {
        blockPricingStrategy: { credits },
      },
    } = item;
    dispatch(addItemToCart({ id, name, description, credits }));
  };

  if (error) {
    return (
      <Box mt={10} display="flex" flexDirection="column" alignItems="center">
        <ErrorOutlineIcon />
        <Typography variant="body1" mt={2} sx={{ fontWeight: "bold" }}>
          An error occurred. Please reload.
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={10} className="products-view" p={3}>
      {isLoading && <SkeletonLoader />}
      <Input value={inputValue} handleChange={handleInputChange} />
      {filteredData && filteredData?.length > 0 && (
        <Grid container spacing={2}>
          {filteredData.map((product: ProductProps) => (
            <Grid
              item
              lg={3}
              sm={6}
              xs={12}
              key={product.id}
              sx={{ display: "grid", placeItems: "center" }}
            >
              <Product
                product={{
                  ...product,
                  id: `${product.id}-${Math.random() * 1000}`,
                }}
                handleAddToCart={handleAddToCart}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
