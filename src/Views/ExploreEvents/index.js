import React from 'react'

import Container from '../../Components/Container'
import Search from './Components/Search'
import EventsList from './Components/EventsList'

const ExploreEvents = () => (
    <Container>
        <Search />

        <EventsList />
    </Container>
)

export default ExploreEvents
