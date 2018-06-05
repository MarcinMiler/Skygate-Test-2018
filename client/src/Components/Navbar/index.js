import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Logo, NavItem, Wrap } from './style'
import { PrimaryButton } from '../Buttons'

const Navbar = () => (
    <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>Evently</Logo>
        </Link>

        <Wrap>
            <Link to="/expolreEvents" style={{ textDecoration: 'none' }}>
                <NavItem>Explore Events</NavItem>
            </Link>

            <Link to="/addEvent" style={{ textDecoration: 'none' }}>
                <PrimaryButton width="200px">Create Event</PrimaryButton>
            </Link>
        </Wrap>
    </Container>
)

export default Navbar
