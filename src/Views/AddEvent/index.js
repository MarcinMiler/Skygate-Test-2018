import React from 'react'
import Container from '../../Components/Container'
import Title from '../../Components/Title'
import AddEventFormContainer from './Components/AddEventFrom'

const AddEvent = () => (
    <Container>
        <Title left padd="40px">
            Create Event
        </Title>

        <AddEventFormContainer />
    </Container>
)

export default AddEvent
