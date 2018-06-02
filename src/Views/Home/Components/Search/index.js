import React from 'react'
import { Wrapper } from './style'
import Title from '../../../../Components/Title'
import Input from '../Input'

const Search = () => (
    <Wrapper>
        <Title>Find your next experience</Title>

        <Input placeholder="Search for event" />
    </Wrapper>
)

export default Search
