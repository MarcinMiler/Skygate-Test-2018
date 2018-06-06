import React, { Component } from 'react'
import { compose } from 'react-apollo'

import createEvent from '../../../../graphql/createEvent'
import AddEventForm from './AddEventForm'

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
                startDate: this.state.startDate,
                startTime: this.state.startTime,
                endDate: this.state.endDate,
                endTime: this.state.endTime,
                location: this.state.location,
                photo: this.state.photo
            }
        })
        this.props.history.push('event/' + response.data.createEvent.id)
    }

    render() {
        return (
            <AddEventForm
                changeState={this.handleChangeState}
                createEvent={this.createEvent}
            />
        )
    }
}

export default compose(createEvent)(AddEventFormContainer)
