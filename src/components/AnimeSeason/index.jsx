import { useGetCurrentSeasonQuery } from "../../redux/Query/apiEndpoints";
import RightList from "../RightList";
import { InfoContainer } from "../Styled/Commons";

const AnimeSeason = () => {
  const { data, error, isLoading } = useGetCurrentSeasonQuery();

  return (
    <InfoContainer>
      <>
        {data && (
          <RightList header="Top Season" dataset={data?.data?.slice(0, 10)} />
        )}
      </>
    </InfoContainer>
  );
};

export default AnimeSeason;
