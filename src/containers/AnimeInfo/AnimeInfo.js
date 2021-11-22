import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../../components/Styled/Commons";
import AnimeStats from "../../components/AnimeStats";
import { SidebarTrending } from "../../components/Trending/Sidebar";
import { Link, useParams } from "react-router-dom";
import { fetchAnimeEpisodes } from "../../redux/Slices/AnimeEpisodes";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";
import EpisodesAvailable from "../../components/EpisodesAvailable/EpisodesAvailable";
import { fetchJikanAnimeDetail } from "../../redux/Slices/JikanAnimeDetail";
import { fetchJikanAnimeCharacters } from "../../redux/Slices/JikanCharacters";
import { fetchJikanAnimeRecommendations } from "../../redux/Slices/JikanRecommentation";


const AnimeDetails = React.lazy(() =>
  import("../../components/AnimeDetails/AnimeDetails")
);
const AnimeRecommendations = React.lazy(() =>
  import("../../components/AnimeRecommendation")
);
const CharacterStaff = React.lazy(() =>
  import("../../components/CharactersStaff/Characters")
);

const AnimePlayerEpisodes = React.lazy(() =>
  import("../../components/AnimePlayerEpisodes/AnimePlayerEpisodes")
);



export const AnimeInfo = () => {
  const animeInfo = useSelector(
    (state) => state.animeDetail.data
  );
  const dispatch = useDispatch();
  let params = useParams();
  const animeID = params.id;
  const [viewPlayer, setViewPlayer] = useState(false)

  useEffect(() => {
    setViewPlayer(false)
    dispatch(fetchJikanAnimeDetail(animeID));
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchJikanAnimeCharacters(animeID));
    dispatch(fetchJikanAnimeRecommendations(animeID));
    dispatch(fetchAnimeEpisodes(animeID, 1));
  }, [animeID, dispatch]);

  useEffect(() => {
    dispatch(fetchAnimeEpisodes(animeInfo?.data?.documents?.[0]?.id, 1));
  }, [animeInfo, dispatch]);

  return (
    <Container>
      <FlexContainer>
        <LeftContainer>
          <Suspense fallback={"Loading.."}>
            <AnimePlayerEpisodes animeID={animeInfo?.data?.documents?.[0]?.id} viewPlayer={viewPlayer} />
          </Suspense>
          <Suspense fallback={"Loading.."}>
            <AnimeDetails />
          </Suspense>
          <EpisodesAvailable setViewPlayer={setViewPlayer} viewPlayer={viewPlayer} />
          <Suspense fallback={"Loading.."}>
            <CharacterStaff />
          </Suspense>
          <Suspense fallback={"Loading.."}>
            <AnimeRecommendations />
          </Suspense>
        </LeftContainer>
        <RightContainer>
          <SidebarTrending />
        </RightContainer>
      </FlexContainer>
    </Container>
  );
};

