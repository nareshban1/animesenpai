import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail"
import { fetchAnimeEpisodes } from "../../redux/Slices/AnimeEpisodes"
import ReactPlayer from 'react-player'




export const AnimeInfo = ({match}) =>{

    const animeDetails = useSelector(state => state.animeDetail.data);
    const animeEpisodes = useSelector(state => state.animeEpisodes.data)
    const dispatch = useDispatch();

    const animeID = match.params.id;
    useEffect(() => {
        dispatch(fetchAnimeDetail(animeID))
        dispatch(fetchAnimeEpisodes(animeID))


    }, [dispatch])

    return(
        <>
        {JSON.stringify(animeDetails)}
        {JSON.stringify(animeEpisodes?.data?.documents[0].video)}
        <ReactPlayer url={animeEpisodes?.data?.documents[0].video} playing={true} controls={true} playIcon/>
        
        </>
    )
}