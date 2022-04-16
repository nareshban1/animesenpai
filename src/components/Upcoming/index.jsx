import { useGetTopAnimeQuery } from "../../redux/Query/apiEndpoints";
import HomeAnimeList from "../HomePageAnimeList";

export const Upcoming = () => {
  const { data, error, isLoading } = useGetTopAnimeQuery({
    type: "",
    filter: "upcoming",
  });

  return (
    <HomeAnimeList
      loading={isLoading}
      onError={error}
      animeData={data?.data?.slice(0, 15)}
      title={"Upcoming"}
      btnView={false}
    />
  );
};
