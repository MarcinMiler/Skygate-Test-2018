import React from 'react'
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
    <EventItemWrapper>
        <EventImage />

        <EventContent>
            <EventTitle>Color Festival</EventTitle>

            <EventDate>Mon, Apr 11, 2018</EventDate>

            <EventDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                non condimentum dui, non semper ex.
            </EventDescription>

            <EventCategory>#IT</EventCategory>
        </EventContent>
    </EventItemWrapper>
)

export default EventItem
