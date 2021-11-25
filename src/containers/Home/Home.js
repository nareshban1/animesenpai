import { Trending } from "../../components/Trending";
import { Upcoming } from "../../components/Upcoming";
import { AnnouncedAnime } from "../../components/Announced";
import ListPages from '../../components/ListPages/ListPages';
import AnimeSchedule from "../../components/AnimeSchedule/AnimeSchedule";
import PageTransitions from "../../components/PageTransitions/PageTransitions";
export const Home = () => {
  return (
    <PageTransitions
    >
      <ListPages>
        <Trending />
        <Upcoming />
        <AnimeSchedule />
      </ListPages>
    </PageTransitions>
  );
};


