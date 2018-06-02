import React from 'react'

import Container from '../../Components/Container'
import Banner from './Components/Banner'
import Search from './Components/Search'
import Subtitle from '../../Components/Subtitle'
import Cards from './Components/Cards'
import { PrimaryButton } from '../../Components/Buttons'

const Home = () => (
    <React.Fragment>
        <Banner />

        <Container>
            <Search />

            <Subtitle>Popular events in Gliwice</Subtitle>

            <Cards />
        </Container>
    </React.Fragment>
)

export default Home
