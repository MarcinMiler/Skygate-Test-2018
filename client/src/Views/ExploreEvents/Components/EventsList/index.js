import React from 'react'
import { compose } from 'react-apollo'
import { getEvents } from '../../../../graphql/events'

import withSpinner from '../../../../Components/withSpinner'
import EventItem from '../EventItem'
import { EventsListWrapper } from './style'

const EventsList = ({ data: { events }, state }) => (
    <EventsListWrapper>
        {events
            //Searching by location
            .filter(event => {
                const { terms } = state.location
                if (terms.length === 0) return true

                for (let i = 0; i < terms.length; i++) {
                    const test = event.location.includes(terms[i].value)
                    if (!test) return false
                }

                return true
            })
            // by title
            .filter(event =>
                event.title.toLowerCase().includes(state.title.toLowerCase())
            )
            // by category
            .filter(
                event =>
                    state.category === 'All'
                        ? true
                        : event.category === state.category
            )
            // by start date
            .filter(
                event => (state.from ? event.startDate >= state.from : true)
            )
            //by end date
            .filter(event => (state.to ? event.endDate <= state.to : true))
            .map(event => <EventItem key={event.id} event={event} />)}
    </EventsListWrapper>
)

export default compose(
    getEvents,
    withSpinner
)(EventsList)
