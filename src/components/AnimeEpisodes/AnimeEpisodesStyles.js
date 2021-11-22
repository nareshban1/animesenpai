import styled from "styled-components";
import { breakpoints } from "../../helpers/Breakpoints";
import { Link } from "react-router-dom";

export const EpisodeCard = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  transition: 0.3s ease;
  cursor: pointer;

  background-color: ${(props) =>
        props.active ? props.theme.primaryColor : "#404040"};
  color: ${(props) =>
        props.active
            ? props.theme.textColorPrimary
            : props.theme.textColorSecondary};

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorPrimary};
  }
`;
export const EpisodesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 10px;
`;
