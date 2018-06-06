import React from 'react'

import { AddEventFormWrapper, InputRow, WrapButton } from './style'
import { InputWithLabel } from '../../../../Components/Inputs'
import Dropdown from '../../../../Components/Dropdown'
import { PrimaryButton } from '../../../../Components/Buttons'

const options = ['Music', 'Networking', 'Food', 'Sport', 'Parties']

const AddEventForm = ({ changeState, createEvent }) => (
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

        <InputWithLabel
            label="Localization"
            onChange={val => changeState('location', val)}
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
