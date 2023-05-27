import { configureStore } from "@reduxjs/toolkit";
import iconslice from "../redux/counterSlice";

const store = configureStore({
  reducer: {
    counter: iconslice,
  },
});

// export default the store
export default store;
