import React, { useEffect } from "react";
import { AnimeGridContainer, InfoContainer, Title } from "../Styled/Commons";
import { useDispatch, useSelector } from "react-redux";
import { fetchJikanAnimeRecommendations } from "../../redux/Slices/JikanRecommentation";
import { JikanAnimeCard } from "../AnimeCard/JikanAnimeCard";


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
      {jikanRecommendation && (
        <InfoContainer>
          <Title>Recommendations</Title>
          <AnimeGridContainer>
            {jikanRecommendation?.recommendations?.slice(0, 15).map((data, index) => (
              <JikanAnimeCard info={data} key={index} />
            ))}
          </AnimeGridContainer>
        </InfoContainer>
      )}
    </>
  )
}

export default AnimeRecommendations
