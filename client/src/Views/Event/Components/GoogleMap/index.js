import React from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

const Map = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyBmaharYcjDwvAb0IS6uVDEk43qzYxXsfg&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withGoogleMap
)(({ lat, lng }) => (
    <GoogleMap defaultZoom={13} defaultCenter={{ lat, lng }}>
        <Marker position={{ lat, lng }} />
    </GoogleMap>
))

export default Map
