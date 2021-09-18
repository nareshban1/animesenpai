import { createSlice } from "@reduxjs/toolkit";


const ThemeChange = createSlice({
    name:"AppTheme",
    initialState:{
        theme:"light",
    },
    reducers:{
        changeTheme: (state) =>{
            state.theme === "light"? state.theme = "dark": state.theme="light";
        },

    }
})

export const {changeTheme} = ThemeChange.actions;

export default ThemeChange.reducer