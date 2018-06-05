import React from 'react'
import QueryWithLoading from '../../../../Components/QueryWithLoading'
import gql from 'graphql-tag'

import EventItem from '../EventItem'
import { EventsListWrapper } from './style'

const EventsList = () => (
    <QueryWithLoading query={eventsQuery}>
        {({ events }) => (
            <EventsListWrapper>
                {events.map(event => (
                    <EventItem key={event.id} event={event} />
                ))}
            </EventsListWrapper>
        )}
    </QueryWithLoading>
)

const eventsQuery = gql`
    {
        events {
            id
            title
            description
            organizer
            location
            startDate
            endDate
            photo
            category
        }
    }
`

export default EventsList
