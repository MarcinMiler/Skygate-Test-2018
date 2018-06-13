import React from 'react'

import { PrimaryButton } from '../../../../Components/Buttons'
import Card from '../Card'
import { Wrapper, Center } from './style'

const Cards = () => (
    <Wrapper>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <Card key={i} />)}
        <Center>
            <PrimaryButton height="55px" borderRadius shadow>
                See more
            </PrimaryButton>
        </Center>
    </Wrapper>
)

export default Cards
