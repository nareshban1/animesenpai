import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchTopAired } from "../../redux/Slices/topAired";
import { AnimeCard } from "../AnimeCard";


export const AnimeGridContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-gap: 20px;

`
export const TopAired = () => {
  const topAiredAnime = useSelector((state) => state.topAired.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopAired(0));
  }, [dispatch]);

  return (
    <>
      <h1>Top Aired Anime</h1>
      {topAiredAnime && (
        <AnimeGridContainer>
          {topAiredAnime?.data?.documents?.map((data, index) => (
            <AnimeCard info={data} key={index}/>
          ))}
        </AnimeGridContainer>
      )}
    </>
  );
};
