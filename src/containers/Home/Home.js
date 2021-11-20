import React, { useEffect } from "react";
import AnimeSeason from "../../components/AnimeSeason";
import { TopAired } from "../../components/TopAired";
import { Trending } from "../../components/Trending";
import { Upcoming } from "../../components/Upcoming";
import { AnnouncedAnime } from "../../components/Announced";
import { useDispatch } from "react-redux";

import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../../components/Styled/Commons";
import AnimeSchedule from "../../components/AnimeSchedule";
export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);
  return (
    <Container>
      <FlexContainer>
        <LeftContainer>
          <Trending />
          <Upcoming/>
          <AnimeSchedule/>
        </LeftContainer>
        <RightContainer>
          <TopAired/>
          <AnimeSeason />
        </RightContainer>
      </FlexContainer>
    </Container>
  );
};

{
  /* 
      
       */
}
