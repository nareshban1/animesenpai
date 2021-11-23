import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJikanAnimeRecommendations } from '../../redux/Slices/JikanGenre';
import { Link, useParams } from "react-router-dom";
import { Container, FlexContainer, LeftContainer, RightContainer } from "../../components/Styled/Commons";
import { TopAired } from "../../components/TopAired";
import AnimeSeason from "../../components/AnimeSeason";
import HomeAnimeList from "../../components/HomePageAnimeList";

function AnimeList() {
    const results = useSelector(state => state.jikanGenre.data)
    const dispatch = useDispatch()
    let params = useParams();
    useEffect(() => {
        dispatch(fetchJikanAnimeRecommendations(params.id));
    }, [dispatch, params.id])

    return (
        <Container>
            <FlexContainer>
                <LeftContainer>
                    {results &&
                        <HomeAnimeList animeData={results?.anime} title={params.name + " Anime"} btnView={false} />
                    }
                </LeftContainer>
                <RightContainer>
                    <TopAired />
                    <AnimeSeason />
                </RightContainer>
            </FlexContainer>
        </Container>
    )
}

export default AnimeList
