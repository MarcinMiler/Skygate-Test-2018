import React, { Component } from 'react'
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

export class LocationInfo extends Component {
    state = {
        distance: 0
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.getDistance, null, {
            enableHighAccuracy: true
        })
    }

    getDistance = position => {
        const p1 = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }

        const p2 = {
            lat: this.props.event.lat,
            lng: this.props.event.lng
        }

        const rad = x => (x * Math.PI) / 180
        const earthRadius = 6378137

        const dLat = rad(p2.lat - p1.lat)
        const dLng = rad(p2.lng - p1.lng)

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(p1.lat)) *
                Math.cos(rad(p2.lat)) *
                Math.sin(dLng / 2) *
                Math.sin(dLng / 2)

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

        const distanceInMeters = earthRadius * c
        const distanceInKilometers = distanceInMeters / 1000

        this.setState(() => ({ distance: distanceInKilometers }))
    }

    render() {
        const {
            event: { location, startDate, endDate, lat, lng }
        } = this.props
        return (
            <LocationInfoWrapper>
                <LocationInfoTitle>See you at</LocationInfoTitle>

                <WrapIcon>
                    <LocationIcon />
                    <LocationInfoText>
                        {location}{' '}
                        {Math.floor(this.state.distance) + 'km from you'}
                    </LocationInfoText>
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
                    <Map lat={lat} lng={lng} />
                </GoogleMapContainer>
            </LocationInfoWrapper>
        )
    }
}
