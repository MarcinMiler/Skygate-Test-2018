import React from 'react'

import TwoAutocomplete from '../../../../Components/TwoAutocomplete'
import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import { SearchWrapper } from './style'

const Search = ({ changeState, state }) => (
    <SearchWrapper>
        <TwoAutocomplete>
            {({ titleProps, locationProps }) => (
                <DoubleSearchInput
                    titleProps={titleProps}
                    locationProps={locationProps}
                />
            )}
        </TwoAutocomplete>
    </SearchWrapper>
)

export default Search
