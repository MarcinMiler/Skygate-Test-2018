import React from 'react'
import {
    EventDetailsWrapper,
    EventImage,
    EventContent,
    EventDescription
} from './style'

import Title from '../../../../Components/Title'
import CountDown from '../CountDown'

const EventDetails = ({ event: { title, description, startDate } }) => (
    <EventDetailsWrapper>
        <EventImage />

        <CountDown date={startDate} />

        <EventContent>
            <Title left>{title}</Title>

            <EventDescription>{description}</EventDescription>
        </EventContent>
    </EventDetailsWrapper>
)

export default EventDetails
