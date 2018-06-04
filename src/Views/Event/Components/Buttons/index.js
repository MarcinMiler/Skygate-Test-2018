import React from 'react'
import { Link } from 'react-router-dom'
import { Row, ButtonsWrapper } from './style'
import { PrimaryButton } from '../../../../Components/Buttons'

const Buttons = () => (
    <ButtonsWrapper>
        <Row>
            <PrimaryButton shadow borderRadius>
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
