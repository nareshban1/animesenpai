import Link from "next/link";
import styled from "styled-components";

const AnimeContainer = styled.a`
  height: 300px;
  transition: 0.3s all ease;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`;

const AnimeImageContainer = styled.div`
  height: 85%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

const AnimeImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

const AnimeName = styled.div`
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 15%;
  color: ${(props) => props.theme.textColorSecondary};
`;

export const JikanAnimeCard = ({ info }) => {
  return (
    <Link
      passHref
      href={`/animeinfo/${
        info?.mal_id || info?.entry?.mal_id || info?.anime?.mal_id
      }`}
    >
      <AnimeContainer>
        <AnimeImageContainer>
          <AnimeImage
            src={
              info?.cover_image ||
              info?.images?.webp?.image_url ||
              info?.entry?.images?.webp?.image_url ||
              info?.anime?.images?.webp?.image_url
            }
            alt=""
          />
        </AnimeImageContainer>
        <AnimeName>
          {info?.titles?.en ||
            info?.titles?.rj ||
            info?.title ||
            info?.name ||
            info?.entry?.title ||
            info?.anime?.title}
        </AnimeName>
      </AnimeContainer>
    </Link>
  );
};
