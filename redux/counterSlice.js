import { createSlice } from "@reduxjs/toolkit";

// create a slice
const initialState = {
  valueNum: 10,
  data: null,
};
const iconslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.valueNum++;
    },
    decrement: (state) => {
      state.valueNum--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    allData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  allData,
} = iconslice.actions;
export const counterState = (state) => state.counter.valueNum;
export const data = (state) => state.counter.data;
export default iconslice.reducer;
