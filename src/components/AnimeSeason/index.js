import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopSeason } from "../../redux/Slices/AnimeSeason";
import { fetchTopUpcoming } from "../../redux/Slices/topUpcoming";
import HomeAnimeList from "../HomePageAnimeList";

const AnimeSeason = () => {

    const topseason = useSelector((state) => state.animeSeason.data);
    const dispatch = useDispatch();
    

    useEffect(() => {
      dispatch(fetchTopSeason());
    }, [dispatch]);
  
    return (
      <HomeAnimeList animeData={topseason?.anime?.slice(0,10)} title={"Anime This Season"} btnView={true}/>
    );
}

export default AnimeSeason
