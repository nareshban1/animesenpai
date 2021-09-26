import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import { Container } from "../Styled/Commons";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${(props) => (props.scrollNav? props.theme.primaryColor :"transparent")};
  position: fixed;
  top:0;
  z-index: 10;
  transition: 0.5s ease all;
`;

const NavBarContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const AppLogo = styled.h1`
  color: ${(props) => props.theme.mainBackground};
  font-family: "Poppins", sans-serif;
  font-weight: 800;
`;

const NavLinks = styled.ul`
  font-family: "Poppins", sans-serif;
`;

const LogoLink = styled(Link)`
  color: ${(props) => props.theme.mainBackground};
`;

const Links = styled(Link)`
  margin-left: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.mainBackground};
  transition: 0.3s ease all;

  :hover{
    letter-spacing: 3px;
  }
`;

function NavBar() {
  const[scrollNav,setScrollNav]=useState(false);

  const changeNav=()=>{
    if(window.scrollY >= 60){
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
      
    }
  }
  

  useEffect(() => {
    window.addEventListener('scroll',changeNav);
    return () => {
      window.removeEventListener('scroll',changeNav);
    }
  }, [])

  return (
    <NavBarContainer scrollNav={scrollNav}>
      <Container>
        <NavBarContents>
        <LogoLink to="/">
          <AppLogo>AnimeSenpai</AppLogo>
        </LogoLink>
        <SearchBar />
        <NavLinks>
          <Links to="/">Home</Links>
          <Links to="/">Genres</Links>
          <Links to="/">Types</Links>
        </NavLinks>
        
        </NavBarContents>
      </Container>
    </NavBarContainer>
  );
}

export default NavBar;
