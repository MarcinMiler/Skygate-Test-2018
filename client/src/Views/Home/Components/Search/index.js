import React, { Component } from 'react'

import { SearchInput } from '../../../../Components/Inputs'
import GoogleAutocomplete from '../../../../Components/GoogleAutocomplete'

import { Wrapper } from './style'
import Title from '../../../../Components/Title'

class Search extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Find your next experience</Title>

                <GoogleAutocomplete>
                    {({
                        suggestions,
                        getSearchInputProps,
                        getSuggestionItemProps
                    }) => (
                        <SearchInput
                            locationSuggestions={suggestions}
                            getSearchInputProps={getSearchInputProps}
                            getSuggestionItemProps={getSuggestionItemProps}
                        />
                    )}
                </GoogleAutocomplete>
            </Wrapper>
        )
    }
}

export default Search
