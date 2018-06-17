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

export const SingleSearchInput = ({ label, locationProps }) => (
    <div>
        <Label>{label}</Label>

        <SingleInputContainer>
            <StyledInputWithLabel {...locationProps.getInputProps()} />

            {locationProps.suggestions && (
                <SugesstionWrapper>
                    {locationProps.suggestions.map(s => (
                        <Sugesstion
                            key={s.id}
                            widther
                            {...locationProps.getSuggestionProps(s)}
                        >
                            {s.description}
                        </Sugesstion>
                    ))}
                    <PoweredByGoogle>
                        <GoogleImage />
                    </PoweredByGoogle>
                </SugesstionWrapper>
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

                {titleProps.suggestions && (
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
                )}
            </InputContainer>

            <InputContainer>
                <StyledSearchInput
                    placeholder="Search by location..."
                    {...locationProps.getInputProps()}
                />

                {locationProps.suggestions && (
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
                )}
            </InputContainer>
        </Row>
    </DoubleSearchInputWrapper>
)
