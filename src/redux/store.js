import { configureStore} from "@reduxjs/toolkit";
import apiMiddleware from "./middleware/apiMiddleware";
import trendingReducer from "./Slices/trending";
import themeChange from "./Slices/themeChange";
import AnimeDetail from "./Slices/AnimeDetail";
import AnimeEpisodes from "./Slices/AnimeEpisodes";

export const store = configureStore({
    reducer:{
        trending: trendingReducer,
        themeChanger: themeChange,
        animeDetail:AnimeDetail,
        animeEpisodes:AnimeEpisodes
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
})