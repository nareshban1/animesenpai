import { useEffect } from "react";
import { Body, ListContainer } from "../Styled/Commons";
import { EpisodesContainer, EpisodeCard } from "./AnimeEpisodesStyles";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AnimeEpisodes = ({
  animeEpisodes,
  loading,
  error,
  setCurrentEpisode,
  currentEpisode,
  animeChange,
}) => {
  const page = useSelector((state) => state.pageNumber.pageNo);
  const changeEpisode = (episode) => {
    setCurrentEpisode(episode);
  };

  useEffect(() => {
    if (animeEpisodes?.data?.length !== 0) {
      setCurrentEpisode(animeEpisodes?.data?.documents[0]);
    }
  }, [animeEpisodes]);

  return (
    <ListContainer>
      {animeChange || loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {animeEpisodes?.data?.length !== 0 ? (
            <>
              <EpisodesContainer>
                {animeEpisodes?.data?.documents?.map((episode, index) => (
                  <EpisodeCard
                    onClick={() => changeEpisode(episode)}
                    key={index}
                    active={currentEpisode?.number === episode.number}
                  >
                    {episode.number}
                  </EpisodeCard>
                ))}
              </EpisodesContainer>
              <Pagination lastPage={animeEpisodes?.data?.last_page} />
            </>
          ) : (
            <>
              <Body color="white">No Episodes Available</Body>
            </>
          )}
          {error && <Body color="white">No Episodes Available</Body>}
        </>
      )}
    </ListContainer>
  );
};

export default AnimeEpisodes;
