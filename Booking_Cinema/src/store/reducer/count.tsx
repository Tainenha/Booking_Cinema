// create slice for the count

import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: (state) => 0,
  },
});

export const { increment, decrement, reset } = countSlice.actions;
export default countSlice.reducer;
