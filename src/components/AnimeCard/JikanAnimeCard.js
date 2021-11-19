import { Link } from "react-router-dom";
import styled from "styled-components";




const AnimeImage = styled.img`
  height:245px;
  width: 100%;
  border-radius: 10px;

  @media (max-width: 550px) {
      min-height:200px;
      max-height:210px;
    }
`;

const AnimeName = styled.div`
  color:white;
  overflow: hidden;
  height:45px;
 
`;

const AnimeContainer = styled(Link)`
  
  transition: 0.3s all ease;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;

`;

export const JikanAnimeCard = ({ info }) => {
  return (
    <AnimeContainer to={`/animeinfo/${info?.mal_id}`}>
      <AnimeImage src={info?.image_url} alt="" />
      <AnimeName>{info?.title}</AnimeName>
    </AnimeContainer>
  );
};
