import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import AddEventForm from './AddEventForm'
import gql from 'graphql-tag'

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

    render() {
        const {
            title,
            description,
            organizer,
            category,
            startDate,
            startTime,
            endDate,
            endTime,
            location,
            photo
        } = this.state
        return (
            <Mutation
                mutation={createEventMutation}
                variables={{
                    title,
                    description,
                    organizer,
                    category,
                    startDate: startDate + ' ' + startTime,
                    endDate: endDate + ' ' + endTime,
                    location,
                    photo
                }}
            >
                {createEvent => (
                    <AddEventForm
                        changeState={this.handleChangeState}
                        createEvent={createEvent}
                    />
                )}
            </Mutation>
        )
    }
}

const createEventMutation = gql`
    mutation createEvent(
        $title: String!
        $description: String!
        $organizer: String!
        $location: String!
        $startDate: String!
        $endDate: String!
        $photo: String!
        $category: String!
    ) {
        createEvent(
            title: $title
            description: $description
            organizer: $organizer
            location: $location
            startDate: $startDate
            endDate: $endDate
            photo: $photo
            category: $category
        ) {
            id
            title
            description
            organizer
            location
            startDate
            endDate
            photo
            category
        }
    }
`

export default AddEventFormContainer
