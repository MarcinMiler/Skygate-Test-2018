import React from 'react'
import {
    ModalWrapper,
    ModalContent,
    ModalTitle,
    ModalButtons,
    Row
} from './style'
import { PrimaryButton } from '../../../../Components/Buttons'

const Modal = ({ isOpen, toggleModal, deleteEvent }) =>
    isOpen ? (
        <ModalWrapper>
            <ModalContent>
                <ModalTitle>Are you sure to delete this event?</ModalTitle>

                <ModalButtons>
                    <Row>
                        <PrimaryButton
                            shadow
                            borderRadius
                            onClick={() => toggleModal()}
                        >
                            Cancel
                        </PrimaryButton>

                        <PrimaryButton
                            shadow
                            borderRadius
                            onClick={() => deleteEvent()}
                        >
                            Delete
                        </PrimaryButton>
                    </Row>
                </ModalButtons>
            </ModalContent>
        </ModalWrapper>
    ) : (
        <div />
    )

export default Modal
