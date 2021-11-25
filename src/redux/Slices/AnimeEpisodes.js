import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const animeEpisodesSlice = createSlice({
    name: "animeEpisode",
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

export default animeEpisodesSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = animeEpisodesSlice.actions;

export const fetchAnimeEpisodes = (id, page) => (dispatch) => {
    const baseURL = "https://api.aniapi.com";
    const url = `/v1/episode?anime_id=${id}&source=gogoanime&locale=en&page=${page}`


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
