import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const animeEpisodesSlice = createSlice({
    name: "animeEpisode",
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {
        dataRequested: (state) => {
            state.data = [];
            state.loading = true;
        },

        dataReceived: (state, action) => {
            state.data = action.payload
            state.loading = false;
        },

        dataRequestFailed: (state) => {
            state.data = [];
            state.loading = false;

        },


    }
});

export default animeEpisodesSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = animeEpisodesSlice.actions;

export const fetchAnimeEpisodes = (id, page) => (dispatch) => {
    const baseURL = "https://api.aniapi.com";
    const url = `/v1/episode?anime_id=${id}&source=dreamsub&locale=it&page=${page}`


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
