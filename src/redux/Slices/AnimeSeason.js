import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const topSeasonSlice = createSlice({
    name: "topSeason",
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

export default topSeasonSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = topSeasonSlice.actions;


export const fetchTopSeason = () => (dispatch) => {
    const baseURL = "https://api.jikan.moe/v3";
    const url = `/season`
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
