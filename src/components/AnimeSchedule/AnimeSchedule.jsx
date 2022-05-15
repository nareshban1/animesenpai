import React, { useEffect, useState } from "react";
import { ListContainer, Small, Subtitle } from "../Styled/Commons";
import styled from "styled-components";
import Link from "next/link";
import { AnimeListContainer } from "../Styled/Commons";
import { format } from "date-fns";
import { useGetSchedulesQuery } from "../../redux/Query/apiEndpoints";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Days = styled.p`
  text-transform: uppercase;
  padding: 10px;
  background-color: ${(props) =>
    props.selected ? props.theme.primaryColor : props.theme.mainBackground};
  color: ${(props) =>
    props.selected
      ? props.theme.textColorPrimary
      : props.theme.textColorSecondary};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
  }
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
  }
`;

const ScheduledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ScheduledAnimeCards = styled.a`
  padding: 10px;
  background-color: ${(props) =>
    props.selected ? props.theme.primaryColor : props.theme.mainBackground};
  color: ${(props) => props.theme.textColorSecondary};
  border-radius: 5px;
  text-align: left;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 50px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s ease;

  ${Small} {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorPrimary};
  }
`;

const AnimeSchedule = () => {
  const date = format(new Date(), "EEEE");
  const [skip, setSkip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSkip(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  const [selected, setSelected] = useState(date);
  const { data, error, isLoading, isFetching } = useGetSchedulesQuery(
    selected.toLowerCase(),
    {
      skip,
    }
  );

  const days = [
    { label: "MON", value: "monday" },
    { label: "TUE", value: "tuesday" },
    { label: "WED", value: "wednesday" },
    { label: "THU", value: "thursday" },
    { label: "FRI", value: "friday" },
    { label: "SAT", value: "saturday" },
    { label: "SUN", value: "sunday" },
  ];

  return (
    <AnimeListContainer>
      <ListContainer>
        <Subtitle color="white">Schedule</Subtitle>
        {isLoading || skip ? (
          <LoadingSpinner />
        ) : (
          <>
            {data && (
              <>
                <DaysContainer>
                  {days.map((day, index) => {
                    return (
                      <Days
                        selected={selected.toLowerCase() === day.value}
                        onClick={() => setSelected(day.value)}
                        key={index}
                      >
                        {day.label}
                      </Days>
                    );
                  })}
                </DaysContainer>
                {isFetching ? (
                  <LoadingSpinner />
                ) : (
                  <ScheduledGrid>
                    {data.data?.map((anime, index) => (
                      <Link
                        passHref
                        href={`/animeinfo/${anime?.mal_id}`}
                        key={index}
                      >
                        <ScheduledAnimeCards>
                          <Small>{anime.title}</Small>
                        </ScheduledAnimeCards>
                      </Link>
                    ))}
                  </ScheduledGrid>
                )}
              </>
            )}
          </>
        )}
      </ListContainer>
    </AnimeListContainer>
  );
};

export default AnimeSchedule;
