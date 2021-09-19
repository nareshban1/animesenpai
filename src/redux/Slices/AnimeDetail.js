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

    const url=`/v1/anime/${id}`
    return dispatch(
        apiCallStart({
            url,
            onStart:dataRequested.type,
            onSuccess:dataReceived.type,
            onError:dataRequestFailed.type,
        })

    );
}

