import React from 'react'

import Title from '../../../../Components/Title'
import Subtitle from '../../../../Components/Subtitle'
import CountDown from '../CountDown'
import {
    EventDetailsWrapper,
    EventImage,
    EventContent,
    EventDescription
} from './style'

const EventDetails = ({
    event: { title, description, organizer, category, startDate, photo }
}) => (
    <EventDetailsWrapper>
        <EventImage style={{ backgroundImage: `url(${photo})` }} />

        <CountDown date={startDate} />

        <EventContent>
            <Title left>{title}</Title>

            <EventDescription>{description}</EventDescription>

            <Subtitle left>Organizer</Subtitle>

            <EventDescription>{organizer}</EventDescription>

            <Subtitle left>Category</Subtitle>

            <EventDescription>{category}</EventDescription>
        </EventContent>
    </EventDetailsWrapper>
)

export default EventDetails
