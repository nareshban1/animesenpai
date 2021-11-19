import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import { Container } from "../Styled/Commons";
import { RiMenuFoldLine as MenuIcon } from "react-icons/ri";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 10;
  transition: 0.5s ease all;
  position: relative;
  
`;

const NavBarContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

export const AppLogo = styled.h2`
  color: ${(props) => props.theme.textColorPrimary};
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 800;

  @media (max-width: 425px) {
    font-size: 32px;
  }
`;

const NavLinks = styled.ul`
  font-family: "Poppins", sans-serif;
  margin-left: auto;

  @media (max-width: 915px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  height: 100%;
  display: none;
  margin-left: auto;

  color: ${(props) => props.theme.textColorPrimary};
  @media (max-width: 915px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Menu = styled(MenuIcon)`
  font-size: 40px;
  color: ${(props) => props.theme.primaryColor};

  @media (max-width: 425px) {
    font-size: 32px;
  }
`;

export const LogoLink = styled(Link)`
  color: ${(props) => props.theme.textColorPrimary};
`;

const Links = styled(Link)`
  margin-left: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.textColorPrimary};
  transition: 0.3s ease all;

  :hover {
    letter-spacing: 3px;
  }
`;

const MenuBar = styled.div`
  display: none;
  box-sizing:border-box;
  flex-direction: column;
  width: auto;
  width:100vw;
  background-color: ${(props) => props.theme.dimBackground};
  height: calc(100vh - 80px);
  position: fixed;
  align-items: flex-end;
  padding: 10px;
  transition: 500ms;

  

  ${Links}{
    padding: 10px 0;
    color:white;
  }

  @media (max-width: 915px) {
    display: flex;

    ${({ show }) => show? `
    right:0;
  `:`right:-100%;
        `}
  }

  

  
`;


export const SearchBarContainer = styled.div`
    width: 380px;
    margin-left:20px;
    @media (max-width: 915px) {
        display: none;
    }
`;

function NavBar() {

  const [showMenu,setShowMenu]=useState(false);


 
  useEffect(() => {


  }, []);
  {
    showMenu ? disableBodyScroll(document) : enableBodyScroll(document);
  }
  return (
    <NavBarContainer>
      <Container>
        <NavBarContents>
          <LogoLink to="/">
            <AppLogo>AnimeSenpai</AppLogo>
          </LogoLink>
          <MobileNavLinks onClick={()=>{
            setShowMenu(!showMenu)
          }}>
            <Menu></Menu>
          </MobileNavLinks>
          <SearchBarContainer>
          <SearchBar />
          </SearchBarContainer>
          <NavLinks>
            <Links to="/">Home</Links>
            <Links to="/">Genres</Links>
            <Links to="/">Types</Links>
          </NavLinks>
        </NavBarContents>
      </Container>
     
      <MenuBar show={showMenu}>
        <SearchBar />
        <Links to="/">Home</Links>
        <Links to="/">Genres</Links>
        <Links to="/">Types</Links>
      </MenuBar>
      
    </NavBarContainer>
  );
}

export default NavBar;
