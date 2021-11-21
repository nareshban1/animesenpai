import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJikanAnimeRecommendations } from "../../redux/Slices/JikanRecommentation";
import HomeAnimeList from "../HomePageAnimeList";
function AnimeRecommendations({ animeID }) {

  const jikanRecommendation = useSelector(
    (state) => state.jikanrecommendations.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJikanAnimeRecommendations(animeID));
  }, [dispatch, animeID]);

  return (
    <>
      {jikanRecommendation &&
        <HomeAnimeList animeData={jikanRecommendation?.recommendations?.slice(0, 10)} title={"Suggestions"} btnView={false} />
      }
    </>
  )
}

export default AnimeRecommendations
