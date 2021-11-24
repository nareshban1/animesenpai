import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJikanAnimeGenre } from '../../redux/Slices/JikanGenre';
import { Link, useParams } from "react-router-dom";
import AnimeResults from '../../components/AnimeResults/AnimeResults';
import ScrollToTopOnPageChange from '../../helpers/ScrollToTopOnPageChange';


function AnimeList() {
    const results = useSelector(state => state.jikanGenre)
    const page = useSelector((state) => state.pageNumber.pageNo);
    const dispatch = useDispatch()
    let params = useParams();
    useEffect(() => {

    }, [params.id])

    useEffect(() => {
        dispatch(fetchJikanAnimeGenre(params.id, page));
    }, [dispatch, params.id, page])


    return (
        <>  <ScrollToTopOnPageChange page={page} />
            <AnimeResults loading={results?.loading} error={results?.error} animeData={results?.data?.anime} title={params.name + " Anime"} pagination={true} />

        </>

    )
}

export default AnimeList
