import React from 'react'
import { compose } from 'react-apollo'

import Spinner from '../../../../Components/Spinner'
import EventItem from '../EventItem'
import { EventsListWrapper } from './style'
import { getEvents } from '../../../../Graphql/Events'

const EventsList = ({ events: { events, loading } }) => {
    if (loading) return <Spinner />
    return (
        <EventsListWrapper>
            {events.map(event => <EventItem key={event.id} event={event} />)}
        </EventsListWrapper>
    )
}

export default compose(getEvents)(EventsList)
