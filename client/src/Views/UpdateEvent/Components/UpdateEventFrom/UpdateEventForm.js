import React from 'react'

import { UpdateEventFormWrapper, InputRow, WrapButton } from './style'
import { InputWithLabel } from '../../../../Components/Inputs'
import Dropdown from '../../../../Components/Dropdown'
import { PrimaryButton } from '../../../../Components/Buttons'

const options = ['Music', 'Networking', 'Food', 'Sport', 'Parties']

const UpdateEventForm = ({ updateEvent, changeState, state }) => (
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

        <InputWithLabel label="Localization" value={state.location} />

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
