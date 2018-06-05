import React from 'react'
import {
    MapWrapper,
    MapTitle,
    WrapIcon,
    LocationIcon,
    MapText,
    CalendarIcon
} from './style'

const Map = ({ event: { location, startDate, endDate } }) => (
    <MapWrapper>
        <MapTitle>See you at</MapTitle>

        <WrapIcon>
            <LocationIcon />
            <MapText>{location} (255km from you)</MapText>
        </WrapIcon>

        <WrapIcon>
            <CalendarIcon />
            <MapText>Start: {startDate}</MapText>
        </WrapIcon>
        <WrapIcon>
            <CalendarIcon />
            <MapText>End: {endDate}</MapText>
        </WrapIcon>
    </MapWrapper>
)

export default Map
