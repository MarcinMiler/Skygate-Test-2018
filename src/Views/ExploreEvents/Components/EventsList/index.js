import React from 'react'
import EventItem from '../EventItem'
import { EventsListWrapper } from './style'

const EventsList = () => (
    <EventsListWrapper>
        {[1, 2, 3, 4, 5, 6, 7].map(i => <EventItem key={i} />)}
    </EventsListWrapper>
)

export default EventsList
