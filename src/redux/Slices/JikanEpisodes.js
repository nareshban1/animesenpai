import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikananimeepisodesSlice = createSlice({
  name: "jikanepisodes",
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

export default jikananimeepisodesSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } =
  jikananimeepisodesSlice.actions;

export const fetchJikanAnimeEpisodes = (id) => (dispatch) => {
  const url = `https://api.jikan.moe/v3/anime/${id}/episodes`;
  return dispatch(
    apiCallStart({
      url,
      onStart: dataRequested.type,
      onSuccess: dataReceived.type,
      onError: dataRequestFailed.type,
    })
  );
};
