import { Link } from "react-router-dom";
import styled from "styled-components";




const AnimeImage = styled.img`
  height:100%;
  width: 100%;
  border-radius: 5px;
  object-fit: fit;
`;

const AnimeImageContainer = styled.div`
  height:85%;
  width: 100%;
  border-radius: 5px;

`;

const AnimeName = styled.div`
  color:white;
  overflow: hidden;
  text-overflow: ellipsis;
  height:15%;
 
`;

const AnimeContainer = styled(Link)`
  height:100%;
  transition: 0.3s all ease;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;

`;

export const JikanAnimeCard = ({ info }) => {
  return (
    <AnimeContainer to={`/animeinfo/${info?.mal_id}`}>
      <AnimeImageContainer>
      <AnimeImage src={info?.image_url} alt="" />
      </AnimeImageContainer>
      <AnimeName>{info?.title}</AnimeName>
    </AnimeContainer>
  );
};
