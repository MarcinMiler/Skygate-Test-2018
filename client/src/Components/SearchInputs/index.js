import React from 'react'

import {
    Label,
    SingleInputContainer,
    StyledInputWithLabel,
    DoubleSearchInputWrapper,
    WrapIcon,
    Sugesstion,
    SugesstionWrapper,
    Row,
    InputContainer,
    StyledSearchInput,
    SearchIcon,
    PoweredByGoogle,
    GoogleImage
} from './style'

export const SingleSearchInput = ({
    label,
    placeholder,
    suggestions,
    getSearchInputProps,
    getSuggestionItemProps
}) => (
    <div>
        <Label>{label}</Label>

        <SingleInputContainer>
            <StyledInputWithLabel
                placeholder={placeholder}
                {...getSearchInputProps()}
            />

            {suggestions ? (
                <SugesstionWrapper>
                    {suggestions.map(s => (
                        <Sugesstion
                            key={s.id}
                            widther
                            {...getSuggestionItemProps(s)}
                        >
                            {s.description}
                        </Sugesstion>
                    ))}
                    <PoweredByGoogle>
                        <GoogleImage />
                    </PoweredByGoogle>
                </SugesstionWrapper>
            ) : (
                <div />
            )}
        </SingleInputContainer>
    </div>
)

export const DoubleSearchInput = ({ titleProps, locationProps }) => (
    <DoubleSearchInputWrapper>
        <WrapIcon>
            <SearchIcon />
        </WrapIcon>

        <Row>
            <InputContainer>
                <StyledSearchInput
                    placeholder="Search by title..."
                    {...titleProps.getInputProps()}
                />

                {titleProps.suggestions ? (
                    <SugesstionWrapper>
                        {titleProps.suggestions.map(s => (
                            <Sugesstion
                                key={s.id}
                                {...titleProps.getSuggestionProps(s)}
                            >
                                {s.title}
                            </Sugesstion>
                        ))}
                    </SugesstionWrapper>
                ) : (
                    <div />
                )}
            </InputContainer>

            <InputContainer>
                <StyledSearchInput
                    placeholder="Search by location..."
                    {...locationProps.getInputProps()}
                />

                {locationProps.suggestions ? (
                    <SugesstionWrapper>
                        {locationProps.suggestions.map(s => (
                            <Sugesstion
                                key={s.id}
                                {...locationProps.getSuggestionProps(s)}
                            >
                                {s.description}
                            </Sugesstion>
                        ))}
                        <PoweredByGoogle>
                            <GoogleImage />
                        </PoweredByGoogle>
                    </SugesstionWrapper>
                ) : (
                    <div />
                )}
            </InputContainer>
        </Row>
    </DoubleSearchInputWrapper>
)
