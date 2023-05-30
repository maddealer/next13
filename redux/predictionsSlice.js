import { createSlice } from "@reduxjs/toolkit";

// create a slice
const initialState = {
  data: null,
};
const predictionsSlice = createSlice({
  name: "predictions",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.valueNum++;
    // },
    // decrement: (state) => {
    //   state.valueNum--;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    // decrementByAmount: (state, action) => {
    //   state.value -= action.payload;
    // },
    allData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { allData } = predictionsSlice.actions;
export const data = (state) => state.predictions.data;
export default predictionsSlice.reducer;
