import styled from 'styled-components'
import MDSearch from 'react-icons/lib/md/search'

export const Wrapper = styled.div`
    width: 80%;
    height: 55px;
    margin: 0 auto 15px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #f2f1f6;
`
export const WrapIcon = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f2f1f6;
`
export const SearchIcon = styled(MDSearch)`
    font-size: 32px;
    color: gray;
`
export const StyledInput = styled.input`
    height: 50px;
    flex-grow: 1;
    padding: 0 20px 0 20px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: black;
    &:focus {
        outline: none;
    }
`
