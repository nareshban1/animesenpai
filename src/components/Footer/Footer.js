import React from "react";
import styled from "styled-components";
import { AppLogo, LogoLink } from "../Navbar";
import { Container } from "../Styled/Commons";

const FooterContainer = styled.div`
  height: 250px;
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.textColorSecondary};
  

`;

const FooterContentContainer = styled.div`
  
  
`;

const FooterDescription = styled.p`
  color: ${(props) => props.theme.textColorSecondary};
  font-size: 1.2rem;
`;

const FooterLinksContainer = styled.div`
  display: flex;
`
const FooterLinks = styled.ul`
  
`
const FooterLink = styled.li`
cursor: pointer;
`

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
        <FooterLinksContainer>
          
          <FooterLinks>
          Links
            <FooterLink>
              Upcoming
            </FooterLink>
            <FooterLink>
              Most Watched
            </FooterLink>
          </FooterLinks>
        </FooterLinksContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
