import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopAired } from "../../redux/Slices/topAired";
import SmallCard from "../AnimeCard/SmallCard";
import { RightListContainer, Subtitle,GridContainer } from "../Styled/Commons";


export const TopAired = () => {
  const topAiredAnime = useSelector((state) => state.topAired.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopAired(0));
  }, [dispatch]);

  return (
    <RightListContainer>
      <Subtitle color="white">Top Aired</Subtitle>
      {topAiredAnime && (
        <GridContainer>
          {topAiredAnime?.data?.documents?.slice(0, 9).map((data, index) => (
            <SmallCard info={data} key={index} />
          ))}
        </GridContainer>
      )}
    </RightListContainer>
  );
};
