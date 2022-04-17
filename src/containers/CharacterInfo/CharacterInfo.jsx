import React, { Suspense } from "react";
import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../../components/Styled/Commons";
import { SidebarTrending } from "../../components/Trending/Sidebar";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const CharacterDetails = React.lazy(() =>
  import("../../components/CharacterDetails/CharacterDetails")
);

const CharacterInfo = () => {
  return (
    <PageTransitions>
      <Container>
        <FlexContainer>
          <LeftContainer>
            <Suspense fallback={<LoadingSpinner />}>
              <CharacterDetails />
            </Suspense>
          </LeftContainer>
          <RightContainer>
            <SidebarTrending />
          </RightContainer>
        </FlexContainer>
      </Container>
    </PageTransitions>
  );
};

export default CharacterInfo;
