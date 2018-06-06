import React from 'react'
import { withRouter } from 'react-router-dom'

import { PrimaryButton } from '../../../../Components/Buttons'
import Modal from '../Modal'
import { Row, ButtonsWrapper } from './style'

const Buttons = ({ history, toggleModal, isOpen, id, deleteEvent }) => (
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

            <PrimaryButton
                shadow
                borderRadius
                onClick={() => history.push('/updateEvent/' + id)}
            >
                Update Event
            </PrimaryButton>
        </Row>
    </ButtonsWrapper>
)

export default withRouter(Buttons)
