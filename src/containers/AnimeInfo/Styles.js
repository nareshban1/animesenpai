import styled from "styled-components";
import Link from "next/link";
export const AnimeInfoContainer = styled.div`
  margin-top: 0px;
`;

export const AnimeInfoBackground = styled.div`
  height: 50vh;
  width: 100%;
  background-color: ${(props) => props.color};
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: soft-light;
`;

export const AnimeDetails = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorSecondary};
  position: relative;
  padding-bottom: 20px;
`;

export const AnimeTitleImageContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  height: 250px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const AnimeImageContainer = styled.div`
  height: 500px;
  width: 350px;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  margin-top: -250px;
`;

export const AnimeImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AnimeTitleSynopsisContainer = styled.div`
  width: calc(100% - 350px);
  margin-left: 400px;
`;

export const AnimeTitlesContainer = styled.div`
  font-size: 1.5rem;
  position: absolute;
  margin-top: -200px;
`;

export const AnimeEnglishTitle = styled.h1``;

export const AnimeSynopsisContainer = styled.div`
  height: 230px;
  overflow: hidden;
`;

export const SynopsisRankContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RanksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const RanksData = styled.h3`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const RanksDataSpan = styled.span`
  font-size: 1rem;
  margin-left: 5px;
  font-weight: 500;
`;

export const SynopsisTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 10px 0px;
`;

export const AnimeSynopsis = styled.div`
  font-size: 1rem;
  text-align: justify;
`;

export const AnimeMoreDetails = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const AnimeScoreContainer = styled.div`
  border-radius: 20px;
  height: 100px;
  width: 100px;
  padding: 10px;
  background-color: ${(props) => props.color};
  display: grid;
  place-items: center;
`;

export const ScoreTitle = styled.p``;

export const Score = styled.h1``;

export const ScoredBy = styled.p``;

export const AnimeGenreDetailsContainer = styled.div`
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

export const AnimeWatchButton = styled(Link)`
  height: 100px;
  width: 150px;
  padding: 10px;
  background-color: ${(props) => props.theme.mainBackground};
  display: grid;
  place-items: center;
  border-radius: 20px;
`;

export const TopDetailContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  padding: 0px 10px 10px 10px;
  border-bottom: 1px solid ${(props) => props.theme.mainBackground};
  align-items: center;
  box-sizing: border-box;
`;

export const BottomDetailContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  padding: 10px 10px 0px 10px;
  align-items: center;
  box-sizing: border-box;
`;

export const Details = styled.p`
  margin-right: 20px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const DetailsTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 5px;
`;
