import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 10,
  reducers: {
    increase: (state) => state + 1,
    decrease: (state) => state - 1,
    increaseby10: (state) => state + 10,
    decreaseby10: (state) => (state <= 0 ? state : state - 10),
  },
});

export const { increase, decrease, increaseby10, decreaseby10 } =
  counterSlice.actions;

export default counterSlice.reducer;
