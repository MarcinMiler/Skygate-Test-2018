import React from 'react'
import Container from '../../Components/Container'
import EventDetails from './Components/EventDetails'
import Map from './Components/Map'
import Buttons from './Components/Buttons'

const Event = () => (
    <Container>
        <EventDetails />

        <Map />

        <Buttons />
    </Container>
)

export default Event
