import React from 'react'

import Container from '../../Components/Container'
import Banner from './Components/Banner'
import Search from './Components/Search'

const Home = () => (
    <React.Fragment>
        <Banner />

        <Container>
            <Search />
        </Container>
    </React.Fragment>
)

export default Home
