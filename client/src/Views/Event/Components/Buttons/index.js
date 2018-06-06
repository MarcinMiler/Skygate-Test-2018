import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Buttons from './Buttons'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

class ButtonsContainer extends Component {
    state = {
        isOpen: false
    }

    toggleModal = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

    render() {
        const { id } = this.props
        return (
            <Mutation mutation={deleteEventMutation} variables={{ id }}>
                {deleteEvent => {
                    const deleteEventAndChangeRoute = () => {
                        deleteEvent()
                        this.props.history.push('/exploreEvents')
                    }
                    return (
                        <Buttons
                            toggleModal={this.toggleModal}
                            isOpen={this.state.isOpen}
                            deleteEvent={deleteEventAndChangeRoute}
                        />
                    )
                }}
            </Mutation>
        )
    }
}

const deleteEventMutation = gql`
    mutation deleteEvent($id: Int!) {
        deleteEvent(id: $id)
    }
`

export default withRouter(ButtonsContainer)
