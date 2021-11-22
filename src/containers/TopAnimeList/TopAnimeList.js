import React, { useEffect } from "react";
import HomeAnimeList from "../../components/HomePageAnimeList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopUpcoming } from "../../redux/Slices/topUpcoming";

function TopAnimeList({ title }) {
  const topUpcomingAnime = useSelector((state) => state.topUpcoming.data);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchTopUpcoming(1));
  }, []);

  return (
    <HomeAnimeList
      animeData={topUpcomingAnime?.top}
      title={title}
      btnView={false}
    />
  );
}

export default TopAnimeList;
