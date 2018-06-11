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

export const DoubleSearchInput = ({
    titleSuggestions,
    getSearchTitleInputProps,
    getSuggestionTitleItemProps,
    locationSuggestions,
    getSearchInputProps,
    getSuggestionItemProps
}) => (
    <DoubleSearchInputWrapper>
        <WrapIcon>
            <SearchIcon />
        </WrapIcon>

        <Row>
            <InputContainer>
                <StyledSearchInput
                    placeholder="Search by title..."
                    {...getSearchTitleInputProps()}
                />

                {titleSuggestions ? (
                    <SugesstionWrapper>
                        {titleSuggestions.map(s => (
                            <Sugesstion
                                key={s.id}
                                {...getSuggestionTitleItemProps(s)}
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
                    {...getSearchInputProps()}
                />

                {locationSuggestions ? (
                    <SugesstionWrapper>
                        {locationSuggestions.map(s => (
                            <Sugesstion
                                key={s.id}
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
            </InputContainer>
        </Row>
    </DoubleSearchInputWrapper>
)
