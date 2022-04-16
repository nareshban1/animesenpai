import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nextPage, prevPage, toPage } from "../../redux/Slices/pagination";
import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "./PaginationStyles";
const JikanPagination = ({ paginationData }) => {
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
  const EpisodesLastPage = () => {
    dispatch(toPage(paginationData?.last_visible_page));
  };

  console.log(paginationData);
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
        {paginationData?.has_next_page && (
          <>
            <PageButton onClick={EpisodesNextPage}>Next</PageButton>
          </>
        )}
        {paginationData?.last_visible_page && paginationData?.has_next_page && (
          <>
            <PageButton onClick={EpisodesLastPage}>Last</PageButton>
          </>
        )}
      </PaginationContainer>
    </>
  );
};

export default JikanPagination;
