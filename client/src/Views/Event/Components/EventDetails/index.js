import React from 'react'

import Title from '../../../../Components/Title'
import CountDown from '../CountDown'
import {
    EventDetailsWrapper,
    EventImage,
    EventContent,
    EventDescription
} from './style'

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
