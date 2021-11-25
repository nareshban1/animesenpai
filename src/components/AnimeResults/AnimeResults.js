import React from 'react'
import { Container, FlexContainer, LeftContainer, RightContainer } from "../Styled/Commons";
import { TopAired } from "../TopAired";
import AnimeSeason from "../AnimeSeason";
import HomeAnimeList from "../HomePageAnimeList";
import JikanPagination from '../Pagination/JikanPagination';
import ListPages from '../ListPages/ListPages';

const AnimeResults = ({ loading, error, animeData, title, pagination }) => {
    return (

        <ListPages>
            <HomeAnimeList loading={loading} onError={error} animeData={animeData} title={title} />
            {pagination && <JikanPagination onError={error} />}
        </ListPages>

    )
}

export default AnimeResults
