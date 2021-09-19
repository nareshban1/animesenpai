import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAnimeDetail } from "../../redux/Slices/AnimeDetail";
import { fetchAnimeEpisodes } from "../../redux/Slices/AnimeEpisodes";
import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";


export const AnimeInfo = ({ match }) => {
  const animeDetails = useSelector((state) => state.animeDetail.data);
  const animeEpisodes = useSelector((state) => state.animeEpisodes.data);
  const dispatch = useDispatch();

  const animeID = match.params.id;
  useEffect(() => {
    dispatch(fetchAnimeDetail(animeID));
    dispatch(fetchAnimeEpisodes(animeID));
  }, [dispatch]);

 

  const video = animeEpisodes?.data?.documents[0].video

  console.log(video);


  return (
    <>
      {JSON.stringify(animeDetails)}
      {video}
      <ReactPlayer 
        controls
        url={video}
      
      />
      <ReactHlsPlayer
        src={video}
        autoPlay={false}
        controls={true}
        width="60%"
        height="auto"
      />
    </>
  );
};
