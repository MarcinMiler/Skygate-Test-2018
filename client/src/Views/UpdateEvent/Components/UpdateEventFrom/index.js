import React, { Component } from 'react'
import { compose } from 'react-apollo'
import { updateEvent } from '../../../../graphql/updateEvent'
import { getEvent } from '../../../../graphql/event'

import { withSpinner } from '../../../../Components/withSpinner'
import UpdateEventForm from './UpdateEventForm'
import {
    GoogleAutocomplete,
    geoCode
} from '../../../../Components/GoogleAutocomplete'

class UpdateEventFormContainer extends Component {
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
        photo: '',
        called: 0
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.called === 0) {
            return {
                title: nextProps.data.event.title,
                description: nextProps.data.event.description,
                organizer: nextProps.data.event.organizer,
                category: nextProps.data.event.category,
                startDate: nextProps.data.event.startDate,
                startTime: nextProps.data.event.startTime,
                endDate: nextProps.data.event.endDate,
                endTime: nextProps.data.event.endTime,
                location: nextProps.data.event.location,
                photo: nextProps.data.event.photo,
                called: 1
            }
        }
        return null
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    updateEvent = async () => {
        const response = await this.props.updateEvent({
            variables: {
                id: this.props.match.params.id,
                title: this.state.title,
                description: this.state.description,
                organizer: this.state.organizer,
                category: this.state.category,
                startDate: this.state.startDate,
                startTime: this.state.startTime,
                endDate: this.state.endDate,
                endTime: this.state.endTime,
                location: this.state.location,
                lat: this.state.lat,
                lng: this.state.lng,
                photo: this.state.photo
            }
        })
        this.props.history.push('/event/' + response.data.updateEvent.id)
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
        return (
            <GoogleAutocomplete
                onChange={val => this.handleChangeState('location', val)}
                onBlur={val => this.getLatLng(val)}
            >
                {({
                    suggestions,
                    getSearchInputProps,
                    getSuggestionItemProps
                }) => (
                    <UpdateEventForm
                        updateEvent={this.updateEvent}
                        changeState={this.handleChangeState}
                        state={this.state}
                        suggestions={suggestions}
                        getSearchInputProps={getSearchInputProps}
                        getSuggestionItemProps={getSuggestionItemProps}
                    />
                )}
            </GoogleAutocomplete>
        )
    }
}

export default compose(
    updateEvent,
    getEvent,
    withSpinner
)(UpdateEventFormContainer)
