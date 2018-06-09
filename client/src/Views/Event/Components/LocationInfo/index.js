import React from 'react'
import {
    LocationInfoWrapper,
    LocationInfoTitle,
    WrapIcon,
    LocationIcon,
    LocationInfoText,
    CalendarIcon,
    GoogleMapContainer
} from './style'
import { Map } from '../GoogleMap'

export const LocationInfo = ({ event: { location, startDate, endDate } }) => (
    <LocationInfoWrapper>
        <LocationInfoTitle>See you at</LocationInfoTitle>

        <WrapIcon>
            <LocationIcon />
            <LocationInfoText>{location} (255km from you)</LocationInfoText>
        </WrapIcon>

        <WrapIcon>
            <CalendarIcon />
            <LocationInfoText>Start: {startDate}</LocationInfoText>
        </WrapIcon>
        <WrapIcon>
            <CalendarIcon />
            <LocationInfoText>End: {endDate}</LocationInfoText>
        </WrapIcon>

        <GoogleMapContainer>
            <Map />
        </GoogleMapContainer>
    </LocationInfoWrapper>
)
