import {
  AnimeListContainer,
  ListContainer,
  Subtitle,
  Small,
} from "../Styled/Commons";
import { SpinnerCircular } from "spinners-react";
import {
  StatCardContainer,
  StatCard,
  ScoreContainer,
  StatsData,
  StatsBar,
} from "./AnimeStatsStyles.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useGetAnimeStatsQuery } from "../../redux/Query/apiEndpoints";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AnimeStats() {
  let params = useParams();
  const animeID = params.id;
  const [skip, setSkip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSkip(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  const { data, error, isLoading } = useGetAnimeStatsQuery(animeID, { skip });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Anime Scores",
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Votes per Score",
          color: "#5EAA7A",
          font: {
            family: "Poppins",
            size: 16,
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Votes",
          color: "#5EAA7A",
          font: {
            family: "Poppins",
            size: 16,
          },
        },
      },
    },
  };

  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const scores = [];

  data?.data?.scores &&
    Object.values(data?.data?.scores).forEach((val) => scores.push(val.votes));

  const statdata = {
    labels,
    datasets: [
      {
        label: "Votes",
        data: scores,
        backgroundColor: "#5EAA7A",
      },
    ],
  };

  return (
    <AnimeListContainer>
      <ListContainer>
        <Subtitle color="white">Anime Stats</Subtitle>
        {isLoading ? (
          <SpinnerCircular />
        ) : (
          <StatsData>
            <StatCardContainer>
              <StatCard>
                <Small color={"#5EAA7A"}>WATCHING</Small>
                <Subtitle color={"white"}>
                  {DataTransferItem?.data?.watching}
                </Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>COMPLETED</Small>
                <Subtitle color={"white"}>{data?.data?.completed}</Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>ON HOLD</Small>
                <Subtitle color={"white"}>{data?.data?.on_hold}</Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>DROPPED</Small>
                <Subtitle color={"white"}>{data?.data?.dropped}</Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>PLAN TO WATCH</Small>
                <Subtitle color={"white"}>{data?.data?.plan_to_watch}</Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>TOTAL</Small>
                <Subtitle color={"white"}>{data?.data?.total}</Subtitle>
              </StatCard>
            </StatCardContainer>
            <ScoreContainer>
              <Small color={"#5EAA7A"}>SCORE DISTRIBUTION</Small>
              <StatsBar options={options} data={statdata} />;
            </ScoreContainer>
          </StatsData>
        )}
      </ListContainer>
    </AnimeListContainer>
  );
}

export default AnimeStats;
