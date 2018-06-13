import React from 'react'

import img from '../../../../Images/happy.jpeg'
import {
    Wrapper,
    Image,
    CardTitle,
    Content,
    CardSubtitle,
    Category
} from './style'

const Card = () => (
    <Wrapper>
        <Image src={img} />

        <Content>
            <CardTitle>Meetup</CardTitle>
            <CardSubtitle>Mon 11, Apr, 2018</CardSubtitle>

            <Category>#IT</Category>
        </Content>
    </Wrapper>
)

export default Card
