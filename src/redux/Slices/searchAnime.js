import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const searchanimeSlice = createSlice({
    name:"searchAnime",
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

export default searchanimeSlice.reducer;

const {dataRequested,dataReceived,dataRequestFailed} = searchanimeSlice.actions;


export const searchByTitle = (title) => (dispatch) =>{
    const baseURL= "https://api.aniapi.com";
    const url=`/v1/anime?title=${title}`
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
