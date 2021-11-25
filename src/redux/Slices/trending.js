import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const trendingSlice = createSlice({
    name: "trending",
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

export default trendingSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = trendingSlice.actions;


export const fetchTrending = () => (dispatch) => {
    const baseURL = "https://api.jikan.moe/v3";
    const url = `/top/anime/1/airing`
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

export const fetchANITrending = () => (dispatch) => {
    const baseURL = "https://api.aniapi.com/v1";
    const url = `/anime?status=1`
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
