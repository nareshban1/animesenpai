import React, { useEffect } from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Subtitle, ListContainer, HeaderFlex, ViewAllBtn, Body, Small } from "../Styled/Commons";
import CharacterCard from "./CharacterCard";
import {
  CharacterStaffGrid,
  CharacterCardContainer,
  CharacterInfo,
  CharacterImageContainer,
  CharacterImage,
} from "./CharacterStyles";

function CharacterStaff({ maincharacters, btnview }) {
  const jikananimeCharacters = useSelector(
    (state) => state.jikanAnimeCharacters.data
  );
  const jikan = useSelector(
    (state) => state.jikanAnimeDetails
  );

  const getMainCharacter = (character) => {
    return character.role === "Main";
  };

  return (
    <ListContainer>
      <HeaderFlex>
        <Subtitle color="white">Characters</Subtitle>
        {btnview && <ViewAllBtn to={`/allcharacters/${jikan?.data?.mal_id}/${jikan?.data?.title}`} >View All</ViewAllBtn>}

      </HeaderFlex>
      <CharacterStaffGrid>
        <CharacterCard characterData={maincharacters ? jikananimeCharacters?.characters?.filter(getMainCharacter) : jikananimeCharacters?.characters} />
      </CharacterStaffGrid >
    </ListContainer >
  );
}

export default CharacterStaff;
