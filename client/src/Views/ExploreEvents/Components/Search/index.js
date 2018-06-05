import React from 'react'

import { InputWithIcon } from '../../../../Components/Inputs'
import { SearchWrapper, SearchIcon } from './style'

const Search = () => (
    <SearchWrapper>
        <InputWithIcon placeholder="Search for events..." Icon={SearchIcon} />
    </SearchWrapper>
)

export default Search
