import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikananimecharactersSlice = createSlice({
    name: "jikancharacters",
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

