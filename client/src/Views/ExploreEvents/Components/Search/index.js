import React from 'react'

import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import { SearchWrapper } from './style'
import { GoogleAutocomplete } from '../../../../Components/GoogleAutocomplete'
import { TitleAutocomplete } from '../../../../Components/TitleAutocomplete'

const Search = ({ changeState }) => (
    <SearchWrapper>
        <TitleAutocomplete>
            {({
                titleSuggestions,
                getSearchTitleInputProps,
                getSuggestionTitleItemProps
            }) => (
                <GoogleAutocomplete
                    onSuggestionClick={val => changeState('location', val)}
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
