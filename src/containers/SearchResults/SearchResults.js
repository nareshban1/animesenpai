import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import FilterForm from "../../components/FilterForm/FilterForm";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { filterAnime } from "../../redux/Slices/FilterAnime";
import { toPage } from "../../redux/Slices/pagination";
import { useFormik } from "formik";
import * as Yup from "yup";

function SearchResults() {
  const searchResults = useSelector((state) => state.filteranime);
  const page = useSelector((state) => state.pageNumber.pageNo);
  const dispatch = useDispatch();
  const {
    query: { searchKeys },
  } = useRouter();
  const formik = useFormik({
    initialValues: {
      query: searchKeys || "",
      genre: [],
      rating: "g",
      type: "",
      status: "",
      orderBy: "",
      sort: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      dispatch(toPage(1));
      dispatch(
        filterAnime(
          values.query,
          getValues(values.genre),
          values.rating.value,
          getValues(values.type),
          getValues(values.status),
          values.orderBy.value,
          values.sort.value,
          1
        )
      );
    },
  });

  const getValues = (value) => {
    var values = [];
    for (const index in value) {
      values.push(value[index].value);
    }
    return values.toString();
  };

  useEffect(() => {
    dispatch(toPage(1));
  }, [dispatch, searchKeys]);

  useEffect(() => {
    dispatch(
      filterAnime(
        formik.values.query || "",
        getValues(formik.values.genre) || "",
        formik.values.rating.value || "",
        getValues(formik.values.type) || "",
        getValues(formik.values.status) || "",
        formik.values.orderBy.value || "",
        formik.values.sort.value || "",
        page
      )
    );
  }, [
    dispatch,
    formik.values.genre,
    formik.values.orderBy.value,
    formik.values.query,
    formik.values.rating.value,
    formik.values.sort.value,
    formik.values.status,
    formik.values.type,
    page,
  ]);

  return (
    <PageTransitions>
      <AnimeResults
        loading={searchResults?.loading}
        error={searchResults?.error}
        animeData={searchResults?.data?.results}
        title={"Search Results for " + formik.values.query}
        pagination={true}
      >
        <FilterForm formik={formik} />
      </AnimeResults>
    </PageTransitions>
  );
}

export default SearchResults;
