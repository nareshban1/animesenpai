import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const topSeasonSlice = createSlice({
    name:"topSeason",
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

export default topSeasonSlice.reducer;

const {dataRequested,dataReceived,dataRequestFailed} = topSeasonSlice.actions;


export const fetchTopSeason = () => (dispatch) =>{
    const baseURL= "https://api.jikan.moe/v3";
    const url=`/season`
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
