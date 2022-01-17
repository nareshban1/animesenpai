import { createSlice } from "@reduxjs/toolkit";

const Paginate = createSlice({
  name: "page",
  initialState: {
    pageNo: 1,
  },
  reducers: {
    nextPage: (state) => {
      state.pageNo += 1;
    },
    prevPage: (state) => {
      state.pageNo -= 1;
    },
    toPage: (state, action) => {
      state.pageNo = action.payload;
    },

    reset: (state) => {
      state.pageNo = 1;
    },
  },
});

export const { nextPage, prevPage, toPage, reset } = Paginate.actions;

export default Paginate.reducer;
