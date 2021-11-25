import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AnimeListContainer,
  ListContainer,
  Subtitle,
  InfoContainer,
  Pre,
  Small,
  Body,
} from "../Styled/Commons";
import { SpinnerCircular } from "spinners-react";
import { StatCardContainer, StatCard, ScoreContainer, StatsData, StatsBar } from "./AnimeStatsStyles.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




function AnimeStats() {
  const jikanStats = useSelector((state) => state.jikanstats);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Anime Scores',
      },
    },

  };

  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  const scores = [];
  {
    jikanStats?.data?.scores &&
      Object.values(jikanStats?.data?.scores).forEach(val => scores.push(val.percentage))
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Percentage',
        data: scores,
        backgroundColor: '#5EAA7A',
      },
    ],
  };

  console.log(scores)

  return (
    <AnimeListContainer>
      <ListContainer>
        <Subtitle color="white">Anime Stats</Subtitle>
        {jikanStats?.loading ? (
          <SpinnerCircular />
        ) : (
          <StatsData>
            <StatCardContainer>
              <StatCard>
                <Small color={"#5EAA7A"}>WATCHING</Small>
                <Subtitle color={"white"}>
                  {jikanStats?.data?.watching}
                </Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>COMPLETED</Small>
                <Subtitle color={"white"}>
                  {jikanStats?.data?.completed}
                </Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>ON HOLD</Small>
                <Subtitle color={"white"}>
                  {jikanStats?.data?.on_hold}
                </Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>DROPPED</Small>
                <Subtitle color={"white"}>{jikanStats?.data?.dropped}</Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>PLAN TO WATCH</Small>
                <Subtitle color={"white"}>
                  {jikanStats?.data?.plan_to_watch}
                </Subtitle>
              </StatCard>
              <StatCard>
                <Small color={"#5EAA7A"}>TOTAL</Small>
                <Subtitle color={"white"}>{jikanStats?.data?.total}</Subtitle>
              </StatCard>
            </StatCardContainer>
            <ScoreContainer>
              <Small color={"#5EAA7A"}>SCORES</Small>
              <StatsBar options={options} data={data} />;
            </ScoreContainer>
          </StatsData>
        )}
      </ListContainer>
    </AnimeListContainer>
  );
}

export default AnimeStats;
