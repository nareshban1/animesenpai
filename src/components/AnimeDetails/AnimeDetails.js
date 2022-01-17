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
import { useSelector } from "react-redux";
import { SpinnerCircular } from "spinners-react";
const AnimeDetails = () => {
  const jikan = useSelector((state) => state.jikanAnimeDetails);
  const animeInfo = useSelector((state) => state.animeDetail.data);
  return (
    <AnimeDetail>
      {jikan?.loading ? (
        <>
          <SpinnerCircular />
        </>
      ) : (
        <>
          <AnimeImageContainer>
            <AnimeImage src={jikan?.data?.image_url} />
          </AnimeImageContainer>
          <AnimeTitleSynopsisContainer>
            <AnimeTitlesContainer>
              <TitleRanksContainer>
                <TitleH3 color="#5EAA7A">{jikan?.data?.title}</TitleH3>
                <RankContainer>
                  <Small>Rank: {jikan?.data?.rank}</Small>
                  <Small>Popularity: {jikan?.data?.popularity}</Small>
                </RankContainer>
              </TitleRanksContainer>
              <Small fontstyle="italic">
                {jikan?.data?.title_english},{jikan?.data?.title_synonyms?.[0]},
                {jikan?.data?.title_japanese}
              </Small>
            </AnimeTitlesContainer>
            <AnimeSynopsis>
              <Small>{jikan?.data?.synopsis}</Small>
            </AnimeSynopsis>

            <MoreInfoContainer>
              <MoreInfoLeft>
                <Small>Type:&nbsp;&nbsp;{jikan?.data?.type}</Small>
                <Small>
                  Studios:&nbsp;&nbsp;
                  {jikan?.data?.studios?.map((studios, index) => (
                    <span key={index}>{studios?.name}, </span>
                  ))}
                </Small>
                <Small>Date aired:&nbsp;&nbsp;{jikan?.aired?.string}</Small>
                <Small>Status:&nbsp;&nbsp;{jikan?.status}</Small>
                <Small>
                  Genre:&nbsp;&nbsp;
                  {jikan?.data?.genres?.map((genre, index) => (
                    <span key={index}>{genre?.name}, </span>
                  ))}
                </Small>
              </MoreInfoLeft>
              <MoreInfoRight>
                <Small>
                  Scores:&nbsp;&nbsp;{jikan?.data?.score}/
                  {jikan?.data?.scored_by}
                </Small>
                <Small>Premiered:&nbsp;&nbsp;{jikan?.data?.premiered}</Small>
                <Small>Duration:&nbsp;&nbsp;{jikan?.data?.duration}</Small>
                <Small>Source:&nbsp;&nbsp;{jikan?.data?.source}</Small>
                <Small>AirTime:&nbsp;&nbsp;{jikan?.data?.broadcast}</Small>
                <Small>
                  Episodes:&nbsp;&nbsp;
                  {jikan?.data?.episodes ||
                    animeInfo?.data?.documents?.[0]?.episodes_count}
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
