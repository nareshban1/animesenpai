import React, { useEffect } from "react";
import AnimeSeason from "../../components/AnimeSeason";
import { TopAired } from "../../components/TopAired";
import { Trending } from "../../components/Trending";
import { Upcoming } from "../../components/Upcoming";
import { AnnouncedAnime } from "../../components/Announced";
import { useDispatch } from "react-redux";
import { changeScroll } from "../../redux/Slices/ScrollColor";
export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeScroll(true));
  }, []);
  return (
    <>
      {/* <Trending />
      <Upcoming />
      <AnimeSeason />
      <AnnouncedAnime /> */}
    </>
  );
};
