import styled from 'styled-components'
import MDSearch from 'react-icons/lib/md/search'

export const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    margin: -130px 0 70px 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 0px 25px #888888;
`
export const SearchIcon = styled(MDSearch)`
    font-size: 32px;
    color: gray;
`
