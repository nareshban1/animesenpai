import { useEffect, useState } from 'react'
import { ListContainer } from "../Styled/Commons";
import { EpisodesContainer, EpisodeCard } from "./AnimeEpisodesStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimeEpisodes } from '../../redux/Slices/AnimeEpisodes';
import Pagination from '../Pagination/Pagination'

const AnimeEpisodes = ({ animeID, setCurrentEpisode, currentEpisode }) => {
    const animeEpisode = useSelector((state) => state.animeEpisodes);
    const page = useSelector((state) => state.pageNumber.pageNo);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchAnimeEpisodes(animeID, page));
    }, [page, animeID])

    useEffect(() => {
        {
            animeEpisode &&
                setCurrentEpisode(animeEpisode?.data?.data?.documents?.[0])
        }
    }, [animeID])

    const changeEpisode = (episode) => {
        setCurrentEpisode(episode)
    }
    console.log(currentEpisode);
    return (
        <ListContainer>

            <EpisodesContainer>
                {animeEpisode?.data?.data?.documents?.map((episode, index) => (
                    <EpisodeCard
                        onClick={() => changeEpisode(episode)}
                        key={index}
                        active={currentEpisode?.number === episode.number}
                    >
                        {episode.number}
                    </EpisodeCard>
                ))}
            </EpisodesContainer>
            <Pagination />
        </ListContainer>
    );
};

export default AnimeEpisodes;
