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
                            changeTitle={state.changeState}
                            title={state.title}
                        >
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
