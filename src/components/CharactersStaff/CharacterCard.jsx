import React from "react";
import {
  CharacterCardContainer,
  CharacterInfo,
  CharacterImageContainer,
  CharacterImage,
} from "./CharacterStyles";
import { Body, Small } from "../Styled/Commons";
import Link from "next/link";

const CharacterCard = ({ characterData }) => {
  return (
    <>
      {characterData?.map((data, index) => (
        <Link
          key={index}
          passHref
          href={`/characterinfo/${data.character?.mal_id}`}
        >
          <CharacterCardContainer>
            <CharacterImageContainer CharacterImageContainer>
              <CharacterImage
                src={data.character?.images?.webp?.image_url}
                alt="character_image"
              />
            </CharacterImageContainer>
            <CharacterInfo>
              <Body>{data.character.name}</Body>
              <Small>{data.role}</Small>
            </CharacterInfo>
          </CharacterCardContainer>
        </Link>
      ))}
    </>
  );
};

export default CharacterCard;
