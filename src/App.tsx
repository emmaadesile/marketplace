import React, { useState } from "react";
import { Box } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

import "./App.scss";
import { Navigation } from "./components/nav";
import { ProductsView } from "./views/products/products.view";
import { useAppSelector } from "./hooks/index";
import { Cart } from "./components/cart";
import { Cart as CartType } from "./features/cart/cart.actionType";
import { removeItemFromCart, removeAllItemsFromCart, userCredits, cartItems } from "./features/cart/cartSlice";
import { useAppDispatch } from "./hooks/index";

function App() {
  const cart: CartType[] = useAppSelector(cartItems);
  const credits = useAppSelector(userCredits);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const notify = (type: "success" | "error", message: string) => {
    if (type === "error") {
      return toast.error(message, { duration: 3000 });
    }
    return toast.success(message, { duration: 3000 });
  };

  const handleBuyItems = () => {
    const totalCredits = cart.reduce(
      (accumulator, item) => accumulator + item.credits,
      0
    );
    const hasEnoughCredits = credits >= totalCredits;

    if (!hasEnoughCredits) {
      return notify(
        "error",
        "You don't have enough credits to buy the products."
      );
    }

    dispatch(
      removeAllItemsFromCart({
        userCredits: credits - totalCredits,
      })
    );
    toggleDrawer();
    notify("success", "Items bought successfully");
  };

  const toggleDrawer = (event?: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event?.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsOpen((prevState) => !prevState);
  };

  const removeFromCart = (id: string) => {
    dispatch(removeItemFromCart({ id }));
  };

  return (
    <div className="App">
      <Navigation
        userCredits={credits}
        cartItemsCount={cart.length}
        toggleCartDrawer={toggleDrawer}
      />
      <Box maxWidth="1400px" className="product-wrapper">
        <ProductsView />
      </Box>
      <Cart
        handleBuyItems={handleBuyItems}
        removeFromCart={removeFromCart}
        cartItems={cart}
        isOpen={isOpen}
        toggleCartDrawer={toggleDrawer}
      />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
