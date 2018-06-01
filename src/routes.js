import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Views/Home'

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>
)

export default Routes
