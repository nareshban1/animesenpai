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

    const url="/v1/anime?status=1"
    return dispatch(
        apiCallStart({
            url,
            onStart:dataRequested.type,
            onSuccess:dataReceived.type,
            onError:dataRequestFailed.type,
        })

    );
}
