import {
  VideoPlayer,
  VideoContainer,
  PlayerContainer,
} from "./AnimePlayerStyles";

function AnimePlayer({ currentEpisode }) {
  const hlsProxyUrl = () => {
    const proxy_url = "http://localhost:80";

    const file_extension = ".m3u8";
    const video_url = currentEpisode?.video;
    const referer_url = currentEpisode?.video_headers?.referer;

    const hls_proxy_url = `${proxy_url}/${btoa(
      `${video_url}|${referer_url}`
    )}${file_extension}`;

    return hls_proxy_url;
  };

  return (
    <PlayerContainer>
      <VideoContainer>
        <VideoPlayer
          controls={true}
          url={hlsProxyUrl()}
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
