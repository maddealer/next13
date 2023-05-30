import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  federation: "UEFA",
  league: "",
};

const leagueSlice = createSlice({
  name: "league",
  initialState,
  reducers: {
    setFederation: (state, action) => {
      state.federation = action.payload;
    },
    setLeague: (state, action) => {
      state.league = action.payload;
    },
  },
});

export const getFederation = (state) => state.league.federation;
export const getLeague = (state) => state.league.league;
export const { setFederation, setLeague } = leagueSlice.actions;
export default leagueSlice.reducer;
