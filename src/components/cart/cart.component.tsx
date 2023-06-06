import { FC } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

import "./cart.styles.scss";
import { CartProps } from "./cart.props";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const Cart: FC<CartProps> = ({
  isOpen,
  cartItems,
  handleBuyItems,
  removeFromCart,
  toggleCartDrawer,
}) => {
  const total = cartItems.reduce((acc, item) => acc + item.credits, 0);
  
  return (
    <div>
      <Drawer anchor="right" open={isOpen} onClose={toggleCartDrawer}>
        {!cartItems.length ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ justifyContent: "center", height: "100%" }}
          >
            <Typography variant="body1" data-testid="empty-cart">
              Your cart is empty
            </Typography>
            <Box mt={1}>
              <Button
                onClick={toggleCartDrawer}
                variant="outlined"
                data-testid="close"
              >
                Close
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            <Box px={4} py={2}>
              <Box
                display="flex"
                sx={{
                  position: "fixed",
                  width: "23rem",
                  top: 0,
                  right: 0,
                  zIndex: 10,
                  backgroundColor: "#f5f5f5",
                  height: "2rem",
                }}
                px={2}
                py={1}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                  data-testid="cart-title"
                >
                  Cart - {cartItems.length} item(s)
                </Typography>
              </Box>
            </Box>
            <Box role="presentation">
              <List sx={{marginBottom: '6rem'}}>
                {cartItems.map((product, index) => (
                  <Box
                    p={2}
                    sx={{ overflow: "scroll" }}
                    key={`${index}-${product.id}`}
                  >
                    <ListItem>
                      <Box
                        display="flex"
                        flexDirection="column"
                        width="100%"
                        data-testid="cart-item"
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          sx={{ justifyContent: "space-between" }}
                        >
                          <Typography variant="body1" color="primary">
                            {product.name}
                          </Typography>
                          <Button
                            size="small"
                            color="error"
                            data-testid="delete-btn"
                            onClick={() => removeFromCart(product.id)}
                          >
                            <DeleteIcon fontSize="small" />
                          </Button>
                        </Box>

                        <Box mt={1}>
                          <Typography variant="body2">
                            {product.description}
                          </Typography>
                        </Box>
                        <Box
                          mt={1}
                          display="flex"
                          sx={{ justifyContent: "flex-end" }}
                          pr={2}
                        >
                          <Typography variant="body1" fontWeight="bold">
                            {product.credits} credits
                          </Typography>
                        </Box>
                      </Box>
                    </ListItem>
                    <Divider />
                  </Box>
                ))}
              </List>
              <Box
                px={3}
                pt={2}
                pb={4}
                mb={2}
                sx={{
                  position: "fixed",
                  width: "22rem",
                  bottom: "-1rem",
                  backgroundColor: "#f5f5f5",
                  height: "4rem",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mb={2}
                  data-testid="total"
                >
                  <Typography>Total:</Typography>
                  <Typography color="primary" sx={{ fontWeight: "bold" }}>
                    {total} credits
                  </Typography>
                </Box>
                <Box mb={1}>
                  <Button
                    variant="contained"
                    data-testid="buyBtn"
                    fullWidth
                    onClick={handleBuyItems}
                  >
                    Buy now
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Drawer>
    </div>
  );
};
