import React from 'react'

import Container from '../../Components/Container'
import Search from './Components/Search'
import EventsList from './Components/EventsList'
import { Row } from './style'
import Filter from './Components/Filter'

const ExploreEvents = () => (
    <Container>
        <Row>
            <Filter />
            <EventsList />
        </Row>
    </Container>
)

export default ExploreEvents
