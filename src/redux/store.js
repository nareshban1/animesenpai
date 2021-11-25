import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./middleware/apiMiddleware";
import trendingReducer from "./Slices/trending";
import AnimeDetail from "./Slices/AnimeDetail";
import AnimeEpisodes from "./Slices/AnimeEpisodes";
import topAired from "./Slices/topAired";
import topUpcoming from "./Slices/topUpcoming";
import searchAnime from "./Slices/searchAnime";
import pagination from "./Slices/pagination";
import JikanAnimeDetail from "./Slices/JikanAnimeDetail";
import JikanCharacters from "./Slices/JikanCharacters";
import JikanEpisodes from "./Slices/JikanEpisodes";
import AnimeSeason from "./Slices/AnimeSeason";
import Announced from "./Slices/Announced";
import JikanRecommentation from "./Slices/JikanRecommentation";
import JikanStats from "./Slices/JikanStats";
import JikanSchedule from "./Slices/JikanSchedule";
import JikanGenre from "./Slices/JikanGenre";
import randomAnime from "./Slices/Random";
import JikanCharacter from "./Slices/CharacterDetail";

export const store = configureStore({
    reducer: {
        trending: trendingReducer,
        topAired: topAired,
        topUpcoming: topUpcoming,
        animeDetail: AnimeDetail,
        animeEpisodes: AnimeEpisodes,
        searchanime: searchAnime,
        pageNumber: pagination,
        jikanAnimeDetails: JikanAnimeDetail,
        jikanAnimeCharacters: JikanCharacters,
        jikanAnimeEpisodes: JikanEpisodes,
        jikanrecommendations: JikanRecommentation,
        jikanstats: JikanStats,
        animeSeason: AnimeSeason,
        announced: Announced,
        schedule: JikanSchedule,
        jikanGenre: JikanGenre,
        randomanime: randomAnime,
        characterinfo: JikanCharacter,


    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
})