import React from 'react'
import EventItem from '../EventItem'

const EventsList = () => (
    <React.Fragment>
        {[1, 2, 3, 4, 5, 6, 7].map(i => <EventItem key={i} />)}
    </React.Fragment>
)

export default EventsList
