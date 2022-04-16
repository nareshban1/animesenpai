import { configureStore } from "@reduxjs/toolkit";
import pagination from "./Slices/pagination";
import { aniApi, jikanApi } from "./Query/apiEndpoints";

export const store = configureStore({
  reducer: {
    pageNumber: pagination,
    [jikanApi.reducerPath]: jikanApi.reducer,
    [aniApi.reducerPath]: aniApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(aniApi.middleware)
      .concat(jikanApi.middleware),
});
