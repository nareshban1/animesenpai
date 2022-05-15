import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nextPage, prevPage, toPage } from "../../redux/Slices/pagination";
import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "./PaginationStyles";

function Pagination({ lastPage }) {
  const page = useSelector((state) => state.pageNumber.pageNo);
  const dispatch = useDispatch();

  const EpisodesNextPage = () => {
    if (page <= lastPage) {
      dispatch(nextPage());
    }
  };

  const EpisodesPrevPage = () => {
    if (page > 1) {
      dispatch(prevPage());
    }
  };

  const EpisodesLastPage = () => {
    dispatch(toPage(lastPage));
  };

  const EpisodesFirstPage = () => {
    dispatch(toPage(1));
  };

  return (
    <>
      {lastPage !== 1 && (
        <PaginationContainer>
          {page !== 1 && (
            <>
              <PageButton onClick={EpisodesFirstPage}>First</PageButton>
              <PageButton onClick={EpisodesPrevPage}>Prev</PageButton>
            </>
          )}
          <PageNumber>{page}</PageNumber>
          {page !== lastPage && (
            <>
              <PageButton onClick={EpisodesNextPage}>Next</PageButton>
              <PageButton onClick={EpisodesLastPage}>Last</PageButton>
            </>
          )}
        </PaginationContainer>
      )}
    </>
  );
}

export default Pagination;
