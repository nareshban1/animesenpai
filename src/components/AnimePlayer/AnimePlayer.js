import {
  PlayerContainer,
} from "./AnimePlayerStyles";
import Hlss from "./Hls";
function AnimePlayer({ currentEpisode }) {
  return (
    <PlayerContainer>
          <Hlss loadSources={currentEpisode?.video} />
    </PlayerContainer>
  );
}

export default AnimePlayer;
