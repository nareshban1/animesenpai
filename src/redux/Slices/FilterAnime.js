import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const filterSlice = createSlice({
  name: "filter",
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

export default filterSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = filterSlice.actions;

export const filterAnime =
  (query, genres, rating, type, status, orderby, sort, page) => (dispatch) => {
    const url = `https://api.jikan.moe/v3/search/anime?q=${query}&genre=${genres}&rated=${rating}&type=${type}&status=${status}&order_by=${orderby}&sort=${sort}&page=${page}`;
    console.log(url);
    return dispatch(
      apiCallStart({
        url,
        onStart: dataRequested.type,
        onSuccess: dataReceived.type,
        onError: dataRequestFailed.type,
      })
    );
  };
