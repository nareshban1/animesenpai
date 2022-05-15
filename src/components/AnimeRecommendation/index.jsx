import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGetAnimeRecommendationsQuery } from "../../redux/Query/apiEndpoints";

import HomeAnimeList from "../HomePageAnimeList";
function AnimeRecommendations() {
  const router = useRouter();
  const { animeID } = router.query;
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
      loading={isLoading || skip}
      animeData={data?.data?.slice(0, 15)}
      title={"Suggestions"}
    />
  );
}

export default AnimeRecommendations;
