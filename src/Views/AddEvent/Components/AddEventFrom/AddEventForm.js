import React from 'react'

import { AddEventFormWrapper, InputRow, WrapButton } from './style'
import Input from '../../../../Components/Input'
import Dropdown from '../../../../Components/Dropdown'
import { PrimaryButton } from '../../../../Components/Buttons'

const options = ['Music', 'Networking', 'Food', 'Sport', 'Parties']

const AddEventForm = () => (
    <AddEventFormWrapper>
        <Input name="Title" onChange={val => console.log(val)} />

        <Input name="Description" textArea />

        <Input name="Name of the organizer" />

        <Dropdown
            name="Select category"
            options={options}
            onChange={val => console.log(val)}
        />

        <InputRow>
            <Input name="Start date" type="date" autoWidth />
            <Input name="Start time" type="time" autoWidth />

            <Input name="End date" type="date" autoWidth />
            <Input name="End time" type="time" autoWidth />
        </InputRow>

        <Input name="Localization" />

        <Input name="Photo (url)" />

        <WrapButton>
            <PrimaryButton height="55px" borderRadius>
                Create event
            </PrimaryButton>
        </WrapButton>
    </AddEventFormWrapper>
)

export default AddEventForm
