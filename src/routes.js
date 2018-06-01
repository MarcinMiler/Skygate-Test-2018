import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Views/Home'
import Navbar from './Components/Navbar'

const Routes = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Route path="/" component={Home} />
        </div>
    </BrowserRouter>
)

export default Routes
