import React from 'react'
import { Container, FlexContainer, LeftContainer, RightContainer } from "../Styled/Commons";
import { TopAired } from "../TopAired";
import AnimeSeason from "../AnimeSeason";
import HomeAnimeList from "../HomePageAnimeList";


const AnimeResults = ({ loading, error, animeData, title }) => {
    return (
        <Container>
            <FlexContainer>
                <LeftContainer>
                    <HomeAnimeList loading={loading} onError={error} animeData={animeData} title={title} />
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
