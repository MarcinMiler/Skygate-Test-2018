import React from 'react'
import { Link } from 'react-router-dom'

import { PrimaryButton } from '../../../../Components/Buttons'
import Modal from '../Modal'
import { Row, ButtonsWrapper } from './style'

const Buttons = ({ toggleModal, isOpen, deleteEvent }) => (
    <ButtonsWrapper>
        <Modal
            isOpen={isOpen}
            toggleModal={toggleModal}
            deleteEvent={deleteEvent}
        />
        <Row>
            <PrimaryButton shadow borderRadius onClick={() => toggleModal()}>
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

export default Buttons
