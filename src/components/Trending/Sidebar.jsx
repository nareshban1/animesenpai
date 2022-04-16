import { useGetTrendingAnimeQuery } from "../../redux/Query/apiEndpoints";
import RightList from "../RightList";

export const SidebarTrending = () => {
  const { data, error, isLoading } = useGetTrendingAnimeQuery();

  return (
    <>
      {data && (
        <RightList
          header="Trending"
          dataset={data?.data?.documents?.slice(0, 10)}
        />
      )}
    </>
  );
};
