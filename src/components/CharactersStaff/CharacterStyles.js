import styled from "styled-components";
import Link from "next/link";

export const CharacterStaffGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-top: 10px;
  @media (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CharacterCardContainer = styled(Link)`
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.3s all;
  display: flex;
  height: 100px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.mainBackground};
  }
`;

export const CharacterInfo = styled.div`
  text-align: left;
  width: 80%;
  height: 100%;

  padding-left: 10px;
  margin-left: auto;
  color: ${(props) => props.theme.textColorSecondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
