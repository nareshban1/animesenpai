import { useRouter } from "next/router";
import {
  useGetAnimeCharactersQuery,
  useGetAnimeDetailsQuery,
} from "../../redux/Query/apiEndpoints";
import {
  Subtitle,
  ListContainer,
  HeaderFlex,
  ViewAllBtn,
} from "../Styled/Commons";
import CharacterCard from "./CharacterCard";
import { CharacterStaffGrid } from "./CharacterStyles";

function CharacterStaff({ maincharacters, btnview }) {
  const {
    query: { animeID },
  } = useRouter();
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
            passHref
            href={`/allcharacters/${jikan?.data?.data?.mal_id}/${jikan?.data?.data?.title}`}
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
              : jikananimeCharacters?.data?.data
          }
        />
      </CharacterStaffGrid>
    </ListContainer>
  );
}

export default CharacterStaff;
