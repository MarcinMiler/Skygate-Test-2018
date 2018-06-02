import React from 'react'
import { Wrapper, SearchIcon, WrapIcon, StyledInput } from './style'
import { PrimaryButton } from '../../../../Components/Buttons'

const Input = ({ placeholder, change }) => (
    <Wrapper>
        <WrapIcon>
            <SearchIcon />
        </WrapIcon>

        <StyledInput
            placeholder={placeholder}
            onChange={e => (change ? change(e.target.value) : null)}
        />

        <PrimaryButton borderRadius>Search</PrimaryButton>
    </Wrapper>
)

export default Input
