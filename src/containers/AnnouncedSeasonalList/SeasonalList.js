import React, { useEffect } from "react";
import HomeAnimeList from "../../components/HomePageAnimeList";
import { fetchTopSeason } from "../../redux/Slices/AnimeSeason";

import { useDispatch, useSelector } from "react-redux";
function SeasonalList({ title }) {
  const animeData = useSelector((state) => state.animeSeason.data);
  const dispatch = useDispatch();
    


  useEffect(() => {
    dispatch(fetchTopSeason());
  }, []);

  return (
    <HomeAnimeList
      animeData={animeData?.anime}
      title={title}
      btnView={false}
    />
  );
}

export default SeasonalList;
