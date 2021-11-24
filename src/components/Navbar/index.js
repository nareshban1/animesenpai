import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import { Body, Container, Small } from "../Styled/Commons";
import { RiMenuFoldLine as MenuIcon } from "react-icons/ri";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from 'body-scroll-lock';
import { genres } from "../../data/genreList";
import { nextPage, prevPage, toPage } from "../../redux/Slices/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { fetchrandomAnime } from '../../redux/Slices/Random';
const NavBarContainer = styled.div`
  width: 100%;
  height: 85px;
  z-index: 10;
  transition: 0.5s ease all;
  position: relative;


  @media (max-width: 500px) {
    width: 100vw;
  }
  
  
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
  color: ${(props) => props.theme.primaryColor};
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
  display:flex;

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
  color: ${(props) => props.theme.primaryColor};
`;

const Links = styled(Link)`
  margin-left: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.primaryColor};
  transition: 0.3s ease all;

  :hover {
    letter-spacing: 3px;
  }
`;



export const Genre = styled(Link)`
   color:${(props) => props.theme.textColorSecondary};
   padding:5px;
   border-radius:5px;
   :hover {
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.mainBackground};
      }
`

export const DropdownMenu = styled.div`
     display:none;
     position:absolute;
     width:500px;
     background-color: ${(props) => props.theme.secondaryBackground};
     padding:15px;
     right:0;
     border-radius:5px;
     border:1px solid ${(props) => props.theme.textColorSecondary};
     grid-template-columns: repeat(auto-fill, minmax(125px,1fr));
`;

export const Dropdown = styled.div`
      position:relative;
      margin-left: 20px;
      font-size: 1.1rem;
      font-weight: 600;
      color: ${(props) => props.theme.primaryColor};
      transition: 0.3s ease all;
      cursor:pointer;

 
     :hover {
      letter-spacing: 3px;
        ${DropdownMenu}{
          display:grid;
          letter-spacing: 0;
        }
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

  ${Dropdown}{
    padding: 10px 0;
    color:white;
    text-align:right;
  }

  ${DropdownMenu}{
      min-width:300px;  
      max-width:450px; 
      text-align:left;
      right:0;
    }
  

  @media (max-width: 915px) {
    display: flex;

    ${({ show }) => show ? `
    right:0;
  `: `right:-150%;
        `}
  }

  

  
`;

export const SearchBarContainer = styled.div`
width: 380px;
margin-left: 20px;
@media(max-width: 915px) {
  display: none;
}
`;

function NavBar() {

  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch()
  {
    showMenu ? disableBodyScroll(document) : enableBodyScroll(document);
  }

  const menuFunc = () => {
    setShowMenu(!showMenu)
  }

  const genreClick = () => {
    dispatch(toPage(1));

  }

  const changeRandom = () => {
    dispatch(fetchrandomAnime());
  }
  return (
    <NavBarContainer>
      <Container>
        <NavBarContents>
          <LogoLink to="/">
            <AppLogo>AnimeSenpai</AppLogo>
          </LogoLink>
          <MobileNavLinks onClick={menuFunc} >
            <Menu></Menu>
          </MobileNavLinks>
          <SearchBarContainer>
            <SearchBar />
          </SearchBarContainer>
          <NavLinks>
            <Links to="/">Home</Links>
            <Dropdown>Genres
              <DropdownMenu>
                {genres.map((genre, index) => (
                  <Genre key={index} onClick={genreClick} to={`animelist/${genre.name}/${genre.id}`}>
                    <Small>{genre.name}</Small>
                  </Genre>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Links onClick={changeRandom} to="/randomlist">Random</Links>
          </NavLinks>
        </NavBarContents>
      </Container>

      <MenuBar show={showMenu}>
        <SearchBar />
        <Links to="/" onClick={menuFunc}>Home</Links>
        <Dropdown>Genres
          <DropdownMenu>
            {genres.map((genre, index) => (
              <Genre key={index} onClick={() => { genreClick(); menuFunc() }} to={`animelist/${genre.name}/${genre.id}`} >
                <Small>{genre.name}</Small>
              </Genre>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Links onClick={changeRandom} to="/randomlist" onClick={menuFunc}>Random</Links>
      </MenuBar>

    </NavBarContainer>
  );
}

export default NavBar;
