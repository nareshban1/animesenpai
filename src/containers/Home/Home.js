import { TopAired } from "../../components/TopAired"
import { Trending } from "../../components/Trending"
import { Upcoming } from "../../components/Upcoming"

export const Home = () =>{
    return(
        <>
            <Trending/>
            <TopAired/>
            <Upcoming/>

        </>
    )

}