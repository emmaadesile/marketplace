import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { Cart } from "./cart.actionType";

type CartState = {
  userCredits: number;
  cartItems: Cart[];
};

const initialState: CartState = {
  userCredits: 10000,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Cart>) => {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    },
    removeAllItemsFromCart: (
      state,
      action: PayloadAction<{ userCredits: number }>
    ) => {
      return {
        ...state,
        cartItems: [],
        userCredits: action.payload.userCredits,
      };
    },
  },
});

export const { addItemToCart, removeItemFromCart, removeAllItemsFromCart } =
  cartSlice.actions;

export const userCredits = (state: RootState) => state.cart.userCredits;
export const cartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
