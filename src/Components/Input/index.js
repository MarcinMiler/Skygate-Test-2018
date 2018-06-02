import React from 'react'
import {
    InputWrapper,
    StyledInput,
    InputContainer,
    Label,
    StyledTextArea
} from './style'

const Input = ({ name, onChange, textArea }) => (
    <React.Fragment>
        <Label>{name}</Label>

        <InputContainer>
            {textArea ? (
                <StyledTextArea
                    onChange={e => (onChange ? onChange(e.target.value) : null)}
                />
            ) : (
                <StyledInput
                    onChange={e => (onChange ? onChange(e.target.value) : null)}
                />
            )}
        </InputContainer>
    </React.Fragment>
)

export default Input
