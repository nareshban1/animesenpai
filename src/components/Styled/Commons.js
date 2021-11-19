import styled from "styled-components";

export const Container = styled.div`
    max-width: 1320px;
    height: 100%;
    padding: 10px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 1280px) {
      max-width: 965px;
    }
`
export const FlexContainer=styled.div`
  display:flex;
  
  @media (max-width: 1280px) {
    flex-direction: column;
  }

`

export const LeftContainer =styled.div`
max-width: 965px;
height: 100%;
border-radius: 10px;
overflow: hidden;
box-sizing: border-box;
`
export const RightContainer =styled.div`
max-width: 330px;
height: 100%;
box-sizing: border-box;
overflow: hidden;
border-radius: 10px;
`

export const ListContainer =styled.div`
max-width: 965px;
height: 100%;
border-radius: 10px;
overflow: hidden;
box-sizing: border-box;
padding: 10px;
background-color:${(props) => props.theme.secondaryBackground};
`



export const AnimeGridContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(180px,.5fr));
    grid-gap: 10px;
    row-gap: 15px;

    @media (max-width: 550px) {
      grid-template-columns: repeat(2,minmax(135px,.5fr));
    }
`

export const PadContent = styled.div`
  padding-top: 50px;
`;

export const InfoContainer = styled.div`
  margin: 20px auto;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  font-family: "Poppins", "sans-serif";
`;

export const TitleH2 = styled.h2`
  font-size: 40px;
  font-weight: 800;
  font-family: "Poppins", "sans-serif";
`;

export const TitleH3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins", "sans-serif";
`;
export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-family: "Poppins", "sans-serif";
  color:${(props) => props.color};
`;
export const Strong = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-family: "Poppins", "sans-serif";
`;
export const Body = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: "Poppins", "sans-serif";
`;
export const Small = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", "sans-serif";
`;
export const Button = styled.p`
  font-size: 10px;
  font-weight: 700;
  font-family: "Poppins", "sans-serif";
`;

export const Pre = styled.p`
  font-size:10px;
  font-weight: 700;
  font-family: "Poppins", "sans-serif";
`;

