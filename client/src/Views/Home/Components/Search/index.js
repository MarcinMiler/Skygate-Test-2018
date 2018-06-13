import React, { Component } from 'react'

import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import TitleAutocomplete from '../../../../Components/TitleAutocomplete'
import GoogleAutocomplete from '../../../../Components/GoogleAutocomplete'
import Title from '../../../../Components/Title'
import { Wrapper } from './style'
import { SearchContext } from '../../../../Components/SearchContext'

class Search extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Find your next experience</Title>

                <SearchContext.Consumer>
                    {state => (
                        <TitleAutocomplete
                            onChange={val => state.changeState('title', val)}
                        >
                            {({
                                titleSuggestions,
                                getSearchTitleInputProps,
                                getSuggestionTitleItemProps
                            }) => (
                                <GoogleAutocomplete
                                    onChange={val =>
                                        state.changeState('location', val)
                                    }
                                >
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
                                            getSearchInputProps={
                                                getSearchInputProps
                                            }
                                            getSuggestionItemProps={
                                                getSuggestionItemProps
                                            }
                                        />
                                    )}
                                </GoogleAutocomplete>
                            )}
                        </TitleAutocomplete>
                    )}
                </SearchContext.Consumer>
            </Wrapper>
        )
    }
}

export default Search
