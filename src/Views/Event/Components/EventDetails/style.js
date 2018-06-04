import styled from 'styled-components'

import BackgroundImage from '../../../../Images/event.jpeg'

export const EventDetailsWrapper = styled.div`
    width: 100%;
    margin-top: 150px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 15px #cccccc;
`
export const EventImage = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 4px;
    background: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
`
export const EventContent = styled.div`
    width: 80%;
    padding: 90px 50px 20px 50px;
`
export const EventDescription = styled.p`
    margin: 0 0 50px 0;
    color: gray;
`
