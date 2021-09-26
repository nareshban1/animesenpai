import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const jikananimeepisodesSlice = createSlice({
    name:"jikanepisodes",
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

export default jikananimeepisodesSlice.reducer;

const {dataRequested,dataReceived,dataRequestFailed} = jikananimeepisodesSlice.actions;


export const fetchJikanAnimeEpisodes = (id) => (dispatch) =>{
    const baseURL= "https://api.jikan.moe/v3";
    const url=`/anime/${id}/episodes`
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

