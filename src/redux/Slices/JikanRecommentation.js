import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikanrecommendationSlice = createSlice({
  name: "recommendation",
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

    dataRequestFailed: (state) => {
      state.data = [];
      state.loading = false;
      state.error = ["404"];
    },
  },
});

export default jikanrecommendationSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } =
  jikanrecommendationSlice.actions;

export const fetchJikanAnimeRecommendations = (id) => (dispatch) => {
  const url = `https://api.jikan.moe/v3/anime/${id}/recommendations`;
  return dispatch(
    apiCallStart({
      url,
      onStart: dataRequested.type,
      onSuccess: dataReceived.type,
      onError: dataRequestFailed.type,
    })
  );
};
