import styled from 'styled-components'

import MDCalendar from 'react-icons/lib/md/event-note'
import MDLocation from 'react-icons/lib/md/location-on'

export const LocationInfoWrapper = styled.div`
    width: 100%;
    margin: 100px 0 60px 0;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 15px #cccccc;
`
export const LocationInfoTitle = styled.p`
    margin: 0;
    padding: 50px;
    font-size: 28px;
    color: #f50057;
`
export const WrapIcon = styled.div`
    margin: 0 0 20px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const LocationInfoText = styled.p`
    margin: 0 0 0 10px;
    font-size: 20px;
    color: gray;
`
export const CalendarIcon = styled(MDCalendar)`
    font-size: 32px;
    color: #f50057;
`
export const LocationIcon = styled(MDLocation)`
    font-size: 32px;
    color: #f50057;
`
export const GoogleMapContainer = styled.div`
    width: 100%;
    height: 600px;
`
