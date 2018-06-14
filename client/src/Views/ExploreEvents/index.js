import React from 'react'

import Container from '../../Components/Container'
import EventsList from './Components/EventsList'
import Filter from './Components/Filter'
import Search from './Components/Search'
import { Row } from './style'

const ExploreEvents = () => (
    <Container>
        <Search />
        <Row>
            <Filter />
            <EventsList />
        </Row>
    </Container>
)

export default ExploreEvents
