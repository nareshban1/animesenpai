import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  AnimeDetail,
  AnimeImage,
  AnimeImageContainer,
  AnimeSynopsis,
  AnimeTitlesContainer,
  AnimeTitleSynopsisContainer,
  RankContainer,
  TitleRanksContainer,
} from "../AnimeDetails/Styles";

import { Small, TitleH3 } from "../Styled/Commons";
import Markdown from "markdown-to-jsx";
import HomeAnimeList from "../HomePageAnimeList";
import { useParams } from "react-router-dom";
import {
  useGetCharacterAnimeQuery,
  useGetCharacterbyIdQuery,
} from "../../redux/Query/apiEndpoints";
import { DateSchema } from "yup";
import { RiDatabase2Fill } from "react-icons/ri";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const CharacterDetails = () => {
  let params = useParams();
  const charID = params.id;
  const { data, error, isLoading } = useGetCharacterbyIdQuery(charID);
  const characterAnime = useGetCharacterAnimeQuery(charID);
  return (
    <>
      <AnimeDetail>
        {isLoading ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>
            <AnimeImageContainer>
              <AnimeImage src={data?.data?.images?.webp?.image_url} />
            </AnimeImageContainer>
            <AnimeTitleSynopsisContainer>
              <AnimeTitlesContainer>
                <TitleRanksContainer>
                  <TitleH3 color={(props) => props.theme.primaryColor}>
                    {data?.data?.name}
                  </TitleH3>
                  <RankContainer>
                    <Small>Favourite: {data?.data?.member_favorites}</Small>
                  </RankContainer>
                </TitleRanksContainer>
                <Small fontstyle="italic">
                  {data?.data?.name_kanji},
                  {DateSchema?.data?.nicknames?.map((names, index) => (
                    <Fragment key={index}>{names}</Fragment>
                  ))}
                  ,
                </Small>
              </AnimeTitlesContainer>

              <AnimeSynopsis>
                <Small>
                  <Markdown children={data?.data?.about}></Markdown>
                </Small>
              </AnimeSynopsis>
            </AnimeTitleSynopsisContainer>
          </>
        )}
      </AnimeDetail>

      <HomeAnimeList
        onError={characterAnime?.error}
        loading={characterAnime?.isLoading}
        animeData={characterAnime?.data?.data}
        title={"Appeared on"}
      />
    </>
  );
};

export default CharacterDetails;
