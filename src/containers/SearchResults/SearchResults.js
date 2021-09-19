import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AnimeCard } from '../../components/AnimeCard';
import { AnimeGridContainer } from '../../components/TopAired';
import { searchByTitle } from '../../redux/Slices/searchAnime';





function SearchResults({match}) {
    const searchResults = useSelector(state => state.searchanime.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchByTitle(match.params.title));
    }, [dispatch])

    return (
        <>
      <h1>Search Results</h1>
      {searchResults && (
        <AnimeGridContainer>
          {searchResults?.data?.documents?.map((data, index) => (
            <AnimeCard info={data} key={index}/>
          ))}
        </AnimeGridContainer>
      )}
    </>
    )
}

export default SearchResults
