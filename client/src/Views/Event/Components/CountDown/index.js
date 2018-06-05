import React, { Component } from 'react'
import {
    CountDownWrapper,
    CountDownItem,
    CountDownNumber,
    CountDownText
} from './style'

class CountDown extends Component {
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    componentDidMount() {
        this.interval = setInterval(this.calculateCountDown, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    calculateCountDown = () => {
        const dateToCount = new Date(this.props.date).getTime()
        const now = new Date().getTime()

        const distance = dateToCount - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        this.setState(() => ({
            days,
            hours,
            minutes,
            seconds
        }))
    }

    addZeroBefore = value => (String(value).length < 2 ? '0' + value : value)

    render() {
        const { days, hours, minutes, seconds } = this.state

        return (
            <CountDownWrapper>
                <CountDownItem>
                    <CountDownNumber>
                        {this.addZeroBefore(days)}
                    </CountDownNumber>
                    <CountDownText>Days</CountDownText>
                </CountDownItem>

                <CountDownItem>
                    <CountDownNumber>
                        {this.addZeroBefore(hours)}
                    </CountDownNumber>
                    <CountDownText>Hours</CountDownText>
                </CountDownItem>

                <CountDownItem>
                    <CountDownNumber>
                        {this.addZeroBefore(minutes)}
                    </CountDownNumber>
                    <CountDownText>Minutes</CountDownText>
                </CountDownItem>

                <CountDownItem>
                    <CountDownNumber>
                        {this.addZeroBefore(seconds)}
                    </CountDownNumber>
                    <CountDownText>Seconds</CountDownText>
                </CountDownItem>
            </CountDownWrapper>
        )
    }
}

export default CountDown
