import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const animedetailSlice = createSlice({
    name:"anime",
    initialState:{
        data:[],
        loading:false,
    },
    reducers:{
        dataRequested:(state)=>{
            state.data=[]
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

export default animedetailSlice.reducer;

const {dataRequested,dataReceived,dataRequestFailed} = animedetailSlice.actions;


export const fetchAnimeDetail = (id) => (dispatch) =>{
    const baseURL= "https://api.aniapi.com";
    const url=`/v1/anime?mal_id=${id}`
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

