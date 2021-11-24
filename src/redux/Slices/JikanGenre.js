import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikanGenreSlice = createSlice({
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

        dataRequestFailed: (state, action) => {
            state.error = ["404"];
            state.loading = false;
            state.data = [];

        },


    }
});

export default jikanGenreSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = jikanGenreSlice.actions;


export const fetchJikanAnimeGenre = (id, page) => (dispatch) => {
    const baseURL = "https://api.jikan.moe/v3";
    const url = `/genre/anime/${id}/${page}`
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

