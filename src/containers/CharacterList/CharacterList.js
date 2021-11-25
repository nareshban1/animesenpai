import React from 'react'
import CharacterStaff from '../../components/CharactersStaff/Characters'
import ListPages from '../../components/ListPages/ListPages';
import PageTransitions from "../../components/PageTransitions/PageTransitions";

const CharacterList = () => {
    return (
        <PageTransitions>
            <ListPages>
                <CharacterStaff maincharacters={false} btnview={false} />
            </ListPages>
        </PageTransitions>

    )
}

export default CharacterList
