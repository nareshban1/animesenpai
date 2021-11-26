import { useEffect } from 'react'
import { Body, ListContainer } from "../Styled/Commons";
import { EpisodesContainer, EpisodeCard } from "./AnimeEpisodesStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimeEpisodes } from '../../redux/Slices/AnimeEpisodes';
import Pagination from '../Pagination/Pagination'
import { SpinnerCircular } from 'spinners-react';
const AnimeEpisodes = ({ animeID, setCurrentEpisode, currentEpisode }) => {
    const animeEpisode = useSelector((state) => state.animeEpisodes);
    const page = useSelector((state) => state.pageNumber.pageNo);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchAnimeEpisodes(animeID, page));
    }, [page, animeID, dispatch])



    const changeEpisode = (episode) => {
        setCurrentEpisode(episode)
    }
    return (
        <ListContainer>
            {animeEpisode.loading ? <SpinnerCircular /> : <>
                {animeEpisode?.data?.data !== "" ?
                    <>
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
                    </>

                    : <> <Body color="white">No Episodes Available</Body></>}
            </>}
        </ListContainer>
    );
};

export default AnimeEpisodes;
