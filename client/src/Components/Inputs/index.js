import React from 'react'
import {
    Label,
    InputContainer,
    StyledTextArea,
    StyledInputWithLabel
} from './style'

export const InputWithLabel = ({
    label,
    onChange,
    textArea,
    type,
    autoWidth,
    placeholder,
    value
}) => (
    <div>
        <Label>{label}</Label>

        <InputContainer>
            {textArea ? (
                <StyledTextArea
                    placeholder={placeholder}
                    value={value}
                    onChange={e => (onChange ? onChange(e.target.value) : null)}
                />
            ) : (
                <StyledInputWithLabel
                    autoWidth={autoWidth}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={e => (onChange ? onChange(e.target.value) : null)}
                />
            )}
        </InputContainer>
    </div>
)
