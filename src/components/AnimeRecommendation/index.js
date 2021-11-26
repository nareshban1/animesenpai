import { useSelector } from "react-redux";

import HomeAnimeList from "../HomePageAnimeList";
function AnimeRecommendations() {
  const jikanRecommendation = useSelector(
    (state) => state.jikanrecommendations
  );

  return (

    <HomeAnimeList onError={jikanRecommendation?.error} loading={jikanRecommendation?.loading} animeData={jikanRecommendation?.data?.recommendations?.slice(0, 15)} title={"Suggestions"} />

  )
}

export default AnimeRecommendations
