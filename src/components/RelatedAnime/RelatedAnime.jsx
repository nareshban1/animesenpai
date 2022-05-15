import React from 'react'
import { useSelector } from "react-redux";
import RightList from "../RightList";

const RelatedAnime = () => {
    const jikan = useSelector(
        (state) => state.jikanAnimeDetails
    );
    return (
        <>
            {jikan?.data?.related?.["Side story"] && (
                <RightList header="Related" dataset={jikan?.data?.related?.["Side story"]} noImage={jikan?.data?.image_url} />
            )}
            {jikan?.data?.related?.Summary && (
                <RightList header="Summary" dataset={jikan?.data?.related?.Summary} noImage={jikan?.data?.image_url} />
            )}
        </>
    )
}

export default RelatedAnime
