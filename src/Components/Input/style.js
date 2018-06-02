import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    height: 60px;
    margin: 15px 0 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Label = styled.p`
    margin: 0;
    color: black;
    font-weight: 500;
    font-size: 15px;
`
export const StyledInput = styled.input`
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 4px;
    border: 1px solid #f2f1f6;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: black;
    transition: all 200ms ease-in;

    &:focus {
        outline: none;
        border: 1px solid #f50057;
        color: #f50057;
    }
`
