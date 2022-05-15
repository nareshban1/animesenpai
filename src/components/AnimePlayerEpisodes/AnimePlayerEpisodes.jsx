import { useState } from "react";
import AnimeEpisodes from "../AnimeEpisodes/AnimeEpisodes";
import AnimePlayer from "../AnimePlayer/AnimePlayer";
import {
  useGetAnimeAniEpisodesQuery,
  useGetAnimeDetailByMalIdQuery,
} from "../../redux/Query/apiEndpoints";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const AnimePlayerEpisodes = () => {
  const [currentEpisode, setCurrentEpisode] = useState();
  const router = useRouter();
  const { animeID } = router.query;
  const animeInfo = useGetAnimeDetailByMalIdQuery(animeID);
  const page = useSelector((state) => state.pageNumber.pageNo);
  const animeEpisodes = useGetAnimeAniEpisodesQuery(
    { id: animeInfo.data?.data?.documents?.[0]?.id, dub: false, page: page },
    {
      skip: !animeInfo.isSuccess,
    }
  );

  return (
    <>
      {currentEpisode && <AnimePlayer currentEpisode={currentEpisode} />}
      <AnimeEpisodes
        animeEpisodes={animeEpisodes?.data}
        animeChange={animeInfo?.isFetching}
        loading={animeEpisodes?.isFetching || animeEpisodes?.isFetching}
        error={animeEpisodes?.error}
        currentEpisode={currentEpisode}
        setCurrentEpisode={setCurrentEpisode}
      />
    </>
  );
};

export default AnimePlayerEpisodes;
