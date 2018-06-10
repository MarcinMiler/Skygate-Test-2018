import React from 'react'

import { InputWithLabel } from '../../../../Components/Inputs'
import { SingleSearchInput } from '../../../../Components/SearchInputs'
import Dropdown from '../../../../Components/Dropdown'
import { PrimaryButton } from '../../../../Components/Buttons'
import { UpdateEventFormWrapper, InputRow, WrapButton } from './style'

const options = ['Music', 'Networking', 'Food', 'Sport', 'Parties']

const UpdateEventForm = ({
    updateEvent,
    changeState,
    state,
    suggestions,
    getSearchInputProps,
    getSuggestionItemProps
}) => (
    <UpdateEventFormWrapper>
        <InputWithLabel
            label="Title"
            value={state.title}
            onChange={val => changeState('title', val)}
        />

        <InputWithLabel
            label="Description"
            value={state.description}
            textArea
        />

        <InputWithLabel label="Name of the organizer" value={state.organizer} />

        <Dropdown
            name="Select category"
            options={options}
            onChange={val => console.log(val)}
        />

        <InputRow>
            <InputWithLabel
                label="Start date"
                type="date"
                autoWidth
                value={state.startDate}
            />
            <InputWithLabel
                label="Start time"
                type="time"
                autoWidth
                value={state.startTime}
            />

            <InputWithLabel
                label="End date"
                type="date"
                autoWidth
                value={state.endDate}
            />
            <InputWithLabel
                label="End time"
                type="time"
                autoWidth
                value={state.endTime}
            />
        </InputRow>

        <SingleSearchInput
            label="Localization"
            suggestions={suggestions}
            getSearchInputProps={getSearchInputProps}
            getSuggestionItemProps={getSuggestionItemProps}
        />

        <InputWithLabel label="Photo (url)" value={state.photo} />

        <WrapButton>
            <PrimaryButton
                height="55px"
                borderRadius
                shadow
                onClick={() => updateEvent()}
            >
                Update Event
            </PrimaryButton>
        </WrapButton>
    </UpdateEventFormWrapper>
)

export default UpdateEventForm
