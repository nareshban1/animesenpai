import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../../components/Styled/Commons";

import { SidebarTrending } from "../../components/Trending/Sidebar";
import { Link, useParams } from "react-router-dom";
import { fetchAnimeEpisodes } from "../../redux/Slices/AnimeEpisodes";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";
import { fetchJikanAnimeDetail } from "../../redux/Slices/JikanAnimeDetail";
import { fetchJikanAnimeCharacters } from "../../redux/Slices/JikanCharacters";
import { fetchJikanAnimeRecommendations } from "../../redux/Slices/JikanRecommentation";
import { SpinnerCircular } from 'spinners-react';
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import RelatedAnime from "../../components/RelatedAnime/RelatedAnime";
import { fetchJikanAnimeStats } from "../../redux/Slices/JikanStats";


const AnimeDetails = React.lazy(() =>
  import("../../components/AnimeDetails/AnimeDetails")
);
const AnimeRecommendations = React.lazy(() =>
  import("../../components/AnimeRecommendation")
);
const Character = React.lazy(() =>
  import("../../components/CharactersStaff/Characters")
);

const AnimePlayerEpisodes = React.lazy(() =>
  import("../../components/AnimePlayerEpisodes/AnimePlayerEpisodes")
);

const AnimeStats = React.lazy(() =>
  import("../../components/AnimeStats")
);




export const AnimeInfo = () => {
  const animeInfo = useSelector(
    (state) => state.animeDetail.data
  );
  const dispatch = useDispatch();
  let params = useParams();
  const animeID = params.id;


  useEffect(() => {
    dispatch(fetchJikanAnimeDetail(animeID));
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchJikanAnimeCharacters(animeID));
    dispatch(fetchJikanAnimeRecommendations(animeID));
    dispatch(fetchJikanAnimeStats(animeID));
  }, [animeID, dispatch]);


  useEffect(() => {
    {
      animeInfo?.data?.documents?.[0] &&
        dispatch(fetchAnimeEpisodes(animeInfo?.data?.documents?.[0]?.id, 1));
    }
  }, [animeInfo, dispatch]);

  return (
    <PageTransitions>
      <Container>
        <FlexContainer>
          <LeftContainer>
            {animeInfo?.data?.documents?.[0] &&
              <Suspense fallback={<SpinnerCircular />}>
                <AnimePlayerEpisodes animeID={animeInfo?.data?.documents?.[0]?.id} />
              </Suspense>
            }
            <Suspense fallback={<SpinnerCircular />}>
              <AnimeDetails />
            </Suspense>
            <Suspense fallback={<SpinnerCircular />}>
              <Character maincharacters={true} btnview={true} />
            </Suspense>
            <Suspense fallback={<SpinnerCircular />}>
              <AnimeStats />
            </Suspense>
            <Suspense fallback={<SpinnerCircular />}>
              <AnimeRecommendations />
            </Suspense>
          </LeftContainer>
          <RightContainer>
            <RelatedAnime />
            <SidebarTrending />
          </RightContainer>
        </FlexContainer>
      </Container >
    </PageTransitions>
  );
};

