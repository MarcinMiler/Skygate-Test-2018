import React from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

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
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 52.2296756, lng: 21.012228699999998 }}
    >
        <Marker position={{ lat: 52.2296756, lng: 21.012228699999998 }} />
    </GoogleMap>
))
