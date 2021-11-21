import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchANITrending } from "../../redux/Slices/trending";
import RightList from "../RightList";



export const SidebarTrending = () => {
    const trendingAnime = useSelector((state) => state.trending.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchANITrending());
    }, [dispatch]);

    return (
        <>
            {trendingAnime && (
                <RightList header="Trending" dataset={trendingAnime?.data?.documents?.slice(0, 10)} />
            )}
        </>
    );
};
