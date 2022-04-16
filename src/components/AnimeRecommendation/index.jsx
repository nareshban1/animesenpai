import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAnimeRecommendationsQuery } from "../../redux/Query/apiEndpoints";

import HomeAnimeList from "../HomePageAnimeList";
function AnimeRecommendations() {
  let params = useParams();
  const animeID = params.id;
  const [skip, setSkip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSkip(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const { data, error, isLoading } = useGetAnimeRecommendationsQuery(animeID, {
    skip,
  });

  return (
    <HomeAnimeList
      onError={error}
      loading={isLoading}
      animeData={data?.data?.slice(0, 15)}
      title={"Suggestions"}
    />
  );
}

export default AnimeRecommendations;
