import React from 'react'
import {
    Label,
    InputContainer,
    StyledTextArea,
    StyledInputWithLabel,
    Wrapper,
    WrapIcon,
    StyledInputWithIcon
} from './style'
import { PrimaryButton } from '../../Components/Buttons'

export const InputWithLabel = ({
    label,
    onChange,
    textArea,
    type,
    autoWidth
}) => (
    <div>
        <Label>{label}</Label>

        <InputContainer>
            {textArea ? (
                <StyledTextArea
                    onChange={e => (onChange ? onChange(e.target.value) : null)}
                />
            ) : (
                <StyledInputWithLabel
                    autoWidth={autoWidth}
                    type={type}
                    onChange={e => (onChange ? onChange(e.target.value) : null)}
                />
            )}
        </InputContainer>
    </div>
)

export const InputWithIcon = ({ placeholder, change, Icon }) => (
    <Wrapper>
        <WrapIcon>
            <Icon />
        </WrapIcon>

        <StyledInputWithIcon
            placeholder={placeholder}
            onChange={e => (change ? change(e.target.value) : null)}
        />

        <PrimaryButton borderRadius>Search</PrimaryButton>
    </Wrapper>
)
