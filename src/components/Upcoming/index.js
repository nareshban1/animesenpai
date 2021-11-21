import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopUpcoming } from "../../redux/Slices/topUpcoming";
import HomeAnimeList from "../HomePageAnimeList";

export const Upcoming = () => {
  const topUpcomingAnime = useSelector((state) => state.topUpcoming.data);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchTopUpcoming(1));
  }, []);

  return (
    <HomeAnimeList animeData={topUpcomingAnime?.top?.slice(0, 15)} title={"Upcoming"} btnView={false} />
  );
};
