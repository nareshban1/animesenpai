import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopSeason } from "../../redux/Slices/AnimeSeason";
import RightList from "../RightList";
import {
  InfoContainer,
} from "../Styled/Commons";


const AnimeSeason = () => {
  const topseason = useSelector((state) => state.animeSeason.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSeason());
  }, [dispatch]);

  return (
    <InfoContainer>
      <>
        {topseason && (
          <RightList header="Top Aired" dataset={topseason?.anime?.slice(0, 10)} />
        )}
      </>
    </InfoContainer>
  );
};

export default AnimeSeason;
