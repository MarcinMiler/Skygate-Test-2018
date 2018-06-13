import React from 'react'

import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import GoogleAutocomplete from '../../../../Components/GoogleAutocomplete'
import TitleAutocomplete from '../../../../Components/TitleAutocomplete'
import { SearchWrapper } from './style'

const Search = ({ changeState }) => (
    <SearchWrapper>
        <TitleAutocomplete onChange={val => changeState('title', val)}>
            {({
                titleSuggestions,
                getSearchTitleInputProps,
                getSuggestionTitleItemProps
            }) => (
                <GoogleAutocomplete
                    onChange={val => changeState('location', val)}
                >
                    {({
                        suggestions,
                        getSearchInputProps,
                        getSuggestionItemProps
                    }) => (
                        <DoubleSearchInput
                            titleSuggestions={titleSuggestions}
                            getSearchTitleInputProps={getSearchTitleInputProps}
                            getSuggestionTitleItemProps={
                                getSuggestionTitleItemProps
                            }
                            locationSuggestions={suggestions}
                            getSearchInputProps={getSearchInputProps}
                            getSuggestionItemProps={getSuggestionItemProps}
                        />
                    )}
                </GoogleAutocomplete>
            )}
        </TitleAutocomplete>
    </SearchWrapper>
)

export default Search
