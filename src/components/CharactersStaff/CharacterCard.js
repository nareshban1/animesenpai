import React from 'react'
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
            {characterData?.map((character, index) => (
                <CharacterCardContainer key={index} to={`/characterinfo/${character?.mal_id}`}>
                    <CharacterImageContainer CharacterImageContainer >
                        <CharacterImage
                            src={character.image_url}
                            alt="character_image"
                        />
                    </CharacterImageContainer>
                    <CharacterInfo>
                        <Body>{character.name}</Body>
                        <Small>{character.role}</Small>
                    </CharacterInfo>

                </CharacterCardContainer>
            ))
            }
        </>
    )
}

export default CharacterCard
