import { useSelector } from "react-redux";
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
import Link from "next/link"
function CharacterStaff({ maincharacters, btnview }) {
  const jikananimeCharacters = useSelector(
    (state) => state.jikanAnimeCharacters.data
  );
  const jikan = useSelector((state) => state.jikanAnimeDetails);

  const getMainCharacter = (character) => {
    return character.role === "Main";
  };

  return (
    <ListContainer>
      <HeaderFlex>
        <Subtitle color="white">Characters</Subtitle>
        {btnview && (
          <Link
            href={`/allcharacters/${jikan?.data?.mal_id}/${jikan?.data?.title}`}
            passHref
          >
            <ViewAllBtn>View All</ViewAllBtn>
          </Link>
        )}
      </HeaderFlex>
      <CharacterStaffGrid>
        <CharacterCard
          characterData={
            maincharacters
              ? jikananimeCharacters?.characters?.filter(getMainCharacter)
              : jikananimeCharacters?.characters
          }
        />
      </CharacterStaffGrid>
    </ListContainer>
  );
}

export default CharacterStaff;
