import { useEffect, useState } from "react";
import { DisplayAvailability } from "./AnimePlayerEpisodesStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimeEpisodes } from "../../redux/Slices/AnimeEpisodes";
import AnimeEpisodes from "../AnimeEpisodes/AnimeEpisodes";
import AnimePlayer from "../AnimePlayer/AnimePlayer";

const AnimePlayerEpisodes = ({ animeID, viewPlayer }) => {
    const [currentEpisode, setCurrentEpisode] = useState([]);
    return (
        <DisplayAvailability display={viewPlayer ? "block" : "none"}>
            <AnimePlayer currentEpisode={currentEpisode} />
            <AnimeEpisodes animeID={animeID} currentEpisode={currentEpisode} setCurrentEpisode={setCurrentEpisode} />
        </DisplayAvailability>
    );
};

export default AnimePlayerEpisodes;
