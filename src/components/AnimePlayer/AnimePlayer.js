import { VideoPlayer, VideoContainer, PlayerContainer } from "./AnimePlayerStyles";

function AnimePlayer({ currentEpisode }) {
  return (
    <PlayerContainer>
      <VideoContainer>
        <VideoPlayer
          controls={true}
          url={currentEpisode?.video}
          config={{
            file: {
              forceHLS: true,
            },
          }}
          width='100%'
          height='100%'
          pip
          playing={true}
          playsinline={true}

          onStart={console.log("Playing")}
          onEnded={console.log("Anime end")}
        />
      </VideoContainer >
    </PlayerContainer>


  )
}

export default AnimePlayer
