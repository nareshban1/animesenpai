import React from "react";
import { Subtitle, ListContainer, HeaderFlex, Button } from "../Styled/Commons";
import { useDispatch, useSelector } from "react-redux";
import { WatchNowBtn } from "./AvailabilityStyles";

const EpisodesAvailable = () => {
    const animeEpisode = useSelector((state) => state.animeEpisodes);
    console.log(animeEpisode);
    return (
        <ListContainer>
            {animeEpisode?.loading ? (
                <>Loading</>
            ) : (
                <>
                    {animeEpisode?.data?.data?.documents ? (
                        <HeaderFlex>
                            <Subtitle color="white">Episode are availabe to watch</Subtitle>
                            <WatchNowBtn>
                                <Button color="white">Watch Now</Button>
                            </WatchNowBtn>
                        </HeaderFlex>
                    ) : (
                        <HeaderFlex>
                            <Subtitle color="white">Episodes are not available</Subtitle>
                        </HeaderFlex>
                    )}
                </>
            )}
        </ListContainer>
    );
};

export default EpisodesAvailable;
