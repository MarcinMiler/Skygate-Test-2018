import React from 'react'

import { Wrapper, SearchIcon } from './style'
import Title from '../../../../Components/Title'
import { InputWithIcon } from '../../../../Components/Inputs'

const Search = () => (
    <Wrapper>
        <Title>Find your next experience</Title>

        <InputWithIcon placeholder="Search for events..." Icon={SearchIcon} />
    </Wrapper>
)

export default Search
