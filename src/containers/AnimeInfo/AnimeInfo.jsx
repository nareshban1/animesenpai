import React, { Suspense } from "react";
import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../../components/Styled/Commons";

import { SidebarTrending } from "../../components/Trending/Sidebar";
import { SpinnerCircular } from "spinners-react";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import RelatedAnime from "../../components/RelatedAnime/RelatedAnime";

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
            <Suspense fallback={<SpinnerCircular />}>
              <AnimePlayerEpisodes />
            </Suspense>
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
      </Container>
    </PageTransitions>
  );
};
