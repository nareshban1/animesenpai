import { Body, Small, TitleH3 } from "../Styled/Commons"
import { AnimeDetail, AnimeImage, AnimeImageContainer, AnimeSynopsis, AnimeTitlesContainer, AnimeTitleSynopsisContainer, MoreInfoContainer, MoreInfoLeft, MoreInfoRight, RankContainer, TitleRanksContainer } from "./Styles"

const AnimeDetails = ({ aniapi, jikan

}) => {
    console.log(jikan)
    return (
        <AnimeDetail>
            <AnimeImageContainer>
                <AnimeImage src={jikan?.image_url} />
            </AnimeImageContainer>
            <AnimeTitleSynopsisContainer>
                <AnimeTitlesContainer>
                    <TitleRanksContainer>
                        <TitleH3 color={(props) => props.theme.primaryColor}>
                            {jikan?.title}
                        </TitleH3>
                        <RankContainer>
                            <Small>
                                Rank: {jikan?.rank}
                            </Small>
                            <Small>
                                Popularity: {jikan?.popularity}
                            </Small>
                        </RankContainer>
                    </TitleRanksContainer>
                    <Small fontstyle="italic">
                        {jikan?.title_english}
                        {jikan?.title_synonyms?.[0]},
                        {jikan?.title_japanese}
                    </Small>
                </AnimeTitlesContainer>
                <AnimeSynopsis>
                    <Small>
                        {jikan?.synopsis}
                    </Small>
                </AnimeSynopsis>

                <MoreInfoContainer>
                    <MoreInfoLeft>
                        <Small>Type:&nbsp;&nbsp;{jikan?.type}</Small>
                        <Small>Studios:&nbsp;&nbsp;
                            {jikan?.studios?.map((studios, index) => (
                                <span key={index}>{studios?.name}, </span>
                            ))}</Small>
                        <Small>Date aired:&nbsp;&nbsp;{jikan?.aired?.string}</Small>
                        <Small>Status:&nbsp;&nbsp;{jikan?.status}</Small>
                        <Small>Genre:&nbsp;&nbsp;
                            {jikan?.genres?.map((genre, index) => (
                                <span key={index}>{genre?.name}, </span>
                            ))}</Small>
                    </MoreInfoLeft>
                    <MoreInfoRight>
                        <Small>Scores:&nbsp;&nbsp;{jikan?.score}/{jikan?.scored_by}</Small>
                        <Small>Premiered:&nbsp;&nbsp;{jikan?.premiered}</Small>
                        <Small>Duration:&nbsp;&nbsp;{jikan?.duration}</Small>
                        <Small>Source:&nbsp;&nbsp;{jikan?.source}</Small>
                        <Small>AirTime:&nbsp;&nbsp;{jikan?.broadcast}</Small>
                        <Small>Episodes:&nbsp;&nbsp;{jikan?.episodes}</Small>
                    </MoreInfoRight>
                </MoreInfoContainer>






            </AnimeTitleSynopsisContainer>
        </AnimeDetail>
    )
}

export default AnimeDetails
