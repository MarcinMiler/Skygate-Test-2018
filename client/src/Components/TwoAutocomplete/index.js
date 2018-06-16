import React from 'react'

import TitleAutocomplete from '../TitleAutocomplete'
import GoogleAutocomplete from '../GoogleAutocomplete'
import { SearchContext } from '../SearchContext'

const TwoAutocomplete = ({ onClick, children }) => (
    <SearchContext.Consumer>
        {state => (
            <TitleAutocomplete
                title={state.title}
                changeTitle={val => state.changeState('title', val)}
                onSuggestionClick={val => {
                    state.changeState('title', val.title)
                    onClick && onClick()
                }}
            >
                {({ titleProps }) => (
                    <GoogleAutocomplete
                        location={state.location}
                        onChange={val => {
                            val === '' && state.changeState('locationTerms', [])
                            state.changeState('location', val)
                        }}
                        onSuggestionClick={val => {
                            state.changeState('location', val.description)
                            state.changeState('locationTerms', val.terms)
                            onClick && onClick()
                        }}
                    >
                        {({ locationProps }) =>
                            children({ titleProps, locationProps })
                        }
                    </GoogleAutocomplete>
                )}
            </TitleAutocomplete>
        )}
    </SearchContext.Consumer>
)

export default TwoAutocomplete
