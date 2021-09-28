import React, { useEffect } from "react";
import HomeAnimeList from "../../components/HomePageAnimeList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnounced } from "../../redux/Slices/Announced";

function AnnouncedList({ title }) {
  const animeData = useSelector((state) => state.announced.data);
  const dispatch = useDispatch();
    


  useEffect(() => {
    dispatch(fetchAnnounced());
  }, []);

  return (
    <HomeAnimeList
      animeData={animeData?.anime}
      title={title}
      btnView={false}
    />
  );
}

export default AnnouncedList;
