import { useEffect, useState } from "react";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { useDispatch, useSelector } from "react-redux";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import ScrollToTopOnPageChange from "../../helpers/ScrollToTopOnPageChange";
import { fetchAnimebyLetter } from "../../redux/Slices/ByLetter";
import { LetterContainer, Letter } from "../../components/Footer/FooterStyles";
import { toPage } from "../../redux/Slices/pagination";
import { letters } from "../../data/letters";
const AZList = () => {
  const results = useSelector((state) => state.byletteranime);
  const page = useSelector((state) => state.pageNumber.pageNo);
  const [letterData, setLetterData] = useState({ letter: "", name: "All" });
  const dispatch = useDispatch();

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
        title={letterData.name + " Anime"}
        pagination={true}
      >
        <LetterContainer>
          {letters.map((letter, index) => (
            <Letter
              key={index}
              onClick={() => {
                setLetterData(letter);
              }}
            >
              {letter.name}
            </Letter>
          ))}
        </LetterContainer>
      </AnimeResults>
    </PageTransitions>
  );
};

export default AZList;
