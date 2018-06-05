import React from 'react'

import { AddEventFormWrapper, InputRow, WrapButton } from './style'
import { InputWithLabel } from '../../../../Components/Inputs'
import Dropdown from '../../../../Components/Dropdown'
import { PrimaryButton } from '../../../../Components/Buttons'

const options = ['Music', 'Networking', 'Food', 'Sport', 'Parties']

const AddEventForm = () => (
    <AddEventFormWrapper>
        <InputWithLabel label="Title" onChange={val => console.log(val)} />

        <InputWithLabel label="Description" textArea />

        <InputWithLabel label="Name of the organizer" />

        <Dropdown
            name="Select category"
            options={options}
            onChange={val => console.log(val)}
        />

        <InputRow>
            <InputWithLabel label="Start date" type="date" autoWidth />
            <InputWithLabel label="Start time" type="time" autoWidth />

            <InputWithLabel label="End date" type="date" autoWidth />
            <InputWithLabel label="End time" type="time" autoWidth />
        </InputRow>

        <InputWithLabel label="Localization" />

        <InputWithLabel label="Photo (url)" />

        <WrapButton>
            <PrimaryButton height="55px" borderRadius shadow>
                Create event
            </PrimaryButton>
        </WrapButton>
    </AddEventFormWrapper>
)

export default AddEventForm
