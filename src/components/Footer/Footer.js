import React from "react";
import styled from "styled-components";
import { AppLogo, LogoLink } from "../Navbar";
import { Container } from "../Styled/Commons";

const FooterContainer = styled.div`
  height: 250px;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorSecondary};
  

`;
const FooterDescription = styled.p`
  color: ${(props) => props.theme.textColorSecondary};
  font-size: 1.2rem;
`;
const FooterContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContentContainer>
        <LogoLink to="/">
          <AppLogo>AnimeSenpai</AppLogo>
        </LogoLink>
          <FooterDescription>
            This app was created using ANIAPI and JIKAN API(Unofficial
            MyAnimeList API).
          </FooterDescription>
        </FooterContentContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
