import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const announcedSlice = createSlice({
    name: "announced",
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

export default announcedSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = announcedSlice.actions;


export const fetchAnnounced = () => (dispatch) => {
    const baseURL = "https://api.jikan.moe/v3";
    const url = `/season/later`
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
