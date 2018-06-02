import React from 'react'

import { AddEventFormWrapper } from './style'
import Input from '../../../../Components/Input'

const AddEventForm = () => (
    <AddEventFormWrapper>
        <Input name="Title" />

        <Input name="Description" textArea />
    </AddEventFormWrapper>
)

export default AddEventForm
