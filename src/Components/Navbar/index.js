import React from 'react'
import { Container, Logo, Left, Right, Button, NavItem, Wrap } from './style'

const Navbar = () => (
    <Container>
        <Logo>Evently</Logo>
        <Wrap>
            <NavItem>Explore Events</NavItem>
            <Button>Create Event</Button>
        </Wrap>
    </Container>
)

export default Navbar
