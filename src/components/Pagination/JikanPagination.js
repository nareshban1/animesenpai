import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nextPage, prevPage, toPage } from "../../redux/Slices/pagination";
import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "./PaginationStyles";
const JikanPagination = ({ onError }) => {
  const page = useSelector((state) => state.pageNumber.pageNo);
  const dispatch = useDispatch();

  const EpisodesNextPage = () => {
    dispatch(nextPage());
  };

  const EpisodesPrevPage = () => {
    if (page > 1) {
      dispatch(prevPage());
    }
  };

  const EpisodesFirstPage = () => {
    dispatch(toPage(1));
  };

  return (
    <>
      <PaginationContainer>
        {page !== 1 && (
          <>
            <PageButton onClick={EpisodesFirstPage}>First</PageButton>
            <PageButton onClick={EpisodesPrevPage}>Prev</PageButton>
          </>
        )}
        <PageNumber>{page}</PageNumber>
        {onError?.length === 0 && (
          <>
            <PageButton onClick={EpisodesNextPage}>Next</PageButton>
          </>
        )}
      </PaginationContainer>
    </>
  );
};

export default JikanPagination;
