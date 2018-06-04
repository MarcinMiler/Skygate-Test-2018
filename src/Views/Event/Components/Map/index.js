import React from 'react'
import {
    MapWrapper,
    MapTitle,
    WrapIcon,
    LocationIcon,
    MapText,
    CalendarIcon
} from './style'

const Map = () => (
    <MapWrapper>
        <MapTitle>See you at</MapTitle>

        <WrapIcon>
            <LocationIcon />
            <MapText>Warsaw, Poland (255km from you)</MapText>
        </WrapIcon>

        <WrapIcon>
            <CalendarIcon />
            <MapText>Start: 10.10.2018 10:30</MapText>
        </WrapIcon>
        <WrapIcon>
            <CalendarIcon />
            <MapText>End: 10.10.2018 20:30</MapText>
        </WrapIcon>
    </MapWrapper>
)

export default Map
