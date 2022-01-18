import { useEffect, useState } from "react";
import { letters } from "../../data/letters";
import { AppLogo, LogoLink } from "../Navbar";
import { Body, Container } from "../Styled/Commons";
import { useDispatch, useSelector } from "react-redux";
import {
  FooterContainer,
  FooterContentContainer,
  FooterDescription,
  LetterContainer,
  Letters,
} from "./FooterStyles";
import { toPage } from "../../redux/Slices/pagination";
import Link from "next/link";
import { fetchAnimebyLetter } from "../../redux/Slices/ByLetter";

const Footer = () => {
    const page = useSelector((state) => state.pageNumber.pageNo);
    const [letterData, setLetterData] = useState({ letter: "", name: "All" });
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(toPage(1));
  }, [dispatch, letterData]);

  useEffect(() => {
    dispatch(fetchAnimebyLetter(letterData.letter, page));
  }, [dispatch, letterData, page]);
  return (
    <FooterContainer>
      <Container>
        <FooterContentContainer>
          <LetterContainer>
            {letters.map((letter, index) => (
              <Link passHref href={`/a-zlist/${letter.name}`}>
                <Letters
                  state={letter.letter}
                  key={index}
                  onClick={() => {
                    setLetterData(letter);
                  }}
                >
                  {letter.name}
                </Letters>
              </Link>
            ))}
          </LetterContainer>
          <Link href="/" passHref>
            <LogoLink>
              <AppLogo>Animesenpai</AppLogo>
            </LogoLink>
          </Link>
          <Body>
            This app was created using ANIAPI and JIKAN API(Unofficial
            MyAnimeList API).
          </Body>
          <Body>Inspired from 9anime.to.</Body>
        </FooterContentContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
