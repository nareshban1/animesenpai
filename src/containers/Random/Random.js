import { useSelector } from "react-redux";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import PageTransitions from "../../components/PageTransitions/PageTransitions";

const Random = () => {
  const random = useSelector((state) => state.randomanime);

  return (
    <PageTransitions>
      <AnimeResults
        loading={random?.loading}
        error={random?.error}
        animeData={random?.data?.data}
        title={"Random Animes"}
      />
    </PageTransitions>
  );
};

export default Random;
