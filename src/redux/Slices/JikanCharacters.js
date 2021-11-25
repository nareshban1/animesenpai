import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikananimecharactersSlice = createSlice({
    name: "jikancharacters",
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

export default jikananimecharactersSlice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = jikananimecharactersSlice.actions;


export const fetchJikanAnimeCharacters = (id) => (dispatch) => {
    const baseURL = "https://api.jikan.moe/v3";
    const url = `/anime/${id}/characters_staff`
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

