import React,{useEffect} from "react";
import TopAnimeList from "../TopAnimeList/TopAnimeList";
import AnnouncedSeasonalList from "../AnnouncedSeasonalList/SeasonalList";
import { useDispatch } from "react-redux";
import { changeScroll } from "../../redux/Slices/ScrollColor";

const MoreList = ({ match }) => {

  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(changeScroll(false));
  }, [dispatch]);
  
  if (match.params.title === "Top Upcoming Anime") {
    return <TopAnimeList title={match.params.title} />;
  } else if (match.params.title === "Anime This Season") {
    return (
      <AnnouncedSeasonalList
        title={match.params.title}
        storeName="animeSeason"
      />
    );
  } else if (match.params.title === "Announced Animes") {
    return (
      <AnnouncedSeasonalList title={match.params.title} storeName="announced" />
    );
  }
};

export default MoreList;
