import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, ButtonsWrapper } from './style'
import { PrimaryButton } from '../../../../Components/Buttons'
import Modal from '../Modal'

class Buttons extends Component {
    state = {
        isOpen: false
    }

    toggleModal = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

    render() {
        return (
            <ButtonsWrapper>
                <Modal
                    isOpen={this.state.isOpen}
                    toggleModal={this.toggleModal}
                />
                <Row>
                    <PrimaryButton
                        shadow
                        borderRadius
                        onClick={() => this.toggleModal()}
                    >
                        Delete Event
                    </PrimaryButton>

                    <Link to="/updateEvent" style={{ textDecoration: 'none' }}>
                        <PrimaryButton shadow borderRadius>
                            Update Event
                        </PrimaryButton>
                    </Link>
                </Row>
            </ButtonsWrapper>
        )
    }
}

export default Buttons
