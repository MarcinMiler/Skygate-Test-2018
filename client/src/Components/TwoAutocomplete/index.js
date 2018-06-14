import React from 'react'

import TitleAutocomplete from '../TitleAutocomplete'
import GoogleAutocomplete from '../GoogleAutocomplete'
import { SearchContext } from '../SearchContext'

const TwoAutocomplete = ({ children }) => (
    <SearchContext.Consumer>
        {state => (
            <TitleAutocomplete
                title={state.title}
                changeTitle={val => state.changeState('title', val)}
            >
                {({ titleProps }) => (
                    <GoogleAutocomplete
                        location={state.location}
                        onChange={val => {
                            if (val === '')
                                state.changeState('locationTerms', [])
                            state.changeState('location', val)
                        }}
                        onSuggestionClick={val => {
                            state.changeState('location', val.description)
                            state.changeState('locationTerms', val.terms)
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
