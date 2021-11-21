import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, FlexContainer, LeftContainer, RightContainer } from "../../components/Styled/Commons";
import AnimeStats from "../../components/AnimeStats";
import { SidebarTrending } from "../../components/Trending/Sidebar"
import { Link, useParams } from "react-router-dom";
// import AnimeDetails from "../../components/AnimeDetails/AnimeDetails";
// import AnimeRecommendations from "../../components/AnimeRecommendation";
// import CharacterStaff from "../../components/CharactersStaff";
import { fetchAnimeEpisodes } from '../../redux/Slices/AnimeEpisodes';

const AnimeDetails = React.lazy(() => import("../../components/AnimeDetails/AnimeDetails"));
const AnimeRecommendations = React.lazy(() => import("../../components/AnimeRecommendation"));
const CharacterStaff = React.lazy(() => import("../../components/CharactersStaff"));

export const AnimeInfo = () => {
  const animeEpisode = useSelector((state) => state.animeEpisodes);
  const dispatch = useDispatch();
  let params = useParams();

  const animeID = params.id;
  useEffect(() => {
    dispatch(fetchAnimeEpisodes(animeID, 1));
  }, [animeID, dispatch]);


  return (
    <Container>
      <FlexContainer>
        <LeftContainer>
          <Suspense fallback={"Loading.."}>
            <AnimeDetails animeID={animeID} />
          </Suspense>
          <Suspense fallback={"Loading.."}>
            <AnimeRecommendations animeID={animeID} />
          </Suspense>
          {/* <Suspense fallback={"Loading.."}>
            <CharacterStaff animeID={animeID} />
          </Suspense> */}

        </LeftContainer>
        <RightContainer>
          <SidebarTrending />
        </RightContainer>
      </FlexContainer>
    </Container >
  );
};
{/* 
        <AnimeStats animeID={animeID} />
        <AnimeRecommendations animeID={animeID} /> */}


{/* <AnimeWatchButton
      to={`/watchanime/${animeDetails?.data?.documents?.[0]?.id}`}
    >
      Watch Anime
    </AnimeWatchButton> */}
