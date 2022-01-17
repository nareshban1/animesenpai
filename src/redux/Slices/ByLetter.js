import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const byLetterSlice = createSlice({
  name: "byletteranime",
  initialState: {
    data: [],
    loading: false,
    error: [],
  },
  reducers: {
    dataRequested: (state) => {
      state.data = [];
      state.loading = true;
      state.error = [];
    },

    dataReceived: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = [];
    },

    dataRequestFailed: (state, action) => {
      state.error = ["404"];
      state.loading = false;
      state.data = [];
    },
  },
});

export default byLetterSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } =
  byLetterSlice.actions;

export const fetchAnimebyLetter = (letter, page) => (dispatch) => {
  const url = `https://api.jikan.moe/v3/search/anime?letter=${letter}&page=${page}`;
  return dispatch(
    apiCallStart({
      url,
      onStart: dataRequested.type,
      onSuccess: dataReceived.type,
      onError: dataRequestFailed.type,
    })
  );
};
