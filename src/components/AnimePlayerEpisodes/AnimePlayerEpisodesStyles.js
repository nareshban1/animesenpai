import styled from "styled-components";
import { breakpoints } from "../../helpers/Breakpoints";
import Link from "next/link";

export const DisplayAvailability = styled.div`
  width: 100%;
  display: ${(props) => props.display};
`;
