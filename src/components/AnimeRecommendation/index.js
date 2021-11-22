import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeAnimeList from "../HomePageAnimeList";
function AnimeRecommendations() {
  const jikanRecommendation = useSelector(
    (state) => state.jikanrecommendations.data
  );

  return (
    <>
      {jikanRecommendation &&
        <HomeAnimeList animeData={jikanRecommendation?.recommendations?.slice(0, 10)} title={"Suggestions"} btnView={false} />
      }
    </>
  )
}

export default AnimeRecommendations
