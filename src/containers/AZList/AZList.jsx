import { useEffect, useState } from "react";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { useDispatch, useSelector } from "react-redux";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import ScrollToTopOnPageChange from "../../helpers/ScrollToTopOnPageChange";
import { LetterContainer, Letter } from "../../components/Footer/FooterStyles";
import { toPage } from "../../redux/Slices/pagination";
import { letters } from "../../data/letters";
import { useGetAnimeByLetterQuery } from "../../redux/Query/apiEndpoints";
const AZList = () => {
  const page = useSelector((state) => state.pageNumber.pageNo);
  const [letterData, setLetterData] = useState({ letter: "", name: "All" });
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetAnimeByLetterQuery({
    letter: letterData.letter,
    page: page,
  });

  useEffect(() => {
    dispatch(toPage(1));
  }, [dispatch, letterData]);

  return (
    <PageTransitions>
      <ScrollToTopOnPageChange page={page} />
      <AnimeResults
        loading={isFetching}
        error={error}
        animeData={data?.data}
        title={letterData.name + " Anime"}
        pagination={true}
        paginationData={data?.pagination}
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
