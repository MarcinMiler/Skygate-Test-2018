import React, { Component } from 'react'

import { Wrapper, SearchIcon } from './style'
import Title from '../../../../Components/Title'
import { InputWithIcon } from '../../../../Components/Inputs'
import GoogleAutocomplete from '../../../../Components/GoogleAutocomplete'

class Search extends Component {
    // componentDidMount() {
    //     this.autoComplete = new window.google.maps.places.AutocompleteService()
    //     console.log(this.autoComplete.getPlacePredictions)
    //     this.autoComplete.getPlacePredictions(
    //         { input: 'Warszawa' },
    //         this.autoCompleteCallback
    //     )

    //     const lol = this.geoCode('Warszawa, Poland').then(res => {
    //         const latLng = {
    //             lat: res[0].geometry.location.lat(),
    //             lng: res[0].geometry.location.lng()
    //         }
    //         console.log(latLng)
    //     })
    // }

    // autoCompleteCallback = (predictions, status) => {
    //     console.log(predictions)
    // }

    // geoCode = address => {
    //     this.geocoder = new window.google.maps.Geocoder()

    //     return new Promise((resolve, reject) => {
    //         this.geocoder.geocode({ address }, (results, status) => {
    //             resolve(results)
    //         })
    //     })
    // }

    render() {
        return (
            <Wrapper>
                <Title>Find your next experience</Title>

                <GoogleAutocomplete>
                    {({ suggestions, handleInputChange }) => (
                        <InputWithIcon
                            placeholder="Search for events..."
                            Icon={SearchIcon}
                            onChange={handleInputChange}
                        />
                    )}
                </GoogleAutocomplete>
            </Wrapper>
        )
    }
}

export default Search
