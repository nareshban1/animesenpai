import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const topupcomingSlice = createSlice({
  name: "topUpcoming",
  initialState: {
    data: [],
    loading: false,
    error: [],
  },
  reducers: {
    dataRequested: (state) => {
      state.loading = true;
      state.error = [];
      state.data = [];
    },

    dataReceived: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = [];
    },

    dataRequestFailed: (state) => {
      state.loading = false;
      state.error = ["404"];
      state.data = [];
    },
  },
});

export default topupcomingSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } =
  topupcomingSlice.actions;

export const fetchTopUpcoming = (page) => (dispatch) => {
  const url = `https://api.jikan.moe/v3/top/anime/1/upcoming`;
  return dispatch(
    apiCallStart({
      url,
      onStart: dataRequested.type,
      onSuccess: dataReceived.type,
      onError: dataRequestFailed.type,
    })
  );
};
