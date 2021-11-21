import React from 'react'
import { RightListContainer, Subtitle, GridContainer } from "../Styled/Commons";
import SmallCard from "../AnimeCard/SmallCard";
const RightList = ({ header, dataset }) => {
    return (
        <RightListContainer>
            <Subtitle color="white">{header}</Subtitle>
            <GridContainer>
                {dataset?.map((data, index) => (
                    <SmallCard info={data} key={index} />
                ))}
            </GridContainer>
        </RightListContainer>
    )
}

export default RightList
