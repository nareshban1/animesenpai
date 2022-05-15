import { useEffect, useState } from "react";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { useDispatch, useSelector } from "react-redux";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import ScrollToTopOnPageChange from "../../helpers/ScrollToTopOnPageChange";
import { fetchAnimebyLetter } from "../../redux/Slices/ByLetter";
import { toPage } from "../../redux/Slices/pagination";
import { useRouter } from "next/router";
const LetterName = () => {
  const results = useSelector((state) => state.byletteranime);
  const page = useSelector((state) => state.pageNumber.pageNo);
  const [letterData, setLetterData] = useState({ letter: "", name: "All" });
  const dispatch = useDispatch();
const router = useRouter()
const {letterName} = router.query
  useEffect(() => {
    dispatch(toPage(1));
  }, [dispatch, letterData]);

  useEffect(() => {
    dispatch(fetchAnimebyLetter(letterData.letter, page));
  }, [dispatch, letterData, page]);


  return (
    <PageTransitions>
      <ScrollToTopOnPageChange page={page} />
      <AnimeResults
        loading={results?.loading}
        error={results?.error}
        animeData={results?.data?.results}
        title={letterName + " Anime"}
        pagination={true}
      >
       </AnimeResults>
    </PageTransitions>
  );
};

export default LetterName;
