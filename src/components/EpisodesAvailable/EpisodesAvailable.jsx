import React from "react";
import { Subtitle, ListContainer, HeaderFlex, Button } from "../Styled/Commons";
import { useDispatch, useSelector } from "react-redux";
import { DisplayAvailability, WatchNowBtn } from "./AvailabilityStyles";

const EpisodesAvailable = ({ viewPlayer, setViewPlayer }) => {
    const animeEpisode = useSelector((state) => state.animeEpisodes);


    const openPlayer = () => {
        setViewPlayer(true);
    }
    return (
        <DisplayAvailability display={viewPlayer ? "none" : "block"}>
            <ListContainer>
                {animeEpisode?.loading ? (
                    <Subtitle color="white">Loading</Subtitle>
                ) : (
                    <>
                        {animeEpisode?.data?.data ? (
                            <HeaderFlex>
                                <Subtitle color="white">Episode are availabe to watch</Subtitle>
                                <WatchNowBtn>
                                    <Button color="white" onClick={openPlayer}>Watch Now</Button>
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
        </DisplayAvailability>
    );
};

export default EpisodesAvailable;
