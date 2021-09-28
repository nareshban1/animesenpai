import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const announcedSlice = createSlice({
    name:"announced",
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

export default announcedSlice.reducer;

const {dataRequested,dataReceived,dataRequestFailed} = announcedSlice.actions;


export const fetchAnnounced = () => (dispatch) =>{
    const baseURL= "https://api.jikan.moe/v3";
    const url=`/season/later`
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
