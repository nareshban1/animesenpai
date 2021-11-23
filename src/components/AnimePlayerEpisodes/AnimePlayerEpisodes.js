import { useEffect, useState } from "react";
import AnimeEpisodes from "../AnimeEpisodes/AnimeEpisodes";
import AnimePlayer from "../AnimePlayer/AnimePlayer";
import { useDispatch, useSelector } from "react-redux";

const AnimePlayerEpisodes = ({ animeID, firstEpisode }) => {
    const [currentEpisode, setCurrentEpisode] = useState();
    const animeEpisode = useSelector((state) => state.animeEpisodes);
    return (
        <>
            {currentEpisode &&
                <AnimePlayer currentEpisode={currentEpisode} />
            }
            <AnimeEpisodes animeID={animeID} currentEpisode={currentEpisode} setCurrentEpisode={setCurrentEpisode} />

        </>
    );
};

export default AnimePlayerEpisodes;
