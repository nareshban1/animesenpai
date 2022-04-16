import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jikanApi = createApi({
  reducerPath: "jikanApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    getCurrentSeason: builder.query({
      query: () => `/seasons/now`,
    }),
    getByYearSeason: builder.query({
      query: ({ year, season }: { year: string; season: string }) =>
        `seasons/${year}/${season}`,
    }),
    getUpcomingSeason: builder.query({
      query: () => `seasons/upcoming`,
    }),
    getSeasons: builder.query({
      query: () => `seasons`,
    }),
    getSchedules: builder.query({
      query: (day: string) => `schedules/${day}`,
    }),
    getAnimeRecommendations: builder.query({
      query: (id: string) => `anime/${id}/recommendations`,
    }),
    getFilterdAnime: builder.query({
      query: ({
        query,
        rating,
        genre,
        type,
        orderby,
        sort,
        page,
        status,
      }: {
        query: string;
        rating: string;
        genre: string;
        type: string;
        orderby: string;
        sort: string;
        page: string;
        status: string;
      }) =>
        `/anime?q=${query}&genres=${genre}&rated=${rating}&type=${type}&status=${status}&order_by=${orderby}&sort=${sort}&page=${page}`,
    }),
    getGenreAnime: builder.query({
      query: ({ genre, page }: { genre: string; page: string }) =>
        `/anime?genres=${genre}&page=${page}`,
    }),
    getAnimeByLetter: builder.query({
      query: ({ letter, page }: { letter: string; page: string }) =>
        `/anime?letter=${letter}&page=${page}`,
    }),
    getAnimeDetails: builder.query({
      query: (id: string) => `/anime/${id}`,
    }),
    getAnimeCharacters: builder.query({
      query: (id: string) => `/anime/${id}/characters`,
    }),
    getAnimeEpisodes: builder.query({
      query: (id: string) => `/anime/${id}/episodes`,
    }),
    getAnimeEpisode: builder.query({
      query: ({ id, episode }: { id: string; episode: string }) =>
        `/anime/${id}/episodes/${episode}`,
    }),
    getAnimeStats: builder.query({
      query: (id: string) => `/anime/${id}/statistics`,
    }),
    getAnimeRelations: builder.query({
      query: (id: string) => `/anime/${id}/relations`,
    }),
    getCharacterAnime: builder.query({
      query: (id: string) => `/characters/${id}/anime`,
    }),
    getCharacterbyId: builder.query({
      query: (id: string) => `/characters/${id}`,
    }),
    getRandomAnime: builder.query({
      query: () => `/random/anime`,
    }),
    getTopAnime: builder.query({
      query: ({ type, filter }: { type: string; filter: string }) =>
        `/top/anime?type=${type}&filter=${filter}`,
    }),
    getGenres: builder.query({
      query: () => `/genres/anime`,
    }),
  }),
});

export const aniApi = createApi({
  reducerPath: "aniApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.aniapi.com/v1/" }),
  endpoints: (builder) => ({
    getAnimeDetailByMalId: builder.query({
      query: (id) => `/anime?mal_id=${id}&nsfw=true&with_episodes=true`,
    }),
    getAnimeAniEpisodes: builder.query({
      query: ({ id, page, dub }: { id: number; page: string; dub: boolean }) =>
        `/episode?anime_id=${id}&is_dub=${dub}&locale=en&page=${page}`,
    }),
    getAnimeEpisodesByNumber: builder.query({
      query: ({
        id,
        number,
        dub,
      }: {
        id: string;
        number: string;
        dub: string;
      }) => `/episode?anime_id=${id}&is_dub=${dub}&locale=en&number=${number}`,
    }),
    getTopAniAnime: builder.query({
      query: ({ status }: { status: string }) => `/anime?status=${status}`,
    }),
    getRandomAniAnime: builder.query({
      query: () => `/random/anime/30`,
    }),
    getTrendingAnime: builder.query({
      query: () => `/anime?status=1`,
    }),
  }),
});

export const {
  useGetCurrentSeasonQuery,
  useGetAnimeByLetterQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeDetailsQuery,
  useGetAnimeEpisodeQuery,
  useGetAnimeEpisodesQuery,
  useGetAnimeRecommendationsQuery,
  useGetAnimeRelationsQuery,
  useGetAnimeStatsQuery,
  useGetByYearSeasonQuery,
  useGetCharacterAnimeQuery,
  useGetCharacterbyIdQuery,
  useGetFilterdAnimeQuery,
  useGetRandomAnimeQuery,
  useGetSchedulesQuery,
  useGetSeasonsQuery,
  useGetTopAnimeQuery,
  useGetUpcomingSeasonQuery,
  useGetGenreAnimeQuery,
  useGetGenresQuery,
} = jikanApi;
export const {
  useGetAnimeDetailByMalIdQuery,
  useGetAnimeEpisodesByNumberQuery,
  useGetAnimeAniEpisodesQuery,
  useGetRandomAniAnimeQuery,
  useGetTopAniAnimeQuery,
  useGetTrendingAnimeQuery,
} = aniApi;
