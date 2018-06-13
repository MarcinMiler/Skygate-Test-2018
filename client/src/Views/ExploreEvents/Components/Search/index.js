import React from 'react'

import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import GoogleAutocomplete from '../../../../Components/GoogleAutocomplete'
import TitleAutocomplete from '../../../../Components/TitleAutocomplete'
import { SearchWrapper } from './style'

const Search = ({ changeState, state }) => (
    <SearchWrapper>
        <TitleAutocomplete changeTitle={changeState} title={state.title}>
            {({
                titleSuggestions,
                getSearchTitleInputProps,
                getSuggestionTitleItemProps
            }) => (
                <GoogleAutocomplete
                    changeLocation={state.changeState}
                    location={state.location}
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
