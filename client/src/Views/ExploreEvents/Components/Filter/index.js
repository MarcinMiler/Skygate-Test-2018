import React from 'react'

import Subtitle from '../../../../Components/Subtitle'
import Dropdown from '../../../../Components/Dropdown'
import { InputWithLabel } from '../../../../Components/Inputs'
import { FilterWrapper } from './style'
import { SearchContext } from '../../../../Components/SearchContext'

const options = ['All', 'Music', 'Networking', 'Food', 'Sport', 'Parties']

const Filter = ({ changeState }) => (
    <SearchContext.Consumer>
        {({ changeState }) => (
            <FilterWrapper>
                <Subtitle left>Filtring</Subtitle>

                <Dropdown
                    name="Categories"
                    options={options}
                    onChange={val => changeState('category', val)}
                />

                <InputWithLabel
                    label="From"
                    type="date"
                    autoWidth
                    onChange={val => changeState('from', val)}
                />
                <InputWithLabel
                    label="To"
                    type="date"
                    autoWidth
                    onChange={val => changeState('to', val)}
                />
            </FilterWrapper>
        )}
    </SearchContext.Consumer>
)

export default Filter
