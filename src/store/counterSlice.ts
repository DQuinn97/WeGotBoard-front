import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/index";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, setValue } = counterSlice.actions;

export const getCount = (state: RootState) => state.counterSlice.value;
