import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";
import styled from "styled-components";
import { fetchJikanAnimeDetail } from "../../redux/Slices/JikanAnimeDetail";
import { fetchJikanAnimeCharacters } from "../../redux/Slices/JikanCharacters";
import { fetchJikanAnimeEpisodes } from "../../redux/Slices/JikanEpisodes";
import { changeScroll } from "../../redux/Slices/ScrollColor";
import { Container } from "../../components/Styled/Commons";
import { PadContent } from "../../components/Styled/Commons";

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
  border:1px solid;
  border-color: ${(props) => props.theme.mainBackground};
  height: 100px;
  width: calc(100% - 180px);
  margin-left: auto;
  padding:10px;
  border-radius: 20px;
  display: flex;
`;

const TopDetailContainer = styled.div`
`

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
  const dispatch = useDispatch();

  const animeID = match.params.id;
  useEffect(() => {
    dispatch(changeScroll(false));
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchJikanAnimeDetail(animeID));
    dispatch(fetchJikanAnimeCharacters(animeID));
    dispatch(fetchJikanAnimeEpisodes(animeID));
  }, [dispatch]);

  const getMainCharacter = (character) => {
    return character.role === "Main";
  };
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
              <p>Source: {jikananimeDetails?.source}</p>
          <p>Status: {jikananimeDetails?.airing}</p>
          <p>PG Rating: {jikananimeDetails?.rating}</p>
          <p>Braodcast: {jikananimeDetails?.broadcast}</p>
          Genres: {jikananimeDetails?.genres?.map((genre, index) => (
            <p>{genre?.name}</p>
          ))}
          Episodes: {animeDetails?.data?.documents?.[0]?.episodes_count}

              </AnimeGenreDetailsContainer>
            </AnimeMoreDetails>
          </Container>
        </AnimeDetails>

        <Container>
          {animeDetails?.data?.documents.length && (
            <>
              {/* <AnimePlayer animeID={animeDetails?.data?.documents?.[0]?.id}/> */}
            </>
          )}
    

         
          {jikananimeCharacters?.characters
            ?.filter(getMainCharacter)
            .map((character, index) => (
              <>
                <img src={character.image_url} alt="character_image" />
                <p>{character.name}</p>
                <p>{character.role}</p>
              </>
            ))}
        </Container>
      </AnimeInfoContainer>
    </PadContent>
  );
};
