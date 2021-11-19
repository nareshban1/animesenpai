import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchANITrending } from "../../redux/Slices/trending";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container, Small, Strong, Subtitle, TitleH3 } from "../Styled/Commons";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";



const CarouselContainer = styled.div`
  width: 100%;
  border-radius: 10px;
`;

const MainCarousel = styled(Carousel)`
  width: auto;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  z-index: -10;
`;

const CarouselAnimeCard = styled.div`
  border-radius: 10px;
  height:415px;
  width:100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryColor};
  @media (max-width: 580px) {
    height:315px;
  }
  
`;

const CarouselAnimeImageContainer = styled.div`
  height: 325px;
  width: 100%;
  @media (max-width: 580px) {
    height:250px;
  }
`;
const CarouselAnimeImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const CarouselAnimeDetails = styled(Link)`
  width: 100%;
  height:100px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  @media (max-width: 580px) {
    height:65px;
  }
`;

const AnimeTitleSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  overflow: hidden;
  @media (max-width: 925px) {
    width: 78%;
  }

  @media (max-width: 870px) {
    width: 76%;
  }

  @media (max-width: 770px) {
    width: 70%;
  }
  @media (max-width: 615px) {
    width: 68%;
  }

  @media (max-width: 580px) {
    width:100%;
  }
`;
const AnimeTitleContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align:left;

  
  
`;

const CarouselViewMore = styled(Link)`
  padding: 10px;
  border-radius: 10px;
  align-self: flex-end;
  background: ${(props) => props.theme.secondaryBackground};
  border: 1px solid ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.textColorSecondary};
  transition: 0.5s all ease;
  &:hover {
    background: transparent;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

const Summary = styled(Markdown)`
    text-align: left;

    @media (max-width: 770px) {
    display: none;
  }
`;

export const Trending = () => {
  const trendingAnime = useSelector((state) => state.trending.data);
  console.log(trendingAnime);
  const dispatch = useDispatch();
  const trending = trendingAnime?.data?.documents?.slice(0, 10);


  console.log(trending);
  useEffect(() => {
    dispatch(fetchANITrending());
  }, [dispatch]);

  return (
    <CarouselContainer>
      {trending && (
        <MainCarousel
          autoPlay
          infiniteLoop
          dynamicHeight={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          {trending?.map((data, index) => (
              
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
                        <Small><Summary children={data.descriptions?.en}/></Small>
                      </AnimeTitleSummaryContainer>
                      <CarouselViewMore to={`/animeinfo/${data.mal_id}`}><Subtitle> More Details</Subtitle> </CarouselViewMore>
                    </CarouselAnimeDetails>
                        
                        
                        
                     
                    
                  </CarouselAnimeCard>
                
          ))}
        </MainCarousel>
      )}
    </CarouselContainer>
  );
};
 {/* <CarouselViewMore to={`/animeinfo/${data.mal_id}`}> <Subtitle> More Details </Subtitle> </CarouselViewMore> */}