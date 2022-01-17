import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikananimedetailSlice = createSlice({
  name: "jikananime",
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

export default jikananimedetailSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } =
  jikananimedetailSlice.actions;

export const fetchJikanAnimeDetail = (id) => (dispatch) => {
  const url = `https://api.jikan.moe/v3/anime/${id}`;
  return dispatch(
    apiCallStart({
      url,
      onStart: dataRequested.type,
      onSuccess: dataReceived.type,
      onError: dataRequestFailed.type,
    })
  );
};
