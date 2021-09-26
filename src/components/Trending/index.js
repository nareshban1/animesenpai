import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchANITrending } from "../../redux/Slices/trending";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container } from "../Styled/Commons";
import { format } from "date-fns";

export const AnimeGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const CarouselContainer = styled.div`
  height: 80vh;
  width: 100%;
`;

const MainCarousel = styled(Carousel)`
  width: 100%;
`;

const MainCarouselBackground = styled.div`
  height: 80vh;
  width: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
`;

const CarouselAnimeContainer = styled.div`
  height: 100%;
  padding: 80px 0;
`;

const CarouselAnimeCard = styled.div`
  height: 100%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.mainBackground};
  overflow: hidden;
  position: relative;
`;

const CarouselAnimeImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const CarouselAnimeImage = styled.img`
  height: 100%;
  width: 100%;
`;
const CarouselAnimeDetails = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #000000a5;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnimeTitleScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const AnimeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
const AnimeTitle = styled.h1`
  font-size: 4rem;
  font-family: "Poppins", "sans-serif";
  color: white;
`;

const AnimeYear = styled.h1`
  font-size: 1.5rem;
  font-family: "Poppins", "sans-serif";
  color: white;
`;

const AnimeScore = styled.h1`
  font-size: 1.5rem;
  font-family: "Poppins", "sans-serif";
  color: white;
  box-sizing: border-box;
  padding: 5px 20px;
  border-radius: 25px;
  background: ${(props) => props.theme.primaryColor};
  margin-left: 20px;
`;

const CarouselViewMore = styled.button`
  padding: 20px;
  border-radius: 15px;
  height: 100%;
  font-size: 2rem;
  background: ${(props) => props.theme.primaryColor};
  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorSecondary};
  transition: 0ms.5s all ease;
  transition: 0.5s all ease;

  &:hover {
    background: transparent;
  }
`;

export const Trending = () => {
  const trendingAnime = useSelector((state) => state.trending.data);
  console.log(trendingAnime);
  const dispatch = useDispatch();
  const trending = trendingAnime?.data?.documents?.slice(0, 10);

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
        >
          {trending?.map((data, index) => (
            <MainCarouselBackground
              image={data.banner_image || data.cover_image}
            >
              <Container>
                <CarouselAnimeContainer>
                  |
                  <CarouselAnimeCard>
                    <CarouselAnimeImageContainer>
                      <CarouselAnimeImage
                        src={data.banner_image || data.cover_image}
                        alt=""
                      />
                    </CarouselAnimeImageContainer>
                    <CarouselAnimeDetails>
                      <AnimeTitleScoreContainer>
                        <AnimeTitleContainer>
                          <AnimeTitle>{data.titles?.en} </AnimeTitle>
                          <AnimeScore>Score: {data.score}</AnimeScore>
                          <AnimeScore>Trending</AnimeScore>
                        </AnimeTitleContainer>
                        <AnimeYear>
                          Start Year:{" "}
                          {format(new Date(data.start_date), "yyyy")}
                        </AnimeYear>
                      </AnimeTitleScoreContainer>
                      <CarouselViewMore>More Details</CarouselViewMore>
                    </CarouselAnimeDetails>
                  </CarouselAnimeCard>
                </CarouselAnimeContainer>
              </Container>
            </MainCarouselBackground>
          ))}
        </MainCarousel>
      )}
    </CarouselContainer>
  );
};
