import { Link } from "react-router-dom";
import styled from "styled-components";

const AnimeContainer = styled(Link)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  min-height: 350px;
  max-height: 450px;
  transition: 0.3s all ease;
  border: 5px solid transparent;

  &:hover {
    border: 5px solid ${(props) => props.theme.primaryColor};
  }
`;
const AnimeImage = styled.img`
  height: 100%;
  width: 100%;
`;

const AnimeName = styled.div`
  height: 10%;
  text-align: center;
  background:${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorPrimary};
`;

export const JikanAnimeCard = ({ info }) => {
  return (
    <AnimeContainer to={`/animeinfo/${info?.mal_id}`}>
      <AnimeImage src={info?.image_url} alt="" />
      <AnimeName>{info?.title}</AnimeName>
    </AnimeContainer>
  );
};
