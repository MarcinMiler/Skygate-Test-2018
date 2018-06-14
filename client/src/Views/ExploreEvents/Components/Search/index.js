import React from 'react'

import TwoAutocomplete from '../../../../Components/TwoAutocomplete'
import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import { SearchWrapper } from './style'

const Search = () => (
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
