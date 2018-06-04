import React from 'react'
import {
    CountDownWrapper,
    CountDownItem,
    CountDownNumber,
    CountDownText
} from './style'

const CountDown = () => (
    <CountDownWrapper>
        <CountDownItem>
            <CountDownNumber>06</CountDownNumber>
            <CountDownText>Days</CountDownText>
        </CountDownItem>

        <CountDownItem>
            <CountDownNumber>20</CountDownNumber>
            <CountDownText>Hours</CountDownText>
        </CountDownItem>

        <CountDownItem>
            <CountDownNumber>50</CountDownNumber>
            <CountDownText>Minutes</CountDownText>
        </CountDownItem>

        <CountDownItem>
            <CountDownNumber>11</CountDownNumber>
            <CountDownText>Seconds</CountDownText>
        </CountDownItem>
    </CountDownWrapper>
)

export default CountDown
