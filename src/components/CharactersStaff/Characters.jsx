import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useGetAnimeCharactersQuery,
  useGetAnimeDetailsQuery,
} from "../../redux/Query/apiEndpoints";
import {
  Subtitle,
  ListContainer,
  HeaderFlex,
  ViewAllBtn,
  Body,
  Small,
} from "../Styled/Commons";
import CharacterCard from "./CharacterCard";
import { CharacterStaffGrid } from "./CharacterStyles";

function CharacterStaff({ maincharacters, btnview }) {
  let params = useParams();
  const animeID = params.id;
  const jikan = useGetAnimeDetailsQuery(animeID);
  const jikananimeCharacters = useGetAnimeCharactersQuery(animeID);

  const getMainCharacter = (character) => {
    return character.role === "Main";
  };

  return (
    <ListContainer>
      <HeaderFlex>
        <Subtitle color="white">Characters</Subtitle>
        {btnview && (
          <ViewAllBtn
            to={`/allcharacters/${jikan?.data?.data?.mal_id}/${jikan?.data?.data?.title}`}
          >
            View All
          </ViewAllBtn>
        )}
      </HeaderFlex>
      <CharacterStaffGrid>
        <CharacterCard
          characterData={
            maincharacters
              ? jikananimeCharacters?.data?.data?.filter(getMainCharacter)
              : jikananimeCharacters?.data
          }
        />
      </CharacterStaffGrid>
    </ListContainer>
  );
}

export default CharacterStaff;
