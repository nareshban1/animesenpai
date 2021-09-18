import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchTrending } from "../../redux/Slices/trending";
import { AnimeCard } from "../AnimeCard";


export const AnimeGridContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-gap: 20px;

`




export const Trending = () => {
  const trendingAnime = useSelector((state) => state.trending.data);
  const dispatch = useDispatch();
  const trending = trendingAnime?.data?.documents?.slice(0, 10);

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  return (
    <>
      <h1>Trending Anime</h1>
      {trending && (
        <AnimeGridContainer>
          {trending.map((data, index) => (
            <AnimeCard info={data} key={index}/>
          ))}
        </AnimeGridContainer>
      )}
    </>
  );
};
