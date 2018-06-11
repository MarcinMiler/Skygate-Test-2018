import React, { Component } from 'react'

import Container from '../../Components/Container'
import EventsList from './Components/EventsList'
import Filter from './Components/Filter'
import Search from './Components/Search'
import { Row } from './style'

class ExploreEvents extends Component {
    state = {
        location: {
            description: '',
            terms: []
        }
    }

    handleChangeState = (key, value) => this.setState(() => ({ [key]: value }))

    render() {
        console.log(this.state)
        return (
            <Container>
                <Search changeState={this.handleChangeState} />
                <Row>
                    <Filter />
                    <EventsList state={this.state} />
                </Row>
            </Container>
        )
    }
}

export default ExploreEvents
