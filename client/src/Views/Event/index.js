import React from 'react'
import { compose } from 'react-apollo'
import { getEvent } from '../../graphql/event'

import { withSpinner } from '../../Components/withSpinner'
import Container from '../../Components/Container'
import EventDetails from './Components/EventDetails'
import Map from './Components/Map'
import ButtonsContainer from './Components/Buttons'

const Event = ({
    data: { event },
    match: {
        params: { id }
    },
    history
}) => (
    <Container>
        <EventDetails event={event} />

        <Map event={event} />

        <ButtonsContainer id={id} history={history} />
    </Container>
)

export default compose(
    getEvent,
    withSpinner
)(Event)
