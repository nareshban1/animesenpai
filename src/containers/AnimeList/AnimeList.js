import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJikanAnimeGenre } from "../../redux/Slices/JikanGenre";
import { useRouter } from "next/router";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import ScrollToTopOnPageChange from "../../helpers/ScrollToTopOnPageChange";
import PageTransitions from "../../components/PageTransitions/PageTransitions";

function AnimeList() {
  const results = useSelector((state) => state.jikanGenre);
  const page = useSelector((state) => state.pageNumber.pageNo);
  const dispatch = useDispatch();
  const router = useRouter();
  const { params } = router.query;

  useEffect(() => {}, [params]);

  useEffect(() => {
    dispatch(fetchJikanAnimeGenre(params, page));
  }, [dispatch, params, page]);

  return (
    <PageTransitions>
      <ScrollToTopOnPageChange page={page} />
      <AnimeResults
        loading={results?.loading}
        error={results?.error}
        animeData={results?.data?.anime}
        // title={params.name + " Anime"}
        pagination={true}
      />
    </PageTransitions>
  );
}

export default AnimeList;
