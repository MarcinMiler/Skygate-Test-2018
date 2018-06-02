import React from 'react'

import { AddEventFormWrapper } from './style'
import Input from '../../../../Components/Input'

const AddEventForm = () => (
    <AddEventFormWrapper>
        <Input name="Title" />

        <Input name="Description" />
    </AddEventFormWrapper>
)

export default AddEventForm
