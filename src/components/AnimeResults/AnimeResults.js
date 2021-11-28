import HomeAnimeList from "../HomePageAnimeList";
import JikanPagination from '../Pagination/JikanPagination';
import ListPages from '../ListPages/ListPages';

const AnimeResults = (props) => {


    return (

        <ListPages>
            {props.children}
            <HomeAnimeList loading={props.loading} onError={props.error} animeData={props.animeData} title={props.title} />
            {props.pagination && <JikanPagination onError={props.error} />}
        </ListPages>

    )
}

export default AnimeResults
