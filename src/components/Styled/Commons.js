import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    height: 100%;
    margin: 0 auto;

`

export const AnimeGridContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-gap: 20px;
`

export const PadContent = styled.div`
  padding-top: 50px;
`;

export const InfoContainer = styled.div`
  margin: 20px auto;
`;

export const InfoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Poppins", "sans-serif";
  margin-bottom: 20px;
`;