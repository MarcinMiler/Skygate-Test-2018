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
                        changeLocation={val =>
                            state.changeState('location', val)
                        }
                        changeTerms={val =>
                            state.changeState('locationTerms', val)
                        }
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
