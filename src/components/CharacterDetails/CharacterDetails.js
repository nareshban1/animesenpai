import React, { Fragment } from 'react'
import { useSelector } from "react-redux";
import { AnimeDetail, AnimeImage, AnimeImageContainer, AnimeSynopsis, AnimeTitlesContainer, AnimeTitleSynopsisContainer, RankContainer, TitleRanksContainer } from "../AnimeDetails/Styles"
import { SpinnerCircular } from 'spinners-react';
import { Small, TitleH3 } from "../Styled/Commons"
import Markdown from 'markdown-to-jsx';
import HomeAnimeList from "../HomePageAnimeList";

const CharacterDetails = () => {
    const characterInfo = useSelector(
        (state) => state.characterinfo
    );
    return (
        <>
            <AnimeDetail>
                {characterInfo?.loading ? <><SpinnerCircular /></> : <>
                    <AnimeImageContainer>
                        <AnimeImage src={characterInfo?.data?.image_url} />
                    </AnimeImageContainer>
                    <AnimeTitleSynopsisContainer>
                        <AnimeTitlesContainer>
                            <TitleRanksContainer>
                                <TitleH3 color={(props) => props.theme.primaryColor}>
                                    {characterInfo?.data?.name}
                                </TitleH3>
                                <RankContainer>
                                    <Small>
                                        Favourite: {characterInfo?.data?.member_favorites}
                                    </Small>
                                </RankContainer>
                            </TitleRanksContainer>
                            <Small fontstyle="italic">
                                {characterInfo?.data?.name_kanji},
                                {characterInfo?.data?.nicknames?.map((names, index) => (
                                    <Fragment key={index}>{names}</Fragment>
                                ))},
                            </Small>
                        </AnimeTitlesContainer>

                        <AnimeSynopsis>
                            <Small>
                                <Markdown children={characterInfo?.data?.about}>
                                </Markdown>
                            </Small>
                        </AnimeSynopsis>
                    </AnimeTitleSynopsisContainer>
                </>}
            </AnimeDetail>

            <HomeAnimeList onError={characterInfo?.error} loading={characterInfo?.loading} animeData={characterInfo?.data?.animeography} title={"Appeared on"} />
        </>
    )

}

export default CharacterDetails
