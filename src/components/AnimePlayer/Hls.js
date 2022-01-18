import { useEffect, useRef } from "react";
import Hls from "hls.js";
import Plyr from "plyr-react";

const MyComponent = ({loadSources}) => {
  const ref = useRef(null);
  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr");
      var hls = new Hls();
      hls.loadSource(loadSources);
      hls.attachMedia(video);
      // @ts-ignore
      ref.current.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        (ref.current.plyr).play();
      });
    };
    loadVideo();
  });

  return (
    <Plyr
      id="plyr"
      options={{ volume: 0.1 }}
      source={{}["source"]}
      ref={ref}
      width="100%"
      height="100%"
      pip
      playing={true}
      playsinline={true}
    />
  );
};

export default function Hlss() {
  const supported = Hls.isSupported();

  return (
    <div>
      {supported ? <MyComponent /> : "HLS is not supported in your browser"}
    </div>
  );
}
