import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nextPage, prevPage, toPage } from "../../redux/Slices/pagination";

const PageButton = styled.div`
  height: 30px;
  padding:5px 10px;
  cursor: pointer;
  border-radius: 2px;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:10px;
  background-color: ${(props) =>
    props.active ? props.theme.primaryColor : "#404040"};
  color: ${(props) =>
    props.active
      ? props.theme.textColorPrimary
      : props.theme.textColorSecondary};

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorPrimary};
  }


`;

const PaginationContainer = styled.div`
  display: flex;
  margin:10px 0;
  justify-content: flex-end;
  align-items: center;
  
`;
const PageNumber = styled.p`
  color: ${(props) => props.theme.primaryColor};
  margin-right:10px;
`;

function Pagination() {
  const page = useSelector((state) => state.pageNumber.pageNo);
  const animeEpisodes = useSelector((state) => state.animeEpisodes.data);
  const dispatch = useDispatch();


  const EpisodesNextPage = () => {
    if (page <= animeEpisodes?.data?.last_page) {
      console.log(page)
      dispatch(nextPage());
    }
  };

  const EpisodesPrevPage = () => {
    if (page > 1) {
      console.log(page)
      dispatch(prevPage());
    }
  };

  const EpisodesLastPage = () => {
    dispatch(toPage(animeEpisodes?.data?.last_page));
  };

  const EpisodesFirstPage = () => {
    dispatch(toPage(1));
  };

  return (
    <>
      {animeEpisodes?.data?.last_page !== 1 && (
        <PaginationContainer>
          {page !== 1 && (
            <>
              <PageButton onClick={EpisodesFirstPage}>First</PageButton>
              <PageButton onClick={EpisodesPrevPage}>Prev</PageButton>
            </>
          )}
          <PageNumber>{page}</PageNumber>
          {page !== animeEpisodes?.data?.last_page && (
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
