import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const animedetailSlice = createSlice({
    name: "anime",
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

export default animedetailSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = animedetailSlice.actions;


export const fetchAnimeDetail = (id) => (dispatch) => {
    const baseURL = "https://api.aniapi.com";
    const url = `/v1/anime?mal_id=${id}&nsfw=false`
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

