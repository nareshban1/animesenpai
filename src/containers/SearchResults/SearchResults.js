import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchByTitle } from '../../redux/Slices/searchAnime';
import { Link, useParams } from "react-router-dom";
import { Container, FlexContainer, LeftContainer, RightContainer } from "../../components/Styled/Commons";
import { TopAired } from "../../components/TopAired";
import AnimeSeason from "../../components/AnimeSeason";
import HomeAnimeList from "../../components/HomePageAnimeList";

function SearchResults() {
  const searchResults = useSelector(state => state.searchanime.data)
  const dispatch = useDispatch()
  let params = useParams();
  useEffect(() => {
    dispatch(searchByTitle(params.query));
  }, [dispatch])

  return (


    <Container>
      <FlexContainer>
        <LeftContainer>
          {searchResults &&
            <HomeAnimeList animeData={searchResults?.data?.documents} title={"Search Results"} btnView={false} />
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

export default SearchResults
