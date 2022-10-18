import { FC } from "react";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import "./nav.styles.scss";
import { Logo } from "../icons/logo";
import { NavProps } from "./nav.props";

export const Navigation: FC<NavProps> = ({
  cartItemsCount,
  toggleCartDrawer,
  userCredits,
}) => {
  return (
    <header>
      <Box className="nav">
        <Box data-testid="logo">
          <Logo />
        </Box>
        <Box
          className="cartIcon"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Typography variant="body1" color="white" data-testid="user-credits">
            Total Credits: {userCredits.toFixed(3)}
          </Typography>
          <Badge
            badgeContent={cartItemsCount}
            color="info"
            data-testid="cart-icon"
            onClick={toggleCartDrawer}
          >
            <ShoppingCartIcon sx={{ fill: "#fff" }} />
          </Badge>
        </Box>
      </Box>
    </header>
  );
};
