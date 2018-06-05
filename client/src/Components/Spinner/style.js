import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
    0%, 80%, 100% {
        transform: scale(0.0)
    }
    40% {
        transform: scale(1)
    }
`

export const SpinnerWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SpinnerBounceWrap = styled.div`
    width: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const SpinnerBounce = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f50057;

    animation: ${bounce} 1.4s infinite ease-in-out both;

    &:nth-child(1) {
        animation-delay: -0.32s;
    }
    &:nth-child(2) {
        animation-delay: -0.16s;
    }
`
