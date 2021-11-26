import HomeAnimeList from "../HomePageAnimeList";
import JikanPagination from '../Pagination/JikanPagination';
import ListPages from '../ListPages/ListPages';

const AnimeResults = ({ loading, error, animeData, title, pagination }) => {
    return (

        <ListPages>
            <HomeAnimeList loading={loading} onError={error} animeData={animeData} title={title} />
            {pagination && <JikanPagination onError={error} />}
        </ListPages>

    )
}

export default AnimeResults
