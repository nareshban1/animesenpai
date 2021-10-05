import React from 'react'
import AnimePlayer from '../../components/AnimePlayer/AnimePlayer'
import { Container } from '../../components/Styled/Commons'

function AnimeStream({match}) {

    const animeID = match.params.id;
    return (
        <Container>
            <AnimePlayer animeID={animeID}/>
        </Container>
    )
}

export default AnimeStream
