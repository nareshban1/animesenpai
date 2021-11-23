import { VideoPlayer, VideoContainer, PlayerContainer } from "./AnimePlayerStyles";

function AnimePlayer({ currentEpisode }) {
  return (
    <PlayerContainer>
      <VideoContainer>
        <VideoPlayer
          controls={true}
          url={"https://api.aniapi.com/v1/proxy/https%3a%2f%2fgogoplay1.com%2fstreaming.php%3fid%3dMzUxOA%3d%3d%26title%3dOne%2bPiece%2bEpisode%2b1/gogoanime/"}
          config={{
            file: {
              forceHLS: true,
            },
          }}
          width='100%'
          height='100%'
          pip
        />
      </VideoContainer >
    </PlayerContainer>


  )
}

export default AnimePlayer
