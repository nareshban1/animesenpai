import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const randomSlice = createSlice({
    name: "random",
    initialState: {
        data: [],
        loading: false,
        error: [],
    },
    reducers: {
        dataRequested: (state) => {
            state.loading = true;
            state.data = []
            state.error = []
        },

        dataReceived: (state, action) => {
            state.data = action.payload
            state.loading = false;
            state.error = []
        },

        dataRequestFailed: (state) => {
            state.loading = false;
            state.data = []
            state.error = ["404"]
        },


    }
});

export default randomSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = randomSlice.actions;


export const fetchrandomAnime = () => (dispatch) => {
    const baseURL = "https://api.aniapi.com";
    const url = `/v1/random/anime/30`
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
