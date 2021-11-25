import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchByTitle } from '../../redux/Slices/searchAnime';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import AnimeResults from '../../components/AnimeResults/AnimeResults';
import PageTransitions from '../../components/PageTransitions/PageTransitions';

function SearchResults() {
  const searchResults = useSelector(state => state.searchanime)
  const dispatch = useDispatch()
  let params = useParams();
  useEffect(() => {
    dispatch(searchByTitle(params.query));
  }, [dispatch, params.query])

  return (
    <PageTransitions>
      <AnimeResults loading={searchResults?.loading} error={searchResults?.error} animeData={searchResults?.data?.data?.documents.slice(0, 30)} title={"Search Results for " + params.query} />
    </PageTransitions>
  )
}

export default SearchResults
