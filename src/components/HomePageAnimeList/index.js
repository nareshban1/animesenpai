import React from "react";
import { AnimeGridContainer, Subtitle, AnimeListContainer } from "../Styled/Commons";
import { JikanAnimeCard } from "../AnimeCard/JikanAnimeCard";
import styled from "styled-components";
import { Link } from "react-router-dom";


const ListTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
    <>
      {animeData?.length &&
        <AnimeListContainer>
          <ListTitleContainer>
            {title &&
              <Subtitle color="white">{title}</Subtitle>
            }
            {btnView && <ViewAllBtn to={{ pathname: `/${title}` }} >View All</ViewAllBtn>}
          </ListTitleContainer>
          {animeData && (
            <AnimeGridContainer>
              {animeData?.map((data, index) => (
                <JikanAnimeCard info={data} key={index} />
              ))}
            </AnimeGridContainer>
          )}
        </AnimeListContainer>
      }
    </>

  );
};

export default HomeAnimeList;
