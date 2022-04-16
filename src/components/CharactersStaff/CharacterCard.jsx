import React from "react";
import {
  CharacterCardContainer,
  CharacterInfo,
  CharacterImageContainer,
  CharacterImage,
} from "./CharacterStyles";
import { Body, Small } from "../Styled/Commons";

const CharacterCard = ({ characterData }) => {
  return (
    <>
      {characterData?.map((data, index) => (
        <CharacterCardContainer
          key={index}
          to={`/characterinfo/${data.character?.mal_id}`}
        >
          <CharacterImageContainer CharacterImageContainer>
            <CharacterImage
              src={data.character?.images?.webp?.image_url}
              alt="character_image"
            />
          </CharacterImageContainer>
          <CharacterInfo>
            <Body>{data.character.name}</Body>
            <Small>{data.character.role}</Small>
          </CharacterInfo>
        </CharacterCardContainer>
      ))}
    </>
  );
};

export default CharacterCard;
