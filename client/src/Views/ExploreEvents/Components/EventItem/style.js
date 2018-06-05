import styled from 'styled-components'
import BackgroundImage from '../../../../Images/happy.jpeg'

export const EventItemWrapper = styled.div`
    width: 100%;
    height: 220px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0px 0px 15px #cccccc;
    cursor: pointer;
    transition: all 300ms linear;

    &:hover {
        box-shadow: 0px 0px 65px #adadad;
        transform: scale(1.01);
    }
`
export const EventImage = styled.div`
    width: 360px;
    height: 100%;
    border-radius: 4px;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
`
export const EventContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const EventTitle = styled.p`
    margin: 0;
    padding: 20px 0 0 20px;
    color: black;
    font-size: 24px;
`
export const EventDate = styled.p`
    padding-left: 20px;
    font-size: 16px;
    color: gray;
`
export const EventDescription = styled.p`
    padding-left: 20px;
    width: 80%;
    color: gray;
`
export const EventCategory = styled.p`
    margin: 0;
    padding: 12px 0 12px 20px;
    color: gray;
    border-top: 1px solid lightgray;
`
