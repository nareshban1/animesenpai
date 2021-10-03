import React from "react";
import { AnimeGridContainer, Container } from "../Styled/Commons";
import { JikanAnimeCard } from "../AnimeCard/JikanAnimeCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AnimeListContainer = styled.div`
  margin: 50px auto;
`;
const ListTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ListTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Poppins", "sans-serif";
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
      <Container>
        <ListTitleContainer>
          {title &&
          <ListTitle>{title}</ListTitle>
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
      </Container>
    </AnimeListContainer>
  );
};

export default HomeAnimeList;
