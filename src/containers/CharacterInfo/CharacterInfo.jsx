import React, { Suspense } from "react";
import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../../components/Styled/Commons";
import { SidebarTrending } from "../../components/Trending/Sidebar";
import { useParams } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { useGetCharacterbyIdQuery } from "../../redux/Query/apiEndpoints";

const CharacterDetails = React.lazy(() =>
  import("../../components/CharacterDetails/CharacterDetails")
);

const CharacterInfo = () => {
  return (
    <PageTransitions>
      <Container>
        <FlexContainer>
          <LeftContainer>
            <Suspense fallback={<SpinnerCircular />}>
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
