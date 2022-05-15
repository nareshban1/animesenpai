import { useEffect } from "react";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import {
  useGetRandomAniAnimeQuery,
  useLazyGetRandomAniAnimeQuery,
} from "../../redux/Query/apiEndpoints";

const Random = ({ key }) => {
  const [trigger, { isFetching, data, error }, lastPromiseInfo] =
    useLazyGetRandomAniAnimeQuery();

  useEffect(() => {
    trigger();
  }, [key]);

  return (
    <PageTransitions>
      <AnimeResults
        loading={isFetching}
        error={error}
        animeData={data?.data}
        title={"Random Animes"}
      />
    </PageTransitions>
  );
};

export default Random;
