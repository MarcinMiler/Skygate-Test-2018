import React from 'react'
import { compose } from 'react-apollo'
import { getEvents } from '../../../../graphql/events'

import { withSpinner } from '../../../../Components/withSpinner'
import EventItem from '../EventItem'
import { EventsListWrapper } from './style'

const EventsList = ({ data: { events }, state }) => (
    <EventsListWrapper>
        {events
            .filter(event => {
                const { terms } = state.location
                if (terms.length === 0) {
                    return true
                }
                for (let i = 0; i < terms.length; i++) {
                    const test = event.location.includes(terms[i].value)
                    if (!test) return false
                }

                return true
            })
            .map(event => <EventItem key={event.id} event={event} />)}
    </EventsListWrapper>
)

export default compose(
    getEvents,
    withSpinner
)(EventsList)
