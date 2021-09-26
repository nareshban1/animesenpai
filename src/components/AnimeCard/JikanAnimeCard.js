import { Link } from "react-router-dom";
import styled from "styled-components";

const AnimeContainer = styled(Link)`
  border-radius: 10px;
  overflow: hidden;
  min-height: 350px;
  max-height: 450px;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.02);
  }
`;
const AnimeImage = styled.img`
  height: 90%;
  width: 100%;
  border-radius: 10px;
`;

const AnimeName = styled.div`
  height: 10%;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
`;

export const JikanAnimeCard = ({ info }) => {
  return (
    <AnimeContainer to={`/animeinfo/${info?.mal_id}`}>
      <AnimeImage src={info?.image_url} alt="" />
      <AnimeName>{info?.title}</AnimeName>
    </AnimeContainer>
  );
};
