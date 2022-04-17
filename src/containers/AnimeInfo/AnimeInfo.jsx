import React, { Suspense } from "react";
import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../../components/Styled/Commons";

import { SidebarTrending } from "../../components/Trending/Sidebar";

import PageTransitions from "../../components/PageTransitions/PageTransitions";
import RelatedAnime from "../../components/RelatedAnime/RelatedAnime";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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

const AnimeStats = React.lazy(() => import("../../components/AnimeStats"));

export const AnimeInfo = () => {
  return (
    <PageTransitions>
      <Container>
        <FlexContainer>
          <LeftContainer>
            <Suspense fallback={<LoadingSpinner />}>
              <AnimePlayerEpisodes />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <AnimeDetails />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Character maincharacters={true} btnview={true} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <AnimeStats />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <AnimeRecommendations />
            </Suspense>
          </LeftContainer>
          <RightContainer>
            <RelatedAnime />
            <SidebarTrending />
          </RightContainer>
        </FlexContainer>
      </Container>
    </PageTransitions>
  );
};
