import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    background-color: white;
    box-shadow: 0px 0px 15px #888888;
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
export const Button = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #f50057;
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
`
