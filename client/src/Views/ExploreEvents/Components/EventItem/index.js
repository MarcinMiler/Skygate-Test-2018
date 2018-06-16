import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    EventItemWrapper,
    EventImage,
    EventContent,
    EventTitle,
    EventDate,
    EventDescription,
    EventCategory
} from './style'

const EventItem = ({
    event: { id, title, description, startDate, category, photo },
    history
}) => (
    <EventItemWrapper onClick={() => history.push('/event/' + id)}>
        <EventImage src={photo} />

        <EventContent>
            <EventTitle>{title}</EventTitle>

            <EventDate>{startDate}</EventDate>

            <EventDescription>{description}</EventDescription>

            <EventCategory>#{category}</EventCategory>
        </EventContent>
    </EventItemWrapper>
)

export default withRouter(EventItem)
