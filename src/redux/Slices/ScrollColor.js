import { createSlice } from "@reduxjs/toolkit";


const ScrollColor = createSlice({
    name:"scrollColor",
    initialState:{
        name:true,
    },
    reducers:{
        changeScroll: (state,action) =>{
            state.name = action.payload;
        },

    }
})

export const {changeScroll} = ScrollColor.actions;

export default ScrollColor.reducer