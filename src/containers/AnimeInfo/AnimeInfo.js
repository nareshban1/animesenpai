import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";
import { fetchAnimeEpisodes } from "../../redux/Slices/AnimeEpisodes";
import ReactPlayer from "react-player";
import styled from "styled-components";




const EpisodeCard = styled.div`
    height: 30px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
`
const EpisodesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(50px,1fr));
  grid-gap: 10px;
`


export const AnimeInfo = ({ match }) => {
  const animeDetails = useSelector((state) => state.animeDetail.data);
  const animeEpisodes = useSelector((state) => state.animeEpisodes.data);
  const dispatch = useDispatch();

  const [currentEpisode, setCurrentEpisode] = useState(animeEpisodes?.data?.documents?.[0]?.video)


  const animeID = match.params.id;
  useEffect(() => {
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchAnimeEpisodes(animeID));
  }, [dispatch]);


  console.log(animeEpisodes)
  
  console.log(currentEpisode)

  return (
    <>
    
      {animeEpisodes.data? (
        <>
        <ReactPlayer
          controls
          url={currentEpisode}
          config={{
            file: {
              forceHLS: true,
            },
          }}
        />
        <EpisodesContainer>
        {animeEpisodes?.data?.documents?.map((episodes, index) =>(
          <EpisodeCard  onClick={()=>setCurrentEpisode(episodes.video)} key={index}>{episodes.number}</EpisodeCard>
        ))}
        </EpisodesContainer>
        </>
      ):(
        <p>Episodes not available</p>
      )  }
      {JSON.stringify(animeDetails)}
    </>
  );
};
