import React from 'react'
import { compose } from 'react-apollo'
import getEvents from '../../../../graphql/events'

import { withSpinner } from '../../../../Components/withSpinner'
import EventItem from '../EventItem'
import { EventsListWrapper } from './style'

const EventsList = ({ data: { events } }) => (
    <EventsListWrapper>
        {events.map(event => <EventItem key={event.id} event={event} />)}
    </EventsListWrapper>
)

export default compose(
    getEvents,
    withSpinner
)(EventsList)
