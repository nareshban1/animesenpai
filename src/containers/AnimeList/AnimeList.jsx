import { useSelector } from "react-redux";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import ScrollToTopOnPageChange from "../../helpers/ScrollToTopOnPageChange";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { useGetGenreAnimeQuery } from "../../redux/Query/apiEndpoints";
import { useRouter } from "next/router";

function AnimeList() {
  const page = useSelector((state) => state.pageNumber.pageNo);
  const router = useRouter();
  const { params, name } = router.query;
  const { data, error, isFetching } = useGetGenreAnimeQuery({
    genre: params,
    page,
  });

  return (
    <PageTransitions>
      <ScrollToTopOnPageChange page={page} />
      <AnimeResults
        loading={isFetching}
        error={error}
        animeData={data?.data}
        title={name + " Anime"}
        pagination={true}
        paginationData={data?.pagination}
      />
    </PageTransitions>
  );
}

export default AnimeList;
