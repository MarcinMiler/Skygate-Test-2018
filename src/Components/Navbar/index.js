import React from 'react'
import { Container, Logo, NavItem, Wrap } from './style'
import { PrimaryButton } from '../Buttons'

const Navbar = () => (
    <Container>
        <Logo>Evently</Logo>
        <Wrap>
            <NavItem>Explore Events</NavItem>

            <PrimaryButton width="200px">Create Event</PrimaryButton>
        </Wrap>
    </Container>
)

export default Navbar
