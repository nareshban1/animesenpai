import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopAired } from "../../redux/Slices/topAired";
import RightList from "../RightList";



export const TopAired = () => {
  const topAiredAnime = useSelector((state) => state.topAired.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopAired(0));
  }, [dispatch]);

  return (
    <>
      {topAiredAnime && (
        <RightList header="Top Aired" dataset={topAiredAnime?.data?.documents?.slice(0, 9)} />
      )}
    </>
  );
};
