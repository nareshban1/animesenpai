import styled from "styled-components";
import { Link } from "react-router-dom";

export const CharacterStaffGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 10px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
    }
`;

export const CharacterCardContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.3s all;
  display: flex;
  height: 100px;
  width: 100%;
  cursor: pointer;

`;

export const CharacterInfo = styled.div`
text-align: left;
  width: 80%;
  padding-left: 10px;
  margin-left: auto;
  color: ${(props) => props.theme.textColorSecondary};
`;



export const CharacterImageContainer = styled.div`
  height: 100%;
  width: 75px;
  border-radius: 2px;
  overflow: hidden;
`;


export const CharacterImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
