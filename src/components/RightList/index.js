import React from 'react'
import { RightListContainer, Subtitle, GridContainer } from "../Styled/Commons";
import SmallCard from "../AnimeCard/SmallCard";
const RightList = ({ header, dataset, noImage }) => {
    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }
    return (
        <RightListContainer>
            <Subtitle color="white">{header}</Subtitle>
            <GridContainer >
                {dataset?.map((data, index) => (
                    <SmallCard info={data} key={index} noImage={noImage} />
                ))}
            </GridContainer>
        </RightListContainer>
    )
}

export default RightList
