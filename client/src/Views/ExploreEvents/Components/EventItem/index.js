import React from 'react'
import { Link } from 'react-router-dom'
import {
    EventItemWrapper,
    EventImage,
    EventContent,
    EventTitle,
    EventDate,
    EventDescription,
    EventCategory
} from './style'

const EventItem = ({ event: { title, description, startDate, category } }) => (
    <Link to="/event" style={{ textDecoration: 'none' }}>
        <EventItemWrapper>
            <EventImage />

            <EventContent>
                <EventTitle>{title}</EventTitle>

                <EventDate>{startDate}</EventDate>

                <EventDescription>{description}</EventDescription>

                <EventCategory>#{category}</EventCategory>
            </EventContent>
        </EventItemWrapper>
    </Link>
)

export default EventItem
