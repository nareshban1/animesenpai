import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";

import { fetchJikanAnimeDetail } from "../../redux/Slices/JikanAnimeDetail";
import { Container, FlexContainer, LeftContainer, RightContainer } from "../../components/Styled/Commons";
import CharacterStaff from "../../components/CharactersStaff";
import AnimeStats from "../../components/AnimeStats";
import AnimeDetails from "../../components/AnimeDetails/AnimeDetails";
import AnimeRecommendations from "../../components/AnimeRecommendation";
import { SidebarTrending } from "../../components/Trending/Sidebar"


import { Link, useParams } from "react-router-dom";
import {
  AnimeWatchButton,
  BottomDetailContainer,
  DetailsTitle,
  Details,
  TopDetailContainer,
  AnimeGenreDetailsContainer,
  ScoredBy,
  Score,
  ScoreTitle,
  AnimeScoreContainer,
  AnimeMoreDetails,
  AnimeSynopsis,
  AnimeInfoContainer,
  AnimeTitleImageContainer,
  AnimeImageContainer,
  AnimeImage,
  AnimeTitleSynopsisContainer,
  AnimeTitlesContainer,
  AnimeEnglishTitle,
  AnimeSynopsisContainer,
  SynopsisRankContainer,
  SynopsisTitle,
  RanksContainer,
  RanksData,
  RanksDataSpan,
} from "./Styles";

export const AnimeInfo = () => {
  const animeDetails = useSelector((state) => state.animeDetail.data);
  const jikananimeDetails = useSelector(
    (state) => state.jikanAnimeDetails.data
  );

  const dispatch = useDispatch();
  let params = useParams();

  const animeID = params.id;
  useEffect(() => {
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchJikanAnimeDetail(animeID));
  }, [dispatch]);


  return (
    <Container>
      <FlexContainer>
        <LeftContainer>
          <AnimeDetails aniapi={animeDetails?.data?.documents?.[0]} jikan={jikananimeDetails}>

          </AnimeDetails>
        </LeftContainer>
        <RightContainer>
          <SidebarTrending />
        </RightContainer>
      </FlexContainer>
    </Container>
  );
};
{/* <CharacterStaff animeID={animeID} />
        <AnimeStats animeID={animeID} />
        <AnimeRecommendations animeID={animeID} /> */}


{/* <AnimeWatchButton
      to={`/watchanime/${animeDetails?.data?.documents?.[0]?.id}`}
    >
      Watch Anime
    </AnimeWatchButton> */}
