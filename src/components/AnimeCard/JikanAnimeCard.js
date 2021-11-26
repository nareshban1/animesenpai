import { Link } from "react-router-dom";
import styled from "styled-components";


const AnimeContainer = styled(Link)`
  height:300px;
  transition: 0.3s all ease;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  
`;

const AnimeImageContainer = styled.div`
  height:85%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

const AnimeImage = styled.img`
  height:100%;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;



const AnimeName = styled.div`
  color:white;
  overflow: hidden;
  text-overflow: ellipsis;
  height:15%;
  color:${(props) => props.theme.textColorSecondary};
 
`;



export const JikanAnimeCard = ({ info }) => {
  return (
    <AnimeContainer to={`/animeinfo/${info?.mal_id}`}>
      <AnimeImageContainer>
        <AnimeImage src={info?.image_url || info?.cover_image} alt="" />
      </AnimeImageContainer>
      <AnimeName>{info?.title || info?.titles?.en || info?.name}</AnimeName>
    </AnimeContainer>
  );
};
