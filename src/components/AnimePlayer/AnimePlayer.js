import React,{useEffect,useState} from 'react'
import ReactPlayer from "react-player";
import styled from "styled-components";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAnimeEpisodes } from '../../redux/Slices/AnimeEpisodes';
import { changeScroll } from '../../redux/Slices/ScrollColor';
import { PadContent } from '../Styled/Commons';


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

function AnimePlayer({animeID}) {
    const animeEpisode = useSelector((state) => state.animeEpisodes);
    const page = useSelector((state) => state.pageNumber.pageNo);
    const dispatch = useDispatch();
    const [currentEpisode, setCurrentEpisode] = useState()
    useEffect(() => {
        dispatch(changeScroll(false));
        dispatch(fetchAnimeEpisodes(animeID,page));
    }, [page,animeID])

      useEffect(() => {
        setCurrentEpisode(animeEpisode?.data?.data?.documents?.[0].video)
      }, [animeEpisode])
    
    return (
        <PadContent>
         <ReactPlayer
              controls
              url={currentEpisode}
              config={{
                file: {
                  forceHLS: true,
                },
              }}
            />
        {animeEpisode?.loading ? <>Loading</> :
        <>
        {animeEpisode.data?.data? (
            <>
           
            <EpisodesContainer>
            {animeEpisode?.data?.data?.documents?.map((episodes, index) =>(
              <EpisodeCard  onClick={()=>setCurrentEpisode(episodes.video)} key={index}>{episodes.number}</EpisodeCard>
            ))}
            </EpisodesContainer>
            <Pagination/>
    
            </>
          ):(
            <p>Episodes not available</p>
          )  }
          </>}
          </PadContent>
    )
}

export default AnimePlayer
