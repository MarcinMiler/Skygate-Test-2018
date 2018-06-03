import React from 'react'
import { Label, InputContainer, StyledTextArea, StyledInput } from './style'

const Input = ({ name, onChange, textArea, type, autoWidth }) => (
    <div>
        <Label>{name}</Label>

        <InputContainer>
            {textArea ? (
                <StyledTextArea
                    onChange={e => (onChange ? onChange(e.target.value) : null)}
                />
            ) : (
                <StyledInput
                    autoWidth={autoWidth}
                    type={type}
                    onChange={e => (onChange ? onChange(e.target.value) : null)}
                />
            )}
        </InputContainer>
    </div>
)

export default Input
