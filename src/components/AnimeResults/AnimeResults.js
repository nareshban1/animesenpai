import React from 'react'
import { Container, FlexContainer, LeftContainer, RightContainer } from "../Styled/Commons";
import { TopAired } from "../TopAired";
import AnimeSeason from "../AnimeSeason";
import HomeAnimeList from "../HomePageAnimeList";
import JikanPagination from '../Pagination/JikanPagination';

const AnimeResults = ({ loading, error, animeData, title, pagination }) => {
    return (
        <Container>
            <FlexContainer>
                <LeftContainer>
                    <HomeAnimeList loading={loading} onError={error} animeData={animeData} title={title} />
                    {pagination && <JikanPagination onError={error} />}
                </LeftContainer>
                <RightContainer>
                    <TopAired />
                    <AnimeSeason />
                </RightContainer>
            </FlexContainer>
        </Container>
    )
}

export default AnimeResults
