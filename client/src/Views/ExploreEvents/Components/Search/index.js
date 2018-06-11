import React from 'react'

import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import { SearchWrapper } from './style'
import { GoogleAutocomplete } from '../../../../Components/GoogleAutocomplete'

const Search = ({ changeState }) => (
    <SearchWrapper>
        <GoogleAutocomplete
            onSuggestionClick={val => changeState('location', val)}
        >
            {({ suggestions, getSearchInputProps, getSuggestionItemProps }) => (
                <DoubleSearchInput
                    locationSuggestions={suggestions}
                    getSearchInputProps={getSearchInputProps}
                    getSuggestionItemProps={getSuggestionItemProps}
                />
            )}
        </GoogleAutocomplete>
    </SearchWrapper>
)

export default Search
