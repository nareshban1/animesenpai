import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import ScrollToTopOnPageChange from "../../helpers/ScrollToTopOnPageChange";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { useGetGenreAnimeQuery } from "../../redux/Query/apiEndpoints";

function AnimeList() {
  const page = useSelector((state) => state.pageNumber.pageNo);
  let params = useParams();

  const { data, error, isFetching } = useGetGenreAnimeQuery({
    genre: params.id,
    page,
  });

  return (
    <PageTransitions>
      <ScrollToTopOnPageChange page={page} />
      <AnimeResults
        loading={isFetching}
        error={error}
        animeData={data?.data}
        title={params.name + " Anime"}
        pagination={true}
        paginationData={data?.pagination}
      />
    </PageTransitions>
  );
}

export default AnimeList;
