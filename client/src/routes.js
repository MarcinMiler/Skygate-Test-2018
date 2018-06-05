import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Views/Home'
import Navbar from './Components/Navbar'
import AddEvent from './Views/AddEvent'
import ExploreEvents from './Views/ExploreEvents'
import Event from './Views/Event'
import UpdateEvent from './Views/UpdateEvent'

const ScrollToTop = () => {
    window.scrollTo(0, 0)
    return null
}

const Routes = () => (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
            <Navbar />
            <Route component={ScrollToTop} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/addEvent" component={AddEvent} />
                <Route exact path="/expolreEvents" component={ExploreEvents} />
                <Route exact path="/event" component={Event} />
                <Route exact path="/updateEvent" component={UpdateEvent} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default Routes
