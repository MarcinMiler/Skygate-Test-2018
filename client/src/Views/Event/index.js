import React from 'react'
import { compose } from 'react-apollo'
import { getEvent } from '../../graphql/event'

import { withSpinner } from '../../Components/withSpinner'
import Container from '../../Components/Container'
import EventDetails from './Components/EventDetails'
import Map from './Components/Map'
import ButtonsContainer from './Components/Buttons'

const Event = ({
    data: { event, loading },
    match: {
        params: { id }
    }
}) => {
    if (loading) return <div />
    return (
        <Container>
            <EventDetails event={event} />

            <Map event={event} />

            <ButtonsContainer id={id} />
        </Container>
    )
}

export default compose(
    getEvent,
    withSpinner
)(Event)
