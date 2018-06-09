import React from 'react'
import { compose, withProps } from 'recompose'
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs
} from 'react-google-maps'

export const Map = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyBmaharYcjDwvAb0IS6uVDEk43qzYxXsfg&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withGoogleMap
)(() => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
))
