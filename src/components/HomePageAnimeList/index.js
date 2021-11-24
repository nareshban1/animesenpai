import React from "react";
import { AnimeGridContainer, Subtitle, AnimeListContainer, Body } from "../Styled/Commons";
import { JikanAnimeCard } from "../AnimeCard/JikanAnimeCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SpinnerCircular } from 'spinners-react';

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

const HomeAnimeList = ({ animeData, title, onError, loading }) => {
  console.log(animeData)
  return (
    <>

      <AnimeListContainer>
        <ListTitleContainer>
          {title &&
            <Subtitle color="white">{title}</Subtitle>
          }

        </ListTitleContainer>
        {loading ? <>

          <SpinnerCircular />
        </> : <>
          <AnimeGridContainer>
            {animeData?.map((data, index) => (
              <JikanAnimeCard info={data} key={index} />
            ))}
          </AnimeGridContainer>
        </>}
        {(onError?.length !== 0 || animeData?.length === 0) &&
          <Body color="white">No Anime Found</Body>
        }
      </AnimeListContainer>

    </>

  );
};

export default HomeAnimeList;
