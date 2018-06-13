import React from 'react'

import Container from '../../Components/Container'
import Title from '../../Components/Title'
import AddEventFormContainer from './Components/AddEventFrom'

const AddEvent = ({ history }) => (
    <Container>
        <Title left padd="40px">
            Create Event
        </Title>

        <AddEventFormContainer history={history} />
    </Container>
)

export default AddEvent
