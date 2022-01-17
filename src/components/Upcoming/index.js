import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopUpcoming } from "../../redux/Slices/topUpcoming";
import HomeAnimeList from "../HomePageAnimeList";

export const Upcoming = () => {
  const topUpcomingAnime = useSelector((state) => state.topUpcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopUpcoming());
  }, [dispatch]);
  return (
    <HomeAnimeList
      loading={topUpcomingAnime?.loading}
      onError={topUpcomingAnime?.error}
      animeData={topUpcomingAnime?.data?.top?.slice(0, 15)}
      title={"Upcoming"}
      btnView={false}
    />
  );
};
