import styled from 'styled-components'

export const CountDownWrapper = styled.div`
    max-width: 900px;
    height: 280px;
    margin: -140px auto 0 auto;
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 15px #afafaf;
    user-select: none;
`
export const CountDownItem = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #e5e5e5;

    &:nth-child(4) {
        border: none;
    }
`
export const CountDownNumber = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 48px;
    font-weight: 500;
    color: #f50057;
`
export const CountDownText = styled.h1`
    text-align: center;
    font-size: 38px;
    font-weight: 400;
    color: #444444;
`
