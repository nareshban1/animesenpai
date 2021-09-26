import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";
import styled from "styled-components";
import { fetchJikanAnimeDetail } from "../../redux/Slices/JikanAnimeDetail";
import AnimePlayer from "../../components/AnimePlayer/AnimePlayer";
import { fetchJikanAnimeCharacters } from "../../redux/Slices/JikanCharacters";
import { fetchJikanAnimeEpisodes } from "../../redux/Slices/JikanEpisodes";




export const AnimeInfo = ({ match }) => {
  const animeDetails = useSelector((state) => state.animeDetail.data);
  const jikananimeDetails = useSelector((state) => state.jikanAnimeDetails.data);
  const jikananimeCharacters = useSelector((state) => state.jikanAnimeCharacters.data);
  const jikananimeEpisodes = useSelector((state) => state.jikanAnimeEpisodes.data);
  const dispatch = useDispatch();



  const animeID = match.params.id;
  useEffect(() => {
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchJikanAnimeDetail(animeID));
    dispatch(fetchJikanAnimeCharacters(animeID));
    dispatch(fetchJikanAnimeEpisodes(animeID));
  }, [dispatch]);



  const getMainCharacter= (character) =>{
    return character.role === "Main"
  }
  return (
    <>
    {animeDetails?.data?.documents.length &&
      <>
     
      {/* <AnimePlayer animeID={animeDetails?.data?.documents?.[0]?.id}/> */}
      <h1>{animeDetails?.data?.documents?.[0]?.titles?.en}</h1>
      <h1>{animeDetails?.data?.documents?.[0]?.titles?.jp}</h1>
      <img src={animeDetails?.data?.documents?.[0]?.cover_image} alt="anime_image"/>
      <img src={animeDetails?.data?.documents?.[0]?.banner_image} alt="anime_banner_image"/>
      <h1>{animeDetails?.data?.documents?.[0]?.episodes_count}</h1>
      </>
      }
      <p>{jikananimeDetails?.synopsis}</p>
      <p>{jikananimeDetails?.source}</p>
      <p>{jikananimeDetails?.airing}</p>
      <p>{jikananimeDetails?.rating}</p>
      <p>{jikananimeDetails?.broadcast}</p>
      <p>{jikananimeDetails?.score}</p>
      <p>{jikananimeDetails?.scored_by}</p>
      <p>{jikananimeDetails?.rank}</p>
      <p>{jikananimeDetails?.members}</p>
      <p>{jikananimeDetails?.popularity}</p>

      {jikananimeDetails?.genres?.map((genre,index)=>(
        <p>{genre?.name}</p>
      ))}

        {jikananimeCharacters?.characters?.filter(getMainCharacter).map((character,index)=>(
        <>
          <img src={character.image_url} alt="character_image"/>
          <p>{character.name}</p>
          <p>{character.role}</p>
        </>

      )
      )}
      

      



    </>
  );
};
