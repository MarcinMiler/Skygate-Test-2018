import React, { Component } from 'react'
import { compose } from 'react-apollo'
import { createEvent } from '../../../../graphql/createEvent'

import AddEventForm from './AddEventForm'
import {
    GoogleAutocomplete,
    geoCode
} from '../../../../Components/GoogleAutocomplete'

class AddEventFormContainer extends Component {
    state = {
        title: '',
        description: '',
        organizer: '',
        category: 'Music',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        location: '',
        lat: null,
        lng: null,
        photo: ''
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    createEvent = async () => {
        const response = await this.props.createEvent({
            variables: {
                title: this.state.title,
                description: this.state.description,
                organizer: this.state.organizer,
                category: this.state.category,
                startDate: this.state.startDate + ' ' + this.state.startTime,
                endDate: this.state.endDate + ' ' + this.state.endTime,
                location: this.state.location,
                lat: this.state.lat,
                lng: this.state.lng,
                photo: this.state.photo
            }
        })
        this.props.history.push('event/' + response.data.createEvent.id)
    }

    getLatLng = async address => {
        const data = await geoCode(address)

        if (data[0]) {
            this.setState(() => ({
                lat: data[0].geometry.location.lat(),
                lng: data[0].geometry.location.lng()
            }))
        }
    }

    render() {
        console.log(this.state)
        return (
            <GoogleAutocomplete
                onChange={val => {
                    this.handleChangeState('location', val.description)
                    this.getLatLng(val.description)
                }}
            >
                {({
                    suggestions,
                    getSearchInputProps,
                    getSuggestionItemProps
                }) => (
                    <AddEventForm
                        changeState={this.handleChangeState}
                        createEvent={this.createEvent}
                        suggestions={suggestions}
                        getSearchInputProps={getSearchInputProps}
                        getSuggestionItemProps={getSuggestionItemProps}
                    />
                )}
            </GoogleAutocomplete>
        )
    }
}

export default compose(createEvent)(AddEventFormContainer)
