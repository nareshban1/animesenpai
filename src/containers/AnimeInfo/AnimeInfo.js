import { useEffect} from "react";
import { useDispatch ,useSelector } from "react-redux";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";
import styled from "styled-components";
import { fetchJikanAnimeDetail } from "../../redux/Slices/JikanAnimeDetail";
import { changeScroll } from "../../redux/Slices/ScrollColor";
import { Container} from "../../components/Styled/Commons";
import { PadContent } from "../../components/Styled/Commons";
import CharacterStaff from "../../components/CharactersStaff";
import AnimeStats from "../../components/AnimeStats";
import AnimeRecommendations from "../../components/AnimeRecommendation";
import { Link } from "react-router-dom";

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
  margin-top: -200px;
`;

const AnimeEnglishTitle = styled.h1`


`;


const AnimeSynopsisContainer = styled.div`
  height: 230px;
  overflow: hidden;
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
  flex-wrap: wrap;
  
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
  width: calc(100% - 360px);
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const AnimeWatchButton = styled(Link)`
  height: 100px;
  width: 150px;
  padding: 10px;
  background-color:${(props) => props.theme.mainBackground} ;
  display: grid;
  place-items: center;
  border-radius: 20px;
`

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






export const AnimeInfo = ({ match }) => {
  const animeDetails = useSelector((state) => state.animeDetail.data);
  const jikananimeDetails = useSelector(
    (state) => state.jikanAnimeDetails.data
  );

  const dispatch = useDispatch();

  const animeID = match.params.id;
  useEffect(() => {
    dispatch(changeScroll(false));
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchJikanAnimeDetail(animeID));
  }, [animeID]);


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
                      <span key={index}>{genre?.name}, </span>
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

              <AnimeWatchButton to={`/watchanime/${animeDetails?.data?.documents?.[0]?.id}`}>Watch Anime</AnimeWatchButton>
            </AnimeMoreDetails>
          </Container>
        </AnimeDetails>
      </AnimeInfoContainer>
      <Container>
        <CharacterStaff animeID={animeID}/>
        <AnimeStats animeID={animeID}/>
        <AnimeRecommendations animeID={animeID}/>

        
      </Container>

     
    </PadContent>
  );
};
