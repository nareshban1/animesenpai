import AnimeResults from "../../components/AnimeResults/AnimeResults";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { useGetRandomAniAnimeQuery } from "../../redux/Query/apiEndpoints";

const Random = () => {
  const { data, error, isLoading } = useGetRandomAniAnimeQuery();

  return (
    <PageTransitions>
      <AnimeResults
        loading={isLoading}
        error={error}
        animeData={data?.data}
        title={"Random Animes"}
      />
    </PageTransitions>
  );
};

export default Random;
