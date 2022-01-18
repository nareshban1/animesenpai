import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { toPage } from "../../redux/Slices/pagination";
import { useDispatch, useSelector } from "react-redux";
import { filterAnime } from "../../redux/Slices/FilterAnime";
import { Router, useRouter } from "next/router";

const SearchBarContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin-left: 20px;
`;

const SearchForm = styled.form`
  height: 50px;
  overflow: hidden;
  border-radius: 25px;
  box-sizing: border-box;
  display: flex;
  width: 100%auto;
  background-color: ${(props) => props.theme.secondaryBackground};
`;

const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding: 0px 20px;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.textColorSecondary};
  font-family: "Poppins", sans-serif;
`;

const SearchButton = styled.button`
  height: 100%;
  width: 50px;
  border: none;
  transition: 0.3s all ease;
  background-color: transparent;
  display: grid;
  place-items: center;

  &:disabled {
    background-color: none;
  }

  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

const SearchIcon = styled(FaSearch)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.primaryColor};
`;

function SearchBar({ onClick }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(filterAnime(searchQuery, "", "", "", "", "", "", 1));
    router.push(`/searchResults/${searchQuery}`, { shallow: true });
    setSearchQuery("");
  };
  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchInput
        type="text"
        placeholder="Enter anime name"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <SearchButton
        type="submit"
        disabled={searchQuery === ""}
        onClick={onClick}
      >
        <SearchIcon />
      </SearchButton>
    </SearchForm>
  );
}

export default SearchBar;
