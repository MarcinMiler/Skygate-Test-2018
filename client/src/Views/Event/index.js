import React from 'react'
import gql from 'graphql-tag'

import Container from '../../Components/Container'
import EventDetails from './Components/EventDetails'
import Map from './Components/Map'
import Buttons from './Components/Buttons'
import QueryWithLoading from '../../Components/QueryWithLoading'

const Event = ({ match }) => (
    <QueryWithLoading query={eventQuery} variables={{ id: match.params.id }}>
        {({ event }) => (
            <Container>
                <EventDetails event={event} />

                <Map event={event} />

                <Buttons />
            </Container>
        )}
    </QueryWithLoading>
)

const eventQuery = gql`
    query event($id: Int!) {
        event(id: $id) {
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

export default Event
