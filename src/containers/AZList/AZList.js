import { useEffect, useState } from "react";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import AnimeResults from "../../components/AnimeResults/AnimeResults";
import ScrollToTopOnPageChange from "../../helpers/ScrollToTopOnPageChange";
import { fetchAnimebyLetter } from "../../redux/Slices/ByLetter";
import { LetterContainer, Letters } from "../../components/Footer/FooterStyles";
import { toPage } from "../../redux/Slices/pagination";
import { letters } from "../../data/letters";
const AZList = () => {
    const results = useSelector((state) => state.byletteranime);
    const page = useSelector((state) => state.pageNumber.pageNo);
    const dispatch = useDispatch();
    let params = useParams();
    const location = useLocation()


    useEffect(() => {
        dispatch(fetchAnimebyLetter(location.state || "", page));
    }, [dispatch, location.state, page]);



    const btnClick = () => {
        dispatch(toPage(1));

    }

    return (
        <PageTransitions>
            <ScrollToTopOnPageChange page={page} />

            <AnimeResults
                loading={results?.loading}
                error={results?.error}
                animeData={results?.data?.results}
                title={params.name + " Anime"}
                pagination={true}
            >
                <LetterContainer>
                    {letters.map((letter, index) => (
                        <Letters to={`/a-zlist/${letter.name}`} state={letter.letter} key={index} onClick={btnClick}>
                            {letter.name}
                        </Letters>
                    ))}

                </LetterContainer>
            </AnimeResults>
        </PageTransitions>

    )
}

export default AZList
