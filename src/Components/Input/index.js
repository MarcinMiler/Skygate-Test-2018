import React from 'react'
import { InputWrapper, StyledInput, InputContainer, Label } from './style'

const Input = ({ name, onChange }) => (
    <React.Fragment>
        <Label>{name}</Label>

        <InputContainer>
            <StyledInput
                onChange={e => (onChange ? onChange(e.target.value) : null)}
            />
        </InputContainer>
    </React.Fragment>
)

export default Input
