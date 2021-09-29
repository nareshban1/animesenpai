import React, { useEffect } from "react";
import TopAnimeList from "../TopAnimeList/TopAnimeList";
import { useDispatch } from "react-redux";
import { changeScroll } from "../../redux/Slices/ScrollColor";
import AnnouncedList from "../AnnouncedSeasonalList/AnnouncedList";
import SeasonalList from "../AnnouncedSeasonalList/SeasonalList";
import styled from "styled-components";
import {PadContent} from "../../components/Styled/Commons"

const MoreList = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeScroll(false));
  }, [dispatch]);

  if (match.params.title === "Top Upcoming Anime") {
    return (
    <PadContent>
      <TopAnimeList title={match.params.title} />
    </PadContent>
    );
  } else if (match.params.title === "Anime This Season") {
    return (
      <PadContent>
        <SeasonalList title={match.params.title} />
      </PadContent>
    );
  } else if (match.params.title === "Announced Animes") {
    return (
      <PadContent>
        {" "}
        <AnnouncedList title={match.params.title} />
      </PadContent>
    );
  }
};

export default MoreList;
