import React from 'react'

import { InputWithLabel } from '../../../../Components/Inputs'
import { SingleSearchInput } from '../../../../Components/SearchInputs'
import { PrimaryButton } from '../../../../Components/Buttons'
import Dropdown from '../../../../Components/Dropdown'
import { UpdateEventFormWrapper, InputRow, WrapButton } from './style'

const options = ['Music', 'Networking', 'Food', 'Sport', 'Parties']

const UpdateEventForm = ({
    updateEvent,
    changeState,
    state,
    locationProps
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
            onChange={val => changeState('description', val)}
        />

        <InputWithLabel
            label="Name of the organizer"
            value={state.organizer}
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
                value={state.startDate}
                onChange={val => changeState('startDate', val)}
            />
            <InputWithLabel
                label="Start time"
                type="time"
                autoWidth
                value={state.startTime}
                onChange={val => changeState('startTime', val)}
            />

            <InputWithLabel
                label="End date"
                type="date"
                autoWidth
                value={state.endDate}
                onChange={val => changeState('endDate', val)}
            />
            <InputWithLabel
                label="End time"
                type="time"
                autoWidth
                value={state.endTime}
                onChange={val => changeState('endTime', val)}
            />
        </InputRow>

        <SingleSearchInput label="Localization" locationProps={locationProps} />

        <InputWithLabel
            label="Photo (url)"
            value={state.photo}
            onChange={val => changeState('photo', val)}
        />

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
