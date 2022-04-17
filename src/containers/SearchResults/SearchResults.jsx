import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import FilterForm from "../../components/FilterForm/FilterForm";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { toPage } from "../../redux/Slices/pagination";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetFilterdAnimeQuery } from "../../redux/Query/apiEndpoints";
import ScrollToTopOnPageChange from "../../helpers/ScrollToTopOnPageChange";

function SearchResults() {
  const dispatch = useDispatch();
  let params = useParams();
  const page = useSelector((state) => state.pageNumber.pageNo);
  const [searchData, setSearchData] = useState({
    query: params.query,
    genre: [],
    rating: "g",
    type: "",
    status: "",
    orderBy: "",
    sort: "",
    page: page,
  });

  useEffect(() => {
    dispatch(toPage(1));
  }, [dispatch, params.query]);

  useEffect(() => {
    setSearchData({ ...searchData, page: page });
  }, [page]);

  const { data, error, isFetching } = useGetFilterdAnimeQuery({
    ...searchData,
  });

  const formik = useFormik({
    initialValues: {
      query: params.query || "",
      genre: [],
      rating: "g",
      type: "",
      status: "",
      orderBy: "",
      sort: "",
      page: page,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      dispatch(toPage(1));
      setSearchData({
        query: values.query,
        genre: getValues(values.genre),
        rating: values.rating.value,
        type: getValues(values.type),
        status: getValues(values.status),
        orderBy: values.orderBy.value,
        sort: values.sort.value,
        page: page,
      });
    },
  });

  const getValues = (value) => {
    var values = [];
    for (const index in value) {
      values.push(value[index].value);
    }
    return values.toString();
  };

  return (
    <PageTransitions>
      <ScrollToTopOnPageChange page={page} />
      <AnimeResults
        loading={isFetching}
        error={error}
        animeData={data?.data}
        title={"Search Results for " + formik.values.query}
        pagination={true}
        paginationData={data?.pagination}
      >
        <FilterForm formik={formik} />
      </AnimeResults>
    </PageTransitions>
  );
}

export default SearchResults;
