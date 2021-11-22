import ReactPlayer from "react-player";

function AnimePlayer({ currentEpisode }) {
  return (

    <ReactPlayer
      controls
      url={currentEpisode?.video}
      config={{
        file: {
          forceHLS: true,
        },
      }}
    />

  )
}

export default AnimePlayer
