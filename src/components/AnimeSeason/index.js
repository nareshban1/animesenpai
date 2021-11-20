import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopSeason } from "../../redux/Slices/AnimeSeason";
import SmallCard from "../AnimeCard/SmallCard";
import {
  RightListContainer,
  Strong,
  Subtitle,
  GridContainer,
  InfoContainer,
} from "../Styled/Commons";


const AnimeSeason = () => {
  const topseason = useSelector((state) => state.animeSeason.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSeason());
  }, [dispatch]);

  return (
    <InfoContainer>
      <RightListContainer>
        <Subtitle color="white">Season Top</Subtitle>
        {topseason && (
          <GridContainer>
            {topseason?.anime?.slice(0, 10).map((data, index) => (
              <SmallCard info={data} key={index} />
            ))}
          </GridContainer>
        )}
      </RightListContainer>
    </InfoContainer>
  );
};

export default AnimeSeason;
