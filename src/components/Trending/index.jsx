import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Button, Small } from "../Styled/Commons";
import { useGetTrendingAnimeQuery } from "../../redux/Query/apiEndpoints";
import {
  AnimeTitleContainer,
  AnimeTitleSummaryContainer,
  CarouselAnimeCard,
  CarouselAnimeDetails,
  CarouselAnimeImage,
  CarouselAnimeImageContainer,
  CarouselContainer,
  CarouselViewMore,
  MainCarousel,
  Summary,
  SummaryContainer,
  TitleH3,
} from "./Trending.css";
import Link from "next/link";

export const Trending = () => {
  const { data, error, isLoading } = useGetTrendingAnimeQuery();

  return (
    <CarouselContainer>
      <MainCarousel
        autoPlay
        infiniteLoop
        dynamicHeight={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        swipeable
      >
        {data?.data?.documents?.slice(0, 10).map((data, index) => (
          <CarouselAnimeCard key={index}>
            <CarouselAnimeImageContainer>
              <CarouselAnimeImage
                src={data.banner_image || data.cover_image}
                alt={data.titles?.en || data.titles?.rj}
              />
            </CarouselAnimeImageContainer>
            <Link passHref href={`/animeinfo/${data.mal_id}`}>
              <CarouselAnimeDetails>
                <AnimeTitleSummaryContainer>
                  <AnimeTitleContainer>
                    <TitleH3>
                      {data.titles?.en?.substring(0, 65) ||
                        data.titles?.rj?.substring(0, 65)}
                    </TitleH3>
                  </AnimeTitleContainer>
                  <SummaryContainer>
                    <Summary children={data.descriptions?.en} />
                  </SummaryContainer>
                </AnimeTitleSummaryContainer>
                <CarouselViewMore passHref href={`/animeinfo/${data.mal_id}`}>
                  <Button> More Details</Button>{" "}
                </CarouselViewMore>
              </CarouselAnimeDetails>
            </Link>
          </CarouselAnimeCard>
        ))}
      </MainCarousel>
    </CarouselContainer>
  );
};
