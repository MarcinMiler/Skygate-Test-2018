import React from 'react'

import { SingleSearchInput } from '../../../../Components/SearchInputs'
import { InputWithLabel } from '../../../../Components/Inputs'
import Dropdown from '../../../../Components/Dropdown'
import { PrimaryButton } from '../../../../Components/Buttons'
import { AddEventFormWrapper, InputRow, WrapButton } from './style'

const options = ['Music', 'Networking', 'Food', 'Sport', 'Parties']

const AddEventForm = ({
    changeState,
    createEvent,
    suggestions,
    getSearchInputProps,
    getSuggestionItemProps
}) => (
    <AddEventFormWrapper>
        <InputWithLabel
            label="Title"
            onChange={val => changeState('title', val)}
        />

        <InputWithLabel
            label="Description"
            textArea
            onChange={val => changeState('description', val)}
        />

        <InputWithLabel
            label="Name of the organizer"
            onChange={val => changeState('organizer', val)}
        />

        <Dropdown
            name="Select category"
            options={options}
            onChange={val => changeState('category', val)}
        />

        <InputRow>
            <InputWithLabel
                label="Start date"
                type="date"
                autoWidth
                onChange={val => changeState('startDate', val)}
            />
            <InputWithLabel
                label="Start time"
                type="time"
                autoWidth
                onChange={val => changeState('startTime', val)}
            />

            <InputWithLabel
                label="End date"
                type="date"
                autoWidth
                onChange={val => changeState('endDate', val)}
            />
            <InputWithLabel
                label="End time"
                type="time"
                autoWidth
                onChange={val => changeState('endTime', val)}
            />
        </InputRow>

        <SingleSearchInput
            label="Localization"
            suggestions={suggestions}
            getSearchInputProps={getSearchInputProps}
            getSuggestionItemProps={getSuggestionItemProps}
        />

        <InputWithLabel
            label="Photo (url)"
            onChange={val => changeState('photo', val)}
        />

        <WrapButton>
            <PrimaryButton
                height="55px"
                borderRadius
                shadow
                onClick={() => createEvent()}
            >
                Create event
            </PrimaryButton>
        </WrapButton>
    </AddEventFormWrapper>
)

export default AddEventForm
