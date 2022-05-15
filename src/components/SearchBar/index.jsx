import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

const SearchForm = styled.form`
  height: 50px;
  overflow: hidden;
  border-radius: 25px;
  box-sizing: border-box;
  display: flex;
  width: 100% auto;
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
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/searchResults/${searchQuery}`);
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
