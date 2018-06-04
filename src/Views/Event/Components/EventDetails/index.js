import React from 'react'
import {
    EventDetailsWrapper,
    EventImage,
    EventContent,
    EventDescription
} from './style'

import Title from '../../../../Components/Title'
import CountDown from '../CountDown'

const EventDetails = () => (
    <EventDetailsWrapper>
        <EventImage />

        <CountDown />

        <EventContent>
            <Title left>Color Festival</Title>

            <EventDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque tempus congue ullamcorper. Nullam at euismod neque.
                Donec leo tellus, semper sed lectus et, laoreet molestie lacus.
                Etiam venenatis malesuada ipsum maximus malesuada. Praesent
                molestie efficitur nisl quis dignissim. Nulla efficitur
                fermentum tristique. Mauris sed fermentum nunc. Mauris
                consectetur odio quam, vitae viverra nisi finibus sodales.
                Vestibulum ac iaculis ante.
            </EventDescription>
        </EventContent>
    </EventDetailsWrapper>
)

export default EventDetails
