import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counter.slice";
import cartSlice from "../slice/cart.slice";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    cart: cartSlice,
  },
});
