import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchByTitle } from '../../redux/Slices/searchAnime';
import { useParams } from "react-router-dom";

import AnimeResults from '../../components/AnimeResults/AnimeResults';

function SearchResults() {
  const searchResults = useSelector(state => state.searchanime)
  const dispatch = useDispatch()
  let params = useParams();
  useEffect(() => {
    dispatch(searchByTitle(params.query));
  }, [dispatch, params.query])

  return (

    <AnimeResults loading={searchResults?.loading} error={searchResults?.error} animeData={searchResults?.data?.data?.documents.slice(0, 30)} title={"Search Results for " + params.query} />

  )
}

export default SearchResults
