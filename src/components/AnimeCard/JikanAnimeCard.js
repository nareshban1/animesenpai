import { Link } from "react-router-dom";
import styled from "styled-components";




const AnimeImage = styled.img`
  height: 100%;
  width: 100%;
`;

const AnimeName = styled.div`
  position: absolute;
  bottom: 0;  
  width: 100%;
  padding:10px;
  box-sizing:border-box;
  border:1px solid ${(props) => props.theme.primaryColor};
  display: none;
  place-items: center;
  min-height: 50px;
  text-align: center;
  background:${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorSecondary};
  font-size:1.1rem;
  transition: 0.2s all ease;
 
`;

const AnimeContainer = styled(Link)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-sizing:border-box;
  min-height: 350px;
  max-height: 450px;
  transition: 0.3s all ease;
  border: 5px solid transparent;

  &:hover {
    border: 5px solid ${(props) => props.theme.primaryColor};
  }

  &:hover ${AnimeName}{
      display: grid;
    }
`;

export const JikanAnimeCard = ({ info }) => {
  return (
    <AnimeContainer to={`/animeinfo/${info?.mal_id}`}>
      <AnimeImage src={info?.image_url} alt="" />
      <AnimeName>{info?.title}</AnimeName>
    </AnimeContainer>
  );
};
