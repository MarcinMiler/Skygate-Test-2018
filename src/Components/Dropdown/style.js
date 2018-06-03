import styled from 'styled-components'

export const Label = styled.p`
    margin: 0;
    color: black;
    font-weight: 500;
    font-size: 15px;
`
export const Select = styled.select`
    height: 60px;
    margin: 15px 0 35px 0;
    padding: 20px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #f2f1f6;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: black;

    &:focus {
        outline: none;
        border: 1px solid #f50057;
    }
`
export const Option = styled.option`
    margin: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
`
