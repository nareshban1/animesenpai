import { createSlice } from "@reduxjs/toolkit";
import { apiCallStart } from "../middleware/apiActions";

const topairedSlice = createSlice({
    name:"topAired",
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

export default topairedSlice.reducer;

const {dataRequested,dataReceived,dataRequestFailed} = topairedSlice.actions;


export const fetchTopAired = (status) => (dispatch) =>{
    
    const url=`/v1/anime?status=${status}`
    return dispatch(
        apiCallStart({
            url,
            onStart:dataRequested.type,
            onSuccess:dataReceived.type,
            onError:dataRequestFailed.type,
        })

    );
}
