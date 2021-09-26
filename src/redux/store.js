import { configureStore} from "@reduxjs/toolkit";
import apiMiddleware from "./middleware/apiMiddleware";
import trendingReducer from "./Slices/trending";
import themeChange from "./Slices/themeChange";
import AnimeDetail from "./Slices/AnimeDetail";
import AnimeEpisodes from "./Slices/AnimeEpisodes";
import topAired from "./Slices/topAired";
import topUpcoming from "./Slices/topUpcoming";
import searchAnime from "./Slices/searchAnime";
import pagination from "./Slices/pagination";
import JikanAnimeDetail from "./Slices/JikanAnimeDetail";
import JikanCharacters from "./Slices/JikanCharacters";
import JikanEpisodes from "./Slices/JikanEpisodes";

export const store = configureStore({
    reducer:{
        trending: trendingReducer,
        topAired: topAired,
        topUpcoming: topUpcoming,
        themeChanger: themeChange,
        animeDetail:AnimeDetail,
        animeEpisodes:AnimeEpisodes,
        searchanime:searchAnime,
        pageNumber: pagination,
        jikanAnimeDetails: JikanAnimeDetail,
        jikanAnimeCharacters: JikanCharacters,
        jikanAnimeEpisodes: JikanEpisodes,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
})