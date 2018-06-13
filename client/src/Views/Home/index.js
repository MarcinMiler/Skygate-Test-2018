import React from 'react'

import Container from '../../Components/Container'
import Subtitle from '../../Components/Subtitle'
import Banner from './Components/Banner'
import Search from './Components/Search'
import Cards from './Components/Cards'
import Categories from './Components/Categories'

const Home = () => (
    <React.Fragment>
        <Banner />

        <Container>
            <Search />

            <Subtitle>Popular events in Gliwice</Subtitle>

            <Cards />

            <Subtitle>Browse by categories</Subtitle>

            <Categories />
        </Container>
    </React.Fragment>
)

export default Home
