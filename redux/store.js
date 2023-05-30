import { configureStore } from "@reduxjs/toolkit";
import predictionsSlice from "./predictionsSlice";
import leagueReducer from "./leagueSlice";
const store = configureStore({
  reducer: {
    predictions: predictionsSlice,
    league: leagueReducer,
  },
});

// export default the store
export default store;
