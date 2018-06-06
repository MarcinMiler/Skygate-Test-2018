import React from 'react'
import Container from '../../Components/Container'
import Title from '../../Components/Title'
import UpdateEventFormContainer from './Components/UpdateEventFrom'

const UpdateEvent = ({ match, history }) => (
    <Container>
        <Title left padd="40px">
            Update Event
        </Title>

        <UpdateEventFormContainer match={match} history={history} />
    </Container>
)

export default UpdateEvent
