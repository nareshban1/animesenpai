import React from "react";
import {
  Container,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "../Styled/Commons";
import { TopAired } from "../TopAired";
import AnimeSeason from "../AnimeSeason";
const ListPages = (props) => {
  return (
    <Container>
      <FlexContainer>
        <LeftContainer>{props.children}</LeftContainer>
        <RightContainer>
          <TopAired />
          <AnimeSeason />
        </RightContainer>
      </FlexContainer>
    </Container>
  );
};

export default ListPages;
