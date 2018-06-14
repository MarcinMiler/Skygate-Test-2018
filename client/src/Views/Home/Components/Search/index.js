import React from 'react'

import Title from '../../../../Components/Title'
import TwoAutocomplete from '../../../../Components/TwoAutocomplete'
import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import { Wrapper } from './style'

const Search = () => (
    <Wrapper>
        <Title>Find your next experience</Title>

        <TwoAutocomplete>
            {({ titleProps, locationProps }) => (
                <DoubleSearchInput
                    titleProps={titleProps}
                    locationProps={locationProps}
                />
            )}
        </TwoAutocomplete>
    </Wrapper>
)

export default Search
