import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    background-color: white;
    box-shadow: 0 0 15px #888888;
`
export const Wrap = styled.div`
    display: flex;
    flex-direction: row;
`
export const Logo = styled.h2`
    margin-left: 20px;
    color: #f50057;
`
export const NavItem = styled.div`
    height: 100%;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-weight: 500;
    color: #f50057;
    cursor: pointer;
    user-select: none;
`
