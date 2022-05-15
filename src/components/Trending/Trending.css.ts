import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { breakpoints } from "../../helpers/Breakpoints";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  transition: 0.5s ease;
  margin-bottom: 20px;
`;

export const MainCarousel = styled(Carousel)`
  width: auto;
  transition: 0.5s ease;
`;

export const CarouselAnimeCard = styled.div`
  border-radius: 5px;
  height: 25.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  transition: 0.5s ease;
  ${breakpoints("height", "rem", [{ 800: 23 }, { 600: 19 }, { 580: 15 }])};
  position: relative;
`;

export const CarouselAnimeImageContainer = styled.div`
  height: 20rem;
  width: 100%;
  transition: 0.5s ease;
  ${breakpoints("height", "rem", [{ 800: 17.5 }, { 600: 14 }, { 580: 10.6 }])};
`;
export const CarouselAnimeImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const CarouselAnimeDetails = styled.a`
  width: 100%;
  height: 5.5rem;
  color: white;
  transition: 0.5s ease;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  padding: 10px;
  gap: 15px;
`;

export const AnimeTitleSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  transition: 0.5s ease;
  width: 80%;
  height: 100%;
`;
export const AnimeTitleContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  text-align: left;
`;

export const CarouselViewMore = styled.a`
  width: 20%;
  padding: 0.625rem;
  border-radius: 5px;
  align-self: flex-end;
  background: ${(props) => props.theme.secondaryBackground};
  border: 1px solid ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.textColorPrimary};

  &:hover {
    background: transparent;
  }

  ${breakpoints("padding", "rem", [{ 800: 0.5 }, { 600: 0.45 }])};
  @media (max-width: 590px) {
    display: none;
  }
`;

export const SummaryContainer = styled.div`
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.color};

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Summary = styled(Markdown)``;

export const TitleH3 = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.5s all ease;
  color: ${(props) => props.color};
  ${breakpoints("font-size", "rem", [
    { 800: 1.5 },
    { 600: 1.3 },
    { 580: 1.1 },
  ])};
`;
