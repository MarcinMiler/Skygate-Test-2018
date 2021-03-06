import React, { Component } from 'react'
import { compose } from 'react-apollo'
import { deleteEvent } from '../../../../graphql/deleteEvent'

import Buttons from './Buttons'

class ButtonsContainer extends Component {
    state = {
        isOpen: false
    }

    toggleModal = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

    deleteEvent = async () => {
        await this.props.deleteEvent(this.props.id)
        this.props.history.push('/exploreEvents')
    }

    render() {
        return (
            <Buttons
                toggleModal={this.toggleModal}
                isOpen={this.state.isOpen}
                id={this.props.id}
                deleteEvent={this.deleteEvent}
            />
        )
    }
}

export default compose(deleteEvent)(ButtonsContainer)
