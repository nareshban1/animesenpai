import React from "react";
import styled from "styled-components";
import { AppLogo, LogoLink } from "../Navbar";
import { Body, Container, Subtitle } from "../Styled/Commons";

const FooterContainer = styled.div`
  margin-top: 20px;
  height: 250px;
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.textColorSecondary};
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const FooterDescription = styled.p`
  color: ${(props) => props.theme.textColorSecondary};
  font-size: 1.2rem;
`;

const FooterLinksContainer = styled.div`
  display: flex;
`;
const FooterLinks = styled.ul``;
const FooterLink = styled.li`
  cursor: pointer;
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
          <Body>Inspired from 9anime.to.</Body>
        </FooterContentContainer>
        {/* <FooterLinksContainer>
          <FooterLinks>
          Links
            <FooterLink>
              Upcoming
            </FooterLink>
            <FooterLink>
              Most Watched
            </FooterLink>
          </FooterLinks>
        </FooterLinksContainer> */}
      </Container>
    </FooterContainer>
  );
};

export default Footer;
