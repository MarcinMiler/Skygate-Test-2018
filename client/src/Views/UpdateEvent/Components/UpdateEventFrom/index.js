import React, { Component } from 'react'
import { compose } from 'react-apollo'
import { updateEvent } from '../../../../graphql/updateEvent'
import { getEvent } from '../../../../graphql/event'

import { withSpinner } from '../../../../Components/withSpinner'
import UpdateEventForm from './UpdateEventForm'

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
        photo: '',
        called: 0
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.called === 0) {
            console.log('called')
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
                photo: this.state.photo
            }
        })
        console.log(response.data.updateEvent.id)
        this.props.history.push('/event/' + response.data.updateEvent.id)
    }

    render() {
        return (
            <UpdateEventForm
                updateEvent={this.updateEvent}
                changeState={this.handleChangeState}
                state={this.state}
            />
        )
    }
}

export default compose(
    updateEvent,
    getEvent,
    withSpinner
)(UpdateEventFormContainer)
