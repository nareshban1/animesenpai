import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikananimedetailSlice = createSlice({
    name: "jikananime",
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {
        dataRequested: (state) => {
            state.data = []
            state.loading = true;

        },

        dataReceived: (state, action) => {
            state.data = action.payload
            state.loading = false;
        },

        dataRequestFailed: (state) => {
            state.data = []
            state.loading = false;

        },


    }
});

export default jikananimedetailSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = jikananimedetailSlice.actions;


export const fetchJikanAnimeDetail = (id) => (dispatch) => {
    const baseURL = "https://api.jikan.moe/v3";
    const url = `/anime/${id}`
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

