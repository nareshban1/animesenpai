import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AnimeContainer = styled(Link)`
  overflow: hidden;
  transition: 0.3s all;
  display: flex;
  height: 70px;
  width: 100%;
  cursor: pointer;

  @media (max-width: 1280px) {
    height: 100px;
  }

  &:hover{
    background-color:  ${(props) => props.theme.mainBackground};
  }
`;
const AnimeImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 2px;
`;

const AnimeName = styled.div`
  text-align: left;
  width: 80%;
  padding-left: 10px;
  margin-left: auto;
  color: ${(props) => props.theme.textColorSecondary};
`;

const AnimeImageContainer = styled.div`
  height: 100%;
  width: 50px;
  @media (max-width: 1280px) {
    width: 75px;
  }

  
`;

const SmallCard = ({ info, noImage }) => {
  return (
    <AnimeContainer to={`/animeinfo/${info?.mal_id}`}>
      <AnimeImageContainer>
        <AnimeImage src={info?.cover_image || info?.image_url || noImage} alt="" />
      </AnimeImageContainer>
      <AnimeName>{info?.titles?.en || info?.title || info?.name}</AnimeName>
    </AnimeContainer>
  );
};

export default SmallCard;
