import styled from "styled-components";
import { breakpoints } from "../../helpers/Breakpoints"
import { Link } from "react-router-dom";


export const Container = styled.div`
    max-width: 1340px;
    height: 100%;
    padding: 0 10px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 1280px) {
      max-width: 965px;
    }
`
export const FlexContainer = styled.div`
  display:flex;
  justify-content: space-between;
  
  
  @media (max-width: 1280px) {
    flex-direction: column;
  }

`
export const LeftContainer = styled.div`
  width: 73%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
 
  

@media (max-width: 1280px) {
  width: 100%;
  }
`
export const RightContainer = styled.div`
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 5px;

  @media (max-width: 1280px) {
    width: 100%;
    margin-bottom: 20px;
    }
`

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;
  background-color:${(props) => props.theme.secondaryBackground};
`

export const RightListContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;

  background-color:${(props) => props.theme.secondaryBackground};

  
`

export const AnimeListContainer = styled.div`
  padding: 0;
  transition: 0.3s ease;
  margin-bottom: 20px;
`;

export const GridContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  max-height: 860px;
  overflow-y:auto;
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
  }

  ${breakpoints("grid-template-columns", "", [
  { 1280: "repeat(2,1fr)" },
  { 580: "repeat(1,1fr)" },
])};
`;

export const AnimeGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 10px;

  

    ${breakpoints("grid-template-columns", "", [
  { 768: "repeat(4,1fr)" },
  { 580: "repeat(3,1fr)" },
  { 480: "repeat(2,1fr)" },
  { 375: "repeat(1,1fr)" }
])};


`

export const InfoContainer = styled.div`
  margin: 20px auto;
`;


export const HeaderFlex = styled.div`
  display: flex;
  width:100%;
  justify-content: space-between;
  align-items: center;
`
export const ViewAllBtn = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  transition: 0.3s all ease;

  &:hover{
      letter-spacing: 3px;
  }
`;












export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  transition: 0.5s all ease;
  color:${(props) => props.color};
  ${breakpoints("font-size", "rem", [
  { 1200: 4 },
  { 800: 3 },
  { 600: 2.4 },
  { 580: 1.6 }
])};
`;

export const TitleH2 = styled.h2`
  font-size: 40px;
  font-weight: 800;
  transition: 0.5s all ease;
  color:${(props) => props.color};
  ${breakpoints("font-size", "rem", [
  { 1200: 4 },
  { 800: 3 },
  { 600: 2.4 },
  { 580: 1.6 }
])};
`;

export const TitleH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  transition: 0.5s all ease;
  color:${(props) => props.color};
  ${breakpoints("font-size", "rem", [
  { 800: 1.5 },
  { 600: 1.3 },
  { 580: 1.1 }
])};
`;
export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  transition: 0.5s all ease;
  color:${(props) => props.color};
  ${breakpoints("font-size", "rem", [
  { 800: 1.5 },
  { 600: 1.2 },
  { 580: 1 }
])};
  
`;
export const Strong = styled.p`
  font-size: 16px;
  font-weight: 700;
  color:${(props) => props.color};
`;
export const Body = styled.p`
  font-size: 16px;
  font-weight: 400;
  color:${(props) => props.color};
`;
export const Small = styled.p`
  font-size: 14px;
  font-weight: 400;
  color:${(props) => props.color};
  font-style: ${(props) => props.fontstyle};;
`;
export const Button = styled.p`
  font-size: 18px;
  font-weight: 500;
  color:${(props) => props.color};
`;

export const Pre = styled.p`
  font-size:10px;
  font-weight: 700;
  color:${(props) => props.color};
`;

