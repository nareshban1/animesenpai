import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnounced } from "../../redux/Slices/Announced";
import HomeAnimeList from "../HomePageAnimeList";

export const AnnouncedAnime = () => {
  const announced = useSelector((state) => state.announced.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnnounced());
  }, [dispatch]);

  return (
    <HomeAnimeList
      animeData={announced?.anime?.slice(0, 10)}
      title={"Announced Animes"}
      btnView={true}
    />
  );
};
