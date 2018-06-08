import React from 'react'
import GoogleMapReact from 'google-map-react'

import {
    MapWrapper,
    MapTitle,
    WrapIcon,
    LocationIcon,
    MapText,
    CalendarIcon,
    GoogleMapContainer,
    Marker
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

        <GoogleMapContainer>
            <GoogleMapReact
                defaultCenter={{ lat: 21.744679, lng: 19.948542 }}
                defaultZoom={11}
            >
                <Marker lat={21.744679} lng={19.948542} />
            </GoogleMapReact>
        </GoogleMapContainer>
    </MapWrapper>
)

export default Map
