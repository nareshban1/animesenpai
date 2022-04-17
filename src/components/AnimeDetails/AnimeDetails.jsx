import { Small, TitleH3 } from "../Styled/Commons";
import {
  AnimeDetail,
  AnimeImage,
  AnimeImageContainer,
  AnimeSynopsis,
  AnimeTitlesContainer,
  AnimeTitleSynopsisContainer,
  MoreInfoContainer,
  MoreInfoLeft,
  MoreInfoRight,
  RankContainer,
  TitleRanksContainer,
} from "./Styles";
import { useParams } from "react-router-dom";
import {
  useGetAnimeDetailByMalIdQuery,
  useGetAnimeDetailsQuery,
} from "../../redux/Query/apiEndpoints";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const AnimeDetails = () => {
  let params = useParams();
  const animeID = params.id;
  const jikan = useGetAnimeDetailsQuery(animeID);

  return (
    <AnimeDetail>
      {jikan?.loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <AnimeImageContainer>
            <AnimeImage src={jikan?.data?.data?.images?.webp?.image_url} />
          </AnimeImageContainer>
          <AnimeTitleSynopsisContainer>
            <AnimeTitlesContainer>
              <TitleRanksContainer>
                <TitleH3 color="#5EAA7A">{jikan?.data?.data?.title}</TitleH3>
                <RankContainer>
                  <Small>Rank: {jikan?.data?.data?.rank}</Small>
                  <Small>Popularity: {jikan?.data?.data?.popularity}</Small>
                </RankContainer>
              </TitleRanksContainer>
              <Small fontstyle="italic">
                {jikan?.data?.data?.title_english},
                {jikan?.data?.data?.title_synonyms?.[0]},
                {jikan?.data?.data?.title_japanese}
              </Small>
            </AnimeTitlesContainer>
            <AnimeSynopsis>
              <Small>{jikan?.data?.data?.synopsis}</Small>
            </AnimeSynopsis>

            <MoreInfoContainer>
              <MoreInfoLeft>
                <Small>Type:&nbsp;&nbsp;{jikan?.data?.data?.type}</Small>
                <Small>
                  Studios:&nbsp;&nbsp;
                  {jikan?.data?.data?.studios?.map((studios, index) => (
                    <span key={index}>{studios?.name}, </span>
                  ))}
                </Small>
                <Small>
                  Date aired:&nbsp;&nbsp;{jikan?.data?.data?.aired?.string}
                </Small>
                <Small>Status:&nbsp;&nbsp;{jikan?.data?.data?.status}</Small>
                <Small>
                  Genre:&nbsp;&nbsp;
                  {jikan?.data?.data?.genres?.map((genre, index) => (
                    <span key={index}>{genre?.name}, </span>
                  ))}
                </Small>
              </MoreInfoLeft>
              <MoreInfoRight>
                <Small>
                  Scores:&nbsp;&nbsp;{jikan?.data?.data?.score}/
                  {jikan?.data?.data?.scored_by}
                </Small>
                <Small>
                  Premiered:&nbsp;&nbsp;
                  {jikan?.data?.data?.aired?.prop?.from?.year}
                </Small>
                <Small>
                  Duration:&nbsp;&nbsp;{jikan?.data?.data?.duration}
                </Small>
                <Small>Source:&nbsp;&nbsp;{jikan?.data?.data?.source}</Small>
                <Small>
                  AirTime:&nbsp;&nbsp;{jikan?.data?.broadcast?.string}
                </Small>
                <Small>
                  Episodes:&nbsp;&nbsp;
                  {jikan?.data?.data?.episodes}
                </Small>
              </MoreInfoRight>
            </MoreInfoContainer>
          </AnimeTitleSynopsisContainer>
        </>
      )}
    </AnimeDetail>
  );
};

export default AnimeDetails;
