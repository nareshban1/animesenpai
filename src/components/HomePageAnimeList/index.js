import React from "react";
import { AnimeGridContainer, Subtitle} from "../Styled/Commons";
import { JikanAnimeCard } from "../AnimeCard/JikanAnimeCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AnimeListContainer = styled.div`
  margin: 20px auto;
  padding: 0;
`;
const ListTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ListTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Poppins", "sans-serif";
  color: ${(props) => props.theme.textColorSecondary};
`;
const ViewAllBtn = styled(Link)`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.primaryColor};
  transition: 0.3s all ease;

  &:hover{
      letter-spacing: 3px;
  }
`;

const HomeAnimeList = ({ animeData, title, btnView }) => {
  return (
    <AnimeListContainer>
      
        <ListTitleContainer>
          {title &&
          <Subtitle color="white">{title}</Subtitle>
          }
          {btnView &&  <ViewAllBtn to={{ pathname:`/${title}`}} >View All</ViewAllBtn> }
        </ListTitleContainer>
        {animeData && (
          <AnimeGridContainer>
            {animeData?.map((data, index) => (
              <JikanAnimeCard info={data} key={index} />
            ))}
          </AnimeGridContainer>
        )}
      
    </AnimeListContainer>
  );
};

export default HomeAnimeList;
