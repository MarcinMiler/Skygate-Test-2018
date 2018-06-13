import React, { Component } from 'react'

import { SearchContext } from '../../Components/SearchContext'
import Container from '../../Components/Container'
import EventsList from './Components/EventsList'
import Filter from './Components/Filter'
import Search from './Components/Search'
import { Row } from './style'

class ExploreEvents extends Component {
    render() {
        return (
            <SearchContext.Consumer>
                {state => (
                    <Container>
                        <Search changeState={state.changeState} state={state} />
                        <Row>
                            <Filter changeState={state.changeState} />
                            <EventsList state={state} />
                        </Row>
                    </Container>
                )}
            </SearchContext.Consumer>
        )
    }
}

export default ExploreEvents
