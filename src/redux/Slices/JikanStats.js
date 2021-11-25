import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikanstatsSlice = createSlice({
    name: "stats",
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

export default jikanstatsSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = jikanstatsSlice.actions;


export const fetchJikanAnimeStats = (id) => (dispatch) => {
    const baseURL = "https://api.jikan.moe/v3";
    const url = `/anime/${id}/stats`
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

