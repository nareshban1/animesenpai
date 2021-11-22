import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Subtitle, ListContainer, HeaderFlex, ViewAllBtn } from "../Styled/Commons";
import {
  CharacterStaffGrid,
  CharacterCardContainer,
  CharacterInfo,
  CharacterImageContainer,
  CharacterImage,
} from "./CharacterStyles";

function CharacterStaff() {
  const jikananimeCharacters = useSelector(
    (state) => state.jikanAnimeCharacters.data
  );

  const getMainCharacter = (character) => {
    return character.role === "Main";
  };


  return (
    <ListContainer>
      <HeaderFlex>
        <Subtitle color="white">Main Characters</Subtitle>
        <ViewAllBtn to={`allcharacters/`} >View All</ViewAllBtn>
      </HeaderFlex>
      <CharacterStaffGrid>
        {jikananimeCharacters?.characters
          ?.filter(getMainCharacter)
          .map((character, index) => (
            <CharacterCardContainer key={index}>

              <CharacterImageContainer>
                <CharacterImage
                  src={character.image_url}
                  alt="character_image"
                />
              </CharacterImageContainer>
              <CharacterInfo>
                {character.name}
              </CharacterInfo>

            </CharacterCardContainer>
          ))}
      </CharacterStaffGrid>
    </ListContainer>
  );
}

export default CharacterStaff;
