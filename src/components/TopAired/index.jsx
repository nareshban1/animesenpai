import { useGetTopAnimeQuery } from "../../redux/Query/apiEndpoints";
import RightList from "../RightList";

export const TopAired = () => {
  const { data } = useGetTopAnimeQuery({
    type: "",
    filter: "aired",
  });

  return (
    <>
      {data && (
        <RightList header="Top Aired" dataset={data?.data?.slice(0, 9)} />
      )}
    </>
  );
};
