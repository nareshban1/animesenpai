import {
  VideoPlayer,
  VideoContainer,
  PlayerContainer,
} from "./AnimePlayerStyles";

function AnimePlayer({ currentEpisode }) {
  return (
    <PlayerContainer>
      <VideoContainer>
        <VideoPlayer
          controls={true}
          url={
            "https://api.aniapi.com/v1/proxy/https://vjbnb.vizcloud2.online/simple/EqPFI_8QBAro1HhYl67rC5su+VwW5ryyQgR7rqk+wYMnU94US2El/br/list.m3u8"
          }
          config={{
            file: {
              forceHLS: true,
            },
          }}
          width="100%"
          height="100%"
          pip
          playing={true}
          playsinline={true}
        />
      </VideoContainer>
    </PlayerContainer>
  );
}

export default AnimePlayer;
