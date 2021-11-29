import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./middleware/apiMiddleware";
import trendingReducer from "./Slices/trending";
import AnimeDetail from "./Slices/AnimeDetail";
import AnimeEpisodes from "./Slices/AnimeEpisodes";
import topAired from "./Slices/topAired";
import topUpcoming from "./Slices/topUpcoming";
import pagination from "./Slices/pagination";
import JikanAnimeDetail from "./Slices/JikanAnimeDetail";
import JikanCharacters from "./Slices/JikanCharacters";
import JikanEpisodes from "./Slices/JikanEpisodes";
import AnimeSeason from "./Slices/AnimeSeason";
import JikanRecommentation from "./Slices/JikanRecommentation";
import JikanStats from "./Slices/JikanStats";
import JikanSchedule from "./Slices/JikanSchedule";
import JikanGenre from "./Slices/JikanGenre";
import randomAnime from "./Slices/Random";
import JikanCharacter from "./Slices/CharacterDetail";
import ByLetter from "./Slices/ByLetter";
import filterAnime from "./Slices/FilterAnime";

export const store = configureStore({
    reducer: {
        trending: trendingReducer,
        topAired: topAired,
        topUpcoming: topUpcoming,
        animeDetail: AnimeDetail,
        animeEpisodes: AnimeEpisodes,
        pageNumber: pagination,
        jikanAnimeDetails: JikanAnimeDetail,
        jikanAnimeCharacters: JikanCharacters,
        jikanAnimeEpisodes: JikanEpisodes,
        jikanrecommendations: JikanRecommentation,
        jikanstats: JikanStats,
        animeSeason: AnimeSeason,
        schedule: JikanSchedule,
        jikanGenre: JikanGenre,
        randomanime: randomAnime,
        characterinfo: JikanCharacter,
        byletteranime: ByLetter,
        filteranime: filterAnime,


    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
})