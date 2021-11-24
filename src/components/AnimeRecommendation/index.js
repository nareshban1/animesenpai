import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeAnimeList from "../HomePageAnimeList";
function AnimeRecommendations() {
  const jikanRecommendation = useSelector(
    (state) => state.jikanrecommendations
  );

  return (

    <HomeAnimeList onError={jikanRecommendation?.error} loading={jikanRecommendation?.loading} animeData={jikanRecommendation?.data?.recommendations?.slice(0, 10)} title={"Suggestions"} />

  )
}

export default AnimeRecommendations
