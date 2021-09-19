import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../SearchBar";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
`;

const AppLogo = styled.h1`
  color: ${(props) => props.theme.mainBackground};
`;

const NavLinks = styled.ul`
  margin-left: auto;
`;

const LogoLink = styled(Link)`
  color: ${(props) => props.theme.mainBackground};
`;

const Links = styled(Link)`
  margin-left: 10px;
  color: ${(props) => props.theme.mainBackground};
`;

function NavBar() {
  return (
    <NavBarContainer>
      <LogoLink to="/">
        <AppLogo>AnimeSenpai</AppLogo>
      </LogoLink>
      <NavLinks>
        <Links to="/">Home</Links>
        <Links to="/">Genres</Links>
        <Links to="/">Types</Links>
      </NavLinks>
      <SearchBar />
    </NavBarContainer>
  );
}

export default NavBar;
