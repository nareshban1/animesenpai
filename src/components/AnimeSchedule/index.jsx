import React, { useEffect, useState } from "react";
import {
  Container,
  ListContainer,
  Pre,
  Small,
  Subtitle,
} from "../Styled/Commons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AnimeListContainer } from "../HomePageAnimeList";
import { useDispatch, useSelector } from "react-redux";
import { fetchJikanAnimeSchedule } from "../../redux/Slices/JikanSchedule";
import { format } from "date-fns";

const Days = styled.p`
  text-transform: uppercase;
  padding: 10px;
  background-color: ${(props) =>
    props.selected ? props.theme.primaryColor : props.theme.mainBackground};
  color: ${(props) => props.theme.textColorSecondary};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
`;

const ScheduledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
`;

const ScheduledAnimeCards = styled(Link)`
  padding: 10px;
  background-color: ${(props) =>
    props.selected ? props.theme.primaryColor : props.theme.mainBackground};
  color: ${(props) => props.theme.textColorSecondary};
  border-radius: 5px;
  text-align: left;
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: clip;
  height: 50px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s ease;

  ${Small} {
    width: 100%;
    overflow: hidden;
  }

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

const AnimeSchedule = () => {
  const animeSchedule = useSelector((state) => state.schedule.data);
  const dispatch = useDispatch();

  const date = format(new Date(), "EEEE").toLowerCase();
  const [selected, setSelected] = useState(date);

  useEffect(() => {
    dispatch(fetchJikanAnimeSchedule());
  }, [dispatch]);

 
  

  return (
    <AnimeListContainer>
      <ListContainer>
        <Subtitle color="white">Schedule</Subtitle>
        {animeSchedule.length !== 0 && (
          <>
            <DaysContainer>
              {Object.entries(animeSchedule)
                .slice(3, 10)
                .map(([key, data]) => {
                  return (
                    <Days
                      selected={selected.toLowerCase() === key}
                      onClick={() => setSelected(key)}
                    >
                      {key.slice(0, 3)}
                    </Days>
                  );
                })}
            </DaysContainer>
            

          {selected && 
            <ScheduledGrid>
            {animeSchedule[selected]?.map((data) =>
              (
                <ScheduledAnimeCards >
                <Small>{data.title}</Small>
                </ScheduledAnimeCards>
              )
              
            )}
            </ScheduledGrid>
          }
            
          </>
        )}
      </ListContainer>
    </AnimeListContainer>
  );
};

export default AnimeSchedule;
