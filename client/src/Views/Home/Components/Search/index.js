import React, { Component } from 'react'

import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import { GoogleAutocomplete } from '../../../../Components/GoogleAutocomplete'

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
                        <DoubleSearchInput
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
