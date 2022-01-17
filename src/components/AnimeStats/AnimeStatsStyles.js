import styled from "styled-components";
import { breakpoints } from "../../helpers/Breakpoints";
import { Bar } from "react-chartjs-2";

export const StatCard = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  padding: 10px;
  border-radius: 5px;
`;

export const StatCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 10px 0;

  ${breakpoints("grid-template-columns", "", [
    { 480: "repeat(2,1fr)" },
    { 375: "repeat(1,1fr)" },
  ])};
`;
export const ScoreContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.mainBackground};
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const StatsData = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const StatsBar = styled(Bar)`
  margin-top: 10px;
`;
