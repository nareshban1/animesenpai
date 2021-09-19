import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const SearchBarContainer = styled.div`
    margin-left: auto;

`;

const SearchForm = styled.form``;

const SearchInput = styled.input``;

const SearchButton = styled.button``;

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
        <SearchButton type="submit" disabled={searchQuery === ""}>Search</SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
}

export default SearchBar;
