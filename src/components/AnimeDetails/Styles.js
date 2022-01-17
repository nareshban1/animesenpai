import styled from "styled-components";

export const AnimeDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.textColorSecondary};
  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 10px;
  box-sizing: border-box;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AnimeImageContainer = styled.div`
  height: 350px;
  width: 30%;
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AnimeImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const AnimeTitleSynopsisContainer = styled.div`
  width: 68%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AnimeTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AnimeSynopsis = styled.div`
  width: 100%;
  text-align: justify;
`;

export const RanksContainer = styled.div``;
export const TitleRanksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media (max-width: 580px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MoreInfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 580px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const MoreInfoLeft = styled.div`
  width: 100%;
`;
export const MoreInfoRight = styled.div`
  width: 100%;
  margin-left: auto;
`;
