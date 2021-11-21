import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";

import { fetchJikanAnimeDetail } from "../../redux/Slices/JikanAnimeDetail";
import { Container, FlexContainer, LeftContainer, RightContainer } from "../../components/Styled/Commons";
import CharacterStaff from "../../components/CharactersStaff";
import AnimeStats from "../../components/AnimeStats";
import { SidebarTrending } from "../../components/Trending/Sidebar"
import { Link, useParams } from "react-router-dom";
// import AnimeDetails from "../../components/AnimeDetails/AnimeDetails";
// import AnimeRecommendations from "../../components/AnimeRecommendation";

const AnimeDetails = React.lazy(() => import("../../components/AnimeDetails/AnimeDetails"));
const AnimeRecommendations = React.lazy(() => import("../../components/AnimeRecommendation"));

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
  }, [animeID, dispatch]);


  return (
    <Container>
      <FlexContainer>
        <LeftContainer>
          <Suspense fallback={"Loading.."}>
            {jikananimeDetails?.loading ? null : <AnimeDetails aniapi={animeDetails?.data?.documents?.[0]} jikan={jikananimeDetails} />}
          </Suspense>
          <Suspense fallback={"Loading.."}>
            <AnimeRecommendations animeID={animeID} />
          </Suspense>
        </LeftContainer>
        <RightContainer>
          <SidebarTrending />
        </RightContainer>
      </FlexContainer>
    </Container >
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
