import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../../components/Styled/Commons";
import { SidebarTrending } from "../../components/Trending/Sidebar";
import { useRouter } from "next/router";
import { SpinnerCircular } from "spinners-react";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { fetchJikanCharacter } from "../../redux/Slices/CharacterDetail";

const CharacterDetails = React.lazy(() =>
  import("../../components/CharacterDetails/CharacterDetails")
);

const CharacterInfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { charID } = router.query;

  useEffect(() => {
    dispatch(fetchJikanCharacter(charID));
  }, [charID, dispatch]);

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
