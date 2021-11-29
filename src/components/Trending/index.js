import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchANITrending } from "../../redux/Slices/trending";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Button, Small, TitleH3 } from "../Styled/Commons";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { breakpoints } from "../../helpers/Breakpoints"


const CarouselContainer = styled.div`
  width: 100%;
  transition:0.5s ease;
  margin-bottom:20px;
`;

const MainCarousel = styled(Carousel)`
  width: auto;
  transition:0.5s ease;

`;

const CarouselAnimeCard = styled.div`
  border-radius: 5px;
  height:25.5rem;
  width:100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryColor};
  transition:0.5s ease;
  ${breakpoints("height", "rem", [
  { 800: 23 },
  { 600: 19 },
  { 580: 15 }
])};
  
`;

const CarouselAnimeImageContainer = styled.div`
  height: 20.3rem;
  width: 100%;
  transition:0.5s ease;
  ${breakpoints("height", "rem", [
  { 800: 17.5 },
  { 600: 14 },
  { 580: 10.6 }
])};
`;
const CarouselAnimeImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const CarouselAnimeDetails = styled(Link)`
  width: 100%;
  height:6.25rem;
  color: white;
  padding: 10px 15px;
  transition:0.5s ease;
  ${breakpoints("height", "rem", [
  { 800: 5.5 },
  { 600: 5 },
  { 580: 4.4 }
])};
  display:grid;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 15px;
`;

const AnimeTitleSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  transition:0.5s ease;
  
  

  
`;
const AnimeTitleContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  text-align:left;

  
  
`;

const CarouselViewMore = styled(Link)`
  padding:0.625rem;
  border-radius: 5px;
  align-self: flex-end;
  background: ${(props) => props.theme.secondaryBackground};
  border: 1px solid ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.textColorPrimary};
 
  &:hover {
    background: transparent;
  }

  
  ${breakpoints("padding", "rem", [
  { 800: 0.5 },
  { 600: 0.45 },
])};
  @media (max-width: 590px) {
    display: none;
  }
`;

const Summary = styled(Markdown)`
    text-align: left;
    text-overflow:ellipsis;
    overflow:hidden;
    height:2.5rem;

    @media (max-width: 770px) {
    display: none;
  }
`;

export const Trending = () => {
  const trendingAnime = useSelector((state) => state.trending.data);
  const dispatch = useDispatch();



  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchANITrending());
    }

    return () => {
      mounted = false;
    }

  }, [dispatch]);



  return (
    <CarouselContainer>
      <MainCarousel
        autoPlay
        infiniteLoop
        dynamicHeight={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {trendingAnime?.data?.documents?.slice(0, 10).map((data, index) => (

          <CarouselAnimeCard key={index}>
            <CarouselAnimeImageContainer>
              <CarouselAnimeImage
                src={data.banner_image || data.cover_image}
                alt=""
              />
            </CarouselAnimeImageContainer>
            <CarouselAnimeDetails to={`/animeinfo/${data.mal_id}`}>
              <AnimeTitleSummaryContainer>
                <AnimeTitleContainer>
                  <TitleH3>{data.titles?.en}</TitleH3>
                </AnimeTitleContainer>
                <Small><Summary children={data.descriptions?.en} /></Small>
              </AnimeTitleSummaryContainer>
              <CarouselViewMore to={`/animeinfo/${data.mal_id}`}><Button> More Details</Button> </CarouselViewMore>
            </CarouselAnimeDetails>





          </CarouselAnimeCard>

        ))}
      </MainCarousel>
    </CarouselContainer>
  );
};
