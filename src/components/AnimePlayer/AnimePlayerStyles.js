import styled from "styled-components";
import { breakpoints } from "../../helpers/Breakpoints"
import { Link } from "react-router-dom";

export const DisplayAvailability = styled.div`
    width:100%;
    display: ${(props) => props.display};
`;