import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchTopAired } from "../../redux/Slices/topAired";
import { fetchTopUpcoming } from "../../redux/Slices/topUpcoming";
import { AnimeCard } from "../AnimeCard";


export const AnimeGridContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-gap: 20px;

`
export const Upcoming = () => {
  const topUpcomingAnime = useSelector((state) => state.topUpcoming.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopUpcoming(2));
  }, [dispatch]);

  return (
    <>
      <h1>Upcoming Anime</h1>
      {topUpcomingAnime && (
        <AnimeGridContainer>
          {topUpcomingAnime?.data?.documents?.map((data, index) => (
            <AnimeCard info={data} key={index}/>
          ))}
        </AnimeGridContainer>
      )}
    </>
  );
};
