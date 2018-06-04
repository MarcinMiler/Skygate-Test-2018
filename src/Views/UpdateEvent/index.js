import React from 'react'
import Container from '../../Components/Container'
import Title from '../../Components/Title'
import UpdateEventFormContainer from './Components/UpdateEventFrom'

const UpdateEvent = () => (
    <Container>
        <Title left padd="40px">
            Update Event
        </Title>

        <UpdateEventFormContainer />
    </Container>
)

export default UpdateEvent
