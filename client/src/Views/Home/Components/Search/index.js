import React from 'react'
import { withRouter } from 'react-router-dom'

import Title from '../../../../Components/Title'
import TwoAutocomplete from '../../../../Components/TwoAutocomplete'
import { DoubleSearchInput } from '../../../../Components/SearchInputs'
import { Wrapper } from './style'

const Search = ({ history }) => (
    <Wrapper>
        <Title>Find your next experience</Title>

        <TwoAutocomplete onClick={() => history.push('exploreEvents')}>
            {({ titleProps, locationProps }) => (
                <DoubleSearchInput
                    titleProps={titleProps}
                    locationProps={locationProps}
                />
            )}
        </TwoAutocomplete>
    </Wrapper>
)

export default withRouter(Search)
