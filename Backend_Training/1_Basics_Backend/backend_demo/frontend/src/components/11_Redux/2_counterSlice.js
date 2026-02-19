import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("➕ Increment reducer called");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("➖ Decrement reducer called");
      state.value -= 1;
    },
    reset: (state) => {
      console.log("🔄 Reset reducer called");
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
