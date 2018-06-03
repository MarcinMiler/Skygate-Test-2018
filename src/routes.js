import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Views/Home'
import Navbar from './Components/Navbar'
import AddEvent from './Views/AddEvent'
import ExploreEvents from './Views/ExploreEvents'

const Routes = () => (
    <BrowserRouter>
        <div>
            <Navbar />

            <Route exact path="/" component={Home} />
            <Route exact path="/addEvent" component={AddEvent} />
            <Route exact path="/exploreEvents" component={ExploreEvents} />
        </div>
    </BrowserRouter>
)

export default Routes
