import React from 'react'
import {
    Label,
    InputContainer,
    StyledTextArea,
    StyledInputWithLabel,
    Wrapper,
    WrapIcon,
    Sugesstion,
    SugesstionWrapper,
    Row,
    StyledSearchInput,
    StyledSearchInputWrapper,
    SearchIcon,
    PoweredByGoogle,
    GoogleImage
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

export const SearchInput = ({
    titleChange,
    titleSuggestions,
    locationSuggestions,
    getSearchInputProps,
    getSuggestionItemProps
}) => (
    <Wrapper>
        <WrapIcon>
            <SearchIcon />
        </WrapIcon>

        <Row>
            <StyledSearchInputWrapper>
                <StyledSearchInput
                    placeholder="Search by title..."
                    onChange={e =>
                        titleChange ? titleChange(e.target.value) : null
                    }
                />

                {titleSuggestions ? (
                    <SugesstionWrapper>
                        {titleSuggestions.map(s => (
                            <Sugesstion key={s.id}>{s.description}</Sugesstion>
                        ))}
                    </SugesstionWrapper>
                ) : (
                    <div />
                )}
            </StyledSearchInputWrapper>

            <StyledSearchInputWrapper>
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
            </StyledSearchInputWrapper>
        </Row>
    </Wrapper>
)
