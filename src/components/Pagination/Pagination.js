import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nextPage, prevPage, toPage } from "../../redux/Slices/pagination";
import { PaginationContainer, PageButton, PageNumber } from "./PaginationStyles";



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
      {animeEpisodes?.data &&
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
      }
    </>
  );
}

export default Pagination;
