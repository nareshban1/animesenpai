import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AnimeResults from '../../components/AnimeResults/AnimeResults';
import { fetchrandomAnime } from '../../redux/Slices/Random';



const Random = () => {
    const random = useSelector(state => state.randomanime)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchrandomAnime());
    }, [dispatch])



    return (

        <AnimeResults loading={random?.loading} error={random?.error} animeData={random?.data?.data} title={"Random Animes"} />

    )
}

export default Random
