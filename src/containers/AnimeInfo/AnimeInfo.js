import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";
import styled from "styled-components";
import { fetchJikanAnimeDetail } from "../../redux/Slices/JikanAnimeDetail";
import { fetchJikanAnimeCharacters } from "../../redux/Slices/JikanCharacters";
import { fetchJikanAnimeEpisodes } from "../../redux/Slices/JikanEpisodes";
import { fetchJikanAnimeRecommendations } from "../../redux/Slices/JikanRecommentation";
import { changeScroll } from "../../redux/Slices/ScrollColor";
import { AnimeGridContainer, Container } from "../../components/Styled/Commons";
import { PadContent } from "../../components/Styled/Commons";
import HomeAnimeList from "../../components/HomePageAnimeList";
import { JikanAnimeCard } from "../../components/AnimeCard/JikanAnimeCard";

const AnimeInfoContainer = styled.div`
  margin-top: 0px;
`;

const AnimeInfoBackground = styled.div`
  height: 50vh;
  width: 100%;
  background-color: #0314249f;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
`;

const AnimeDetails = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorSecondary};
  position: relative;
  padding-bottom: 20px;
`;

const AnimeTitleImageContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  height: 250px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const AnimeImageContainer = styled.div`
  height: 500px;
  width: 350px;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  margin-top: -250px;
`;

const AnimeImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AnimeTitleSynopsisContainer = styled.div`
  width: calc(100% - 350px);
  margin-left: 400px;
`;

const AnimeTitlesContainer = styled.div`
  font-size: 1.5rem;
  position: absolute;
  margin-top: -120px;
`;

const AnimeEnglishTitle = styled.h1``;
const AnimeJapaneseTitle = styled.h1`
  font-size: 1.5rem;
`;

const AnimeSynopsisContainer = styled.div`
  height: 230px;
`;

const SynopsisRankContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RanksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const RanksData = styled.h3`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const RanksDataSpan = styled.span`
  font-size: 1rem;
  margin-left: 5px;
  font-weight: 500;
`;

const SynopsisTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 10px 0px;
`;

const AnimeSynopsis = styled.div`
  font-size: 1rem;
  text-align: justify;
`;

const AnimeMoreDetails = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
`;

const AnimeScoreContainer = styled.div`
  border-radius: 20px;
  height: 100px;
  width: 100px;
  padding: 10px;
  background-color: ${(props) => props.color};
  display: grid;
  place-items: center;
`;

const ScoreTitle = styled.p``;

const Score = styled.h1``;

const ScoredBy = styled.p``;

const AnimeGenreDetailsContainer = styled.div`
  background-color: transparent;
  border: 1px solid;
  border-color: ${(props) => props.theme.mainBackground};
  height: 100px;
  width: calc(100% - 180px);
  margin-left: auto;
  padding: 10px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const TopDetailContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  padding: 0px 10px 10px 10px;
  border-bottom: 1px solid ${(props) => props.theme.mainBackground};
  align-items: center;
  box-sizing: border-box;
`;

const BottomDetailContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  padding: 10px 10px 0px 10px;
  align-items: center;
  box-sizing: border-box;
`;

const Details = styled.p`
  margin-right: 20px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const DetailsTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 5px;
`;

const InfoContainer = styled.div`
  margin: 20px auto;
`;

const InfoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Poppins", "sans-serif";
  margin-bottom: 20px;
`;

const CharacterStaffGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
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
`;
const VoiceActorImageContainer = styled.div`
  height: 100%;
`;

const CharacterImage = styled.img`
  height: 100%;
`;
const VoiceActorImage = styled.img`
  height: 100%;
`;
const NameCharStaff = styled.p``;
const RoleLanguage = styled.p`
  font-size: 0.9rem;
`;

export const AnimeInfo = ({ match }) => {
  const animeDetails = useSelector((state) => state.animeDetail.data);
  const jikananimeDetails = useSelector(
    (state) => state.jikanAnimeDetails.data
  );
  const jikananimeCharacters = useSelector(
    (state) => state.jikanAnimeCharacters.data
  );
  const jikananimeEpisodes = useSelector(
    (state) => state.jikanAnimeEpisodes.data
  );
  const jikanRecommendation = useSelector(
    (state) => state.jikanrecommendations.data
  );
  const dispatch = useDispatch();

  const animeID = match.params.id;
  useEffect(() => {
    dispatch(changeScroll(false));
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchJikanAnimeDetail(animeID));
    dispatch(fetchJikanAnimeCharacters(animeID));
    dispatch(fetchJikanAnimeEpisodes(animeID));
    dispatch(fetchJikanAnimeRecommendations(animeID));
  }, [dispatch,animeID]);

  const getMainCharacter = (character) => {
    return character.role === "Main";
  };

  console.log(jikanRecommendation);
  return (
    <PadContent>
      <AnimeInfoContainer>
        <AnimeInfoBackground
          image={
            animeDetails?.data?.documents?.[0]?.banner_image ||
            animeDetails?.data?.documents?.[0]?.cover_image
          }
        />
        <AnimeDetails>
          <Container>
            <AnimeTitleImageContainer>
              <AnimeImageContainer>
                <AnimeImage
                  src={animeDetails?.data?.documents?.[0]?.cover_image}
                  alt="anime_image"
                />
              </AnimeImageContainer>
              <AnimeTitleSynopsisContainer>
                <AnimeTitlesContainer>
                  <AnimeEnglishTitle>
                    {animeDetails?.data?.documents?.[0]?.titles?.en}
                  </AnimeEnglishTitle>
                  <AnimeJapaneseTitle>
                    {animeDetails?.data?.documents?.[0]?.titles?.jp}
                  </AnimeJapaneseTitle>
                </AnimeTitlesContainer>
                <AnimeSynopsisContainer>
                  <SynopsisRankContainer>
                    <SynopsisTitle> Synopsis </SynopsisTitle>{" "}
                    <RanksContainer>
                      <RanksData>
                        Ranked:{" "}
                        <RanksDataSpan>{jikananimeDetails?.rank}</RanksDataSpan>
                      </RanksData>{" "}
                      <RanksData>
                        Popularity:{" "}
                        <RanksDataSpan>
                          {" "}
                          {jikananimeDetails?.popularity}
                        </RanksDataSpan>
                      </RanksData>
                      <RanksData>
                        Members:{" "}
                        <RanksDataSpan>
                          {jikananimeDetails?.members}{" "}
                        </RanksDataSpan>
                      </RanksData>
                    </RanksContainer>
                  </SynopsisRankContainer>
                  <AnimeSynopsis>{jikananimeDetails?.synopsis}</AnimeSynopsis>
                </AnimeSynopsisContainer>
              </AnimeTitleSynopsisContainer>
            </AnimeTitleImageContainer>
            <AnimeMoreDetails>
              <AnimeScoreContainer
                color={jikananimeDetails?.score >= 7.5 ? "#599E54" : "yellow"}
              >
                <ScoreTitle>Score</ScoreTitle>
                <Score>{jikananimeDetails?.score}</Score>
                <ScoredBy>{jikananimeDetails?.scored_by}</ScoredBy>
              </AnimeScoreContainer>
              <AnimeGenreDetailsContainer>
                <TopDetailContainer>
                  <Details>
                    <DetailsTitle>Source:</DetailsTitle>{" "}
                    {jikananimeDetails?.source}
                  </Details>
                  <Details>
                    {" "}
                    <DetailsTitle> Genres:</DetailsTitle>{" "}
                    {jikananimeDetails?.genres?.map((genre, index) => (
                      <>{genre?.name}, </>
                    ))}
                  </Details>
                  <Details>
                    <DetailsTitle>Status:</DetailsTitle>{" "}
                    {jikananimeDetails?.airing}
                  </Details>
                  <Details>
                    <DetailsTitle>Episodes:</DetailsTitle>{" "}
                    {animeDetails?.data?.documents?.[0]?.episodes_count}
                  </Details>
                </TopDetailContainer>
                <BottomDetailContainer>
                  <Details>
                    <DetailsTitle>PG Rating:</DetailsTitle>{" "}
                    {jikananimeDetails?.rating}
                  </Details>
                  <Details>
                    <DetailsTitle>Broadcast:</DetailsTitle>{" "}
                    {jikananimeDetails?.broadcast}
                  </Details>
                </BottomDetailContainer>
              </AnimeGenreDetailsContainer>
            </AnimeMoreDetails>
          </Container>
        </AnimeDetails>
      </AnimeInfoContainer>
      <Container>
        <InfoContainer>
          <InfoTitle>Characters</InfoTitle>
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

        {jikanRecommendation && (
          <InfoContainer>
            <InfoTitle>Recommendations</InfoTitle>
            <AnimeGridContainer>
              {jikanRecommendation?.recommendations?.slice(0,15).map((data, index) => (
                <JikanAnimeCard info={data} key={index} />
              ))}
            </AnimeGridContainer>
          </InfoContainer>
        )}
      </Container>

      {animeDetails?.data?.documents.length && (
        <>
          {/* <AnimePlayer animeID={animeDetails?.data?.documents?.[0]?.id}/> */}
        </>
      )}
    </PadContent>
  );
};
