import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchJikanAnimeCharacters } from "../../redux/Slices/JikanCharacters";
import { InfoContainer, Title } from "../Styled/Commons";

const CharacterStaffGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 0.5fr));
  grid-gap: 20px;
`;

const CharacterCardContainer = styled.div`
  display: flex;
  height: 100px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 8px;
  color: white;
`;

const CharacterActorInfo = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CharacterCard = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  & ${CharacterActorInfo} {
    text-align: left;
  }
`;

const VoiceActorCard = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;

  & ${CharacterActorInfo} {
    text-align: right;
  }
`;
const CharacterImageContainer = styled.div`
  height: 100%;
  width: 70px;
`;
const VoiceActorImageContainer = styled.div`
  height: 100%;
  width: 70px;
`;

const CharacterImage = styled.img`
  height: 100%;
  width: 70px;
`;
const VoiceActorImage = styled.img`
  height: 100%;
  width: 70px;
`;
const NameCharStaff = styled.p``;
const RoleLanguage = styled.p`
  font-size: 0.9rem;
`;

function CharacterStaff({ animeID }) {
  const jikananimeCharacters = useSelector(
    (state) => state.jikanAnimeCharacters.data
  );


  const dispatch = useDispatch();

  const getMainCharacter = (character) => {
    return character.role === "Main";
  };


  useEffect(() => {
    dispatch(fetchJikanAnimeCharacters(animeID));
    return () => {
      console.log("cleanup");
    };
  }, [animeID]);

  return (
    <>
      <InfoContainer>
        <Title>Characters</Title>
        <CharacterStaffGrid>
          {jikananimeCharacters?.characters
            ?.filter(getMainCharacter)
            .map((character, index) => (
              <CharacterCardContainer key={index}>
                <CharacterCard>
                  <CharacterImageContainer>
                    <CharacterImage
                      src={character.image_url}
                      alt="character_image"
                    />
                  </CharacterImageContainer>
                  <CharacterActorInfo>
                    <NameCharStaff>{character.name}</NameCharStaff>
                    <RoleLanguage>{character.role}</RoleLanguage>
                  </CharacterActorInfo>
                </CharacterCard>
                {character.voice_actors?.[0] && (
                  <VoiceActorCard>
                    <CharacterActorInfo>
                      <NameCharStaff>
                        {character.voice_actors?.[0]?.name}
                      </NameCharStaff>
                      <RoleLanguage>
                        {character.voice_actors?.[0]?.language}
                      </RoleLanguage>
                    </CharacterActorInfo>
                    <VoiceActorImageContainer>
                      <VoiceActorImage
                        src={character.voice_actors?.[0]?.image_url}
                        alt="voiceactor_image"
                      />
                    </VoiceActorImageContainer>
                  </VoiceActorCard>
                )}
              </CharacterCardContainer>
            ))}
        </CharacterStaffGrid>
      </InfoContainer>
      <InfoContainer>
        <Title>Staff</Title>
        <CharacterStaffGrid>
          {jikananimeCharacters?.staff?.slice(0, 5).map((character, index) => (
            <CharacterCardContainer key={index}>
              <CharacterCard>
                <CharacterImageContainer>
                  <CharacterImage
                    src={character.image_url}
                    alt="character_image"
                  />
                </CharacterImageContainer>
                <CharacterActorInfo>
                  <NameCharStaff>{character.name}</NameCharStaff>
                  <RoleLanguage>{character.positions}</RoleLanguage>
                </CharacterActorInfo>
              </CharacterCard>
              {character.voice_actors?.[0] && (
                <VoiceActorCard>
                  <CharacterActorInfo>
                    <NameCharStaff>
                      {character.voice_actors?.[0]?.name}
                    </NameCharStaff>
                    <RoleLanguage>
                      {character.voice_actors?.[0]?.language}
                    </RoleLanguage>
                  </CharacterActorInfo>
                  <VoiceActorImageContainer>
                    <VoiceActorImage
                      src={character.voice_actors?.[0]?.image_url}
                      alt="voiceactor_image"
                    />
                  </VoiceActorImageContainer>
                </VoiceActorCard>
              )}
            </CharacterCardContainer>
          ))}
        </CharacterStaffGrid>
      </InfoContainer>
    </>
  );
}

export default CharacterStaff;
