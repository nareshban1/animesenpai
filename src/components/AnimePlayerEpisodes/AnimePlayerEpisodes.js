import { useEffect, useState } from "react";
import AnimeEpisodes from "../AnimeEpisodes/AnimeEpisodes";
import AnimePlayer from "../AnimePlayer/AnimePlayer";
import { DisplayAvailability } from "./AnimePlayerEpisodesStyles";

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
