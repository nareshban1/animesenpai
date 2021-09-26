import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa"


const SearchBarContainer = styled.div`
    margin-left: auto;
    font-family: "Poppins", sans-serif;
`;

const SearchForm = styled.form`
    height: 40px;
    overflow: hidden;
    border-radius:20px;
    box-sizing:border-box;
    display: flex;
    width: 300px;
    background-color:  ${(props) => props.theme.mainBackground} ;
`;

const SearchInput = styled.input`
  height: 100%;
  width:100%;
  border:none;
  padding: 0px 10px;
  outline:none;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
`;

const SearchButton = styled.button`
  height: 100%;
  width: 40px;
  border:none;
  transition: 0.3s all ease;
  background-color: transparent;
  display: grid;
  place-items: center;

  &:disabled{
    background-color: none;
  }

  &:hover{
    color: ${(props) => props.theme.primaryColor}
  }

`;

const SearchIcon = styled(FaSearch)`
    font-size: 1rem;

`;

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const history= useHistory();


  const handleSearch = (e) =>{
      e.preventDefault();
      console.log(searchQuery);
      history.push(`/searchResults/${searchQuery}`);

  }
  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Enter anime name"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <SearchButton type="submit" disabled={searchQuery === ""}><SearchIcon/></SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
}

export default SearchBar;
