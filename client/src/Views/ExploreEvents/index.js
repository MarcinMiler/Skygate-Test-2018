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
        },
        title: '',
        category: 'All',
        from: null,
        to: null
    }

    handleChangeState = (key, value) => this.setState(() => ({ [key]: value }))

    render() {
        return (
            <Container>
                <Search changeState={this.handleChangeState} />
                <Row>
                    <Filter changeState={this.handleChangeState} />
                    <EventsList state={this.state} />
                </Row>
            </Container>
        )
    }
}

export default ExploreEvents
