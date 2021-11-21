import React, { useEffect } from "react";
import { InfoContainer, Title } from "../Styled/Commons";
import { useDispatch, useSelector } from "react-redux";
import { fetchJikanAnimeStats } from "../../redux/Slices/JikanStats";

function AnimeStats({ animeID }) {
  const jikanStats = useSelector(
    (state) => state.jikanstats.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJikanAnimeStats(animeID));
  }, [dispatch])
  return (
    <>
      {jikanStats && (
        <InfoContainer>
          <Title>Anime Stats</Title>

          {JSON.stringify(jikanStats)}
        </InfoContainer>
      )}
    </>
  );
}

export default AnimeStats;
