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


    }
});

export default filterSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = filterSlice.actions;


export const filterAnime = (query, genres, rating, type, status, orderby, page) => (dispatch) => {
    const baseURL = "https://api.jikan.moe/v3";
    const url = `/search/anime?q=${query}&genre=${genres}&rated=${rating}&type=${type}&status=${status}&order_by=${orderby}&page=${page}`
    console.log(baseURL + url)
    return dispatch(
        apiCallStart({
            baseURL,
            url,
            onStart: dataRequested.type,
            onSuccess: dataReceived.type,
            onError: dataRequestFailed.type,
        })

    );
}
