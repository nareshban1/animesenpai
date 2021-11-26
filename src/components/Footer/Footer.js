import React from "react";
import { letters } from "../../data/letters";
import { AppLogo, LogoLink } from "../Navbar";
import { Body, Container } from "../Styled/Commons";
import { FooterContainer, FooterContentContainer, FooterDescription, LetterContainer, Letters } from "./FooterStyles";
import { useDispatch } from 'react-redux';
import { toPage } from "../../redux/Slices/pagination";
const Footer = () => {
  const dispatch = useDispatch();

  const btnClick = () => {
    dispatch(toPage(1));

  }
  return (
    <FooterContainer>
      <Container>
        <FooterContentContainer>
          <LetterContainer>
            {letters.map((letter, index) => (
              <Letters to={`/a-zlist/${letter.name}`} state={letter.letter} key={index} onClick={btnClick}>
                {letter.name}
              </Letters>
            ))}

          </LetterContainer>
          <LogoLink to="/">
            <AppLogo>AnimeSenpai</AppLogo>
          </LogoLink>
          <Body>
            This app was created using ANIAPI and JIKAN API(Unofficial
            MyAnimeList API).
          </Body>
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
