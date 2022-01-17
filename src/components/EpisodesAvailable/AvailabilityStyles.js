import styled from "styled-components";
import { breakpoints } from "../../helpers/Breakpoints";

export const WatchNowBtn = styled.button`
  padding: 0.625rem;
  border-radius: 5px;
  align-self: flex-end;
  background: ${(props) => props.theme.primaryColor};
  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorSecondary};
  transition: 0.3s ease;

  &:hover {
    background: transparent;
  }

  ${breakpoints("padding", "rem", [{ 800: 0.5 }, { 600: 0.45 }])};
`;

export const DisplayAvailability = styled.div`
  width: 100%;
  display: ${(props) => props.display};
`;
