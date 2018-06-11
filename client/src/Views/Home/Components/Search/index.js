import React, { Component } from 'react'

import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import { TitleAutocomplete } from '../../../../Components/TitleAutocomplete'
import { GoogleAutocomplete } from '../../../../Components/GoogleAutocomplete'

import { Wrapper } from './style'
import Title from '../../../../Components/Title'

class Search extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Find your next experience</Title>

                <TitleAutocomplete>
                    {({
                        titleSuggestions,
                        getSearchTitleInputProps,
                        getSuggestionTitleItemProps
                    }) => (
                        <GoogleAutocomplete>
                            {({
                                suggestions,
                                getSearchInputProps,
                                getSuggestionItemProps
                            }) => (
                                <DoubleSearchInput
                                    titleSuggestions={titleSuggestions}
                                    getSearchTitleInputProps={
                                        getSearchTitleInputProps
                                    }
                                    getSuggestionTitleItemProps={
                                        getSuggestionTitleItemProps
                                    }
                                    locationSuggestions={suggestions}
                                    getSearchInputProps={getSearchInputProps}
                                    getSuggestionItemProps={
                                        getSuggestionItemProps
                                    }
                                />
                            )}
                        </GoogleAutocomplete>
                    )}
                </TitleAutocomplete>
            </Wrapper>
        )
    }
}

export default Search
