import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const trendingSlice = createSlice({
    name:"trending",
    initialState:{
        data:[],
        loading:false,
    },
    reducers:{
        dataRequested:(state)=>{
            state.loading = true;
        },

        dataReceived:(state,action)=>{
            state.data=action.payload
            state.loading = false;
        },

        dataRequestFailed:(state)=>{
            state.loading = false;  
        },
        
        
    }
});

export default trendingSlice.reducer;

const {dataRequested,dataReceived,dataRequestFailed} = trendingSlice.actions;


export const fetchTrending = () => (dispatch) =>{
    const baseURL= "https://api.jikan.moe/v3";
    const url=`/top/anime/1/airing`
    return dispatch(
        apiCallStart({
            baseURL,
            url,
            onStart:dataRequested.type,
            onSuccess:dataReceived.type,
            onError:dataRequestFailed.type,
        })

    );
}
