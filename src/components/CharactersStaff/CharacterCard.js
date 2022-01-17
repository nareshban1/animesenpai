import React from "react";
import {
  CharacterCardContainer,
  CharacterInfo,
  CharacterImageContainer,
  CharacterImage,
} from "./CharacterStyles";
import { Body, Small } from "../Styled/Commons";
import Link from "next/link"
const CharacterCard = ({ characterData }) => {
  return (
    <>
      {characterData?.map((character, index) => (
        <Link href={`/characterinfo/${character?.mal_id}`} passHref>
          <CharacterCardContainer key={index}>
            <CharacterImageContainer CharacterImageContainer>
              <CharacterImage src={character.image_url} alt="character_image" />
            </CharacterImageContainer>
            <CharacterInfo>
              <Body>{character.name}</Body>
              <Small>{character.role}</Small>
            </CharacterInfo>
          </CharacterCardContainer>
        </Link>
      ))}
    </>
  );
};

export default CharacterCard;
