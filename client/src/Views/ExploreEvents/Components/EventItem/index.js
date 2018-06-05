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

const EventItem = () => (
    <Link to="/event" style={{ textDecoration: 'none' }}>
        <EventItemWrapper>
            <EventImage />

            <EventContent>
                <EventTitle>Color Festival</EventTitle>

                <EventDate>Mon, Apr 11, 2018</EventDate>

                <EventDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean non condimentum dui, non semper ex.
                </EventDescription>

                <EventCategory>#IT</EventCategory>
            </EventContent>
        </EventItemWrapper>
    </Link>
)

export default EventItem
